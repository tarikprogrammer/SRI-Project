from flask import Flask, request, jsonify
import re
from elasticsearch import Elasticsearch
from flask_cors import CORS
from sentence_transformers import SentenceTransformer

app = Flask(__name__)
CORS(app)
es = Elasticsearch(
    "https://localhost:9200/",
    basic_auth=("elastic", "-xfouEshAQuhtQdoUS=Z"),
    verify_certs=False


)

model = SentenceTransformer('all-mpnet-base-v2')
team_names = [
    "Wydad", "FUS Rabat", "Raja Casablanca", "Berkane", "ASFAR",
    "Chabab Mohammedia", "FAR Rabat", "Maghreb Tetouan", "Olympique de Safi",
    "Union Touarga", "Hassania Agadir", "Renaissance Zemamra", "Mouloudia Oujda",
    "Youssoufia Berrechid", "Maghreb Fez"
]

keyWord_Search = [
    "President","Ville", "Description", "Nom du club", "Terrain", "Date de creation","Butteur","Ennemi","entraineur"

]


def extract_str(input_text, str_list):
    str_found = []
    for team in str_list:
        if re.search(rf'\b{team}\b', input_text, re.IGNORECASE):
            str_found.append(team)
    return str_found

@app.route('/search-teams', methods=['POST'])
def search_teams():
    content_type = request.headers.get('Content-Type')
    if(content_type == 'application/json'):
        data = request.get_json()
        input_keyword = data.get('input')
        print(input_keyword)

        teams = extract_str(input_keyword, team_names)
        print(teams)
        data = extract_str(input_keyword,keyWord_Search)
        print(data)

        if len(teams) >= 1:
            if len(teams) == 1:
                equipe_1 = teams[0]
                equipe_2 = None
            else:
                equipe_1, equipe_2 = teams[:2]

            vector_of_input_keyword = model.encode(input_keyword)

            query = {
                "field": "Equipe_1_vector",
                "query_vector": vector_of_input_keyword,
                "k": es.count(index="match-indexing")['count'],
                "num_candidates": 500
            }
            query1 = {
                "field": "Vector",
                "query_vector": vector_of_input_keyword,
                "k": es.count(index="equipev1-indexing")['count'],
                "num_candidates": 500
            }

            res = es.knn_search(
                index="match-indexing",
                knn=query,
                _source=["Round", "Equipe 1", "Equipe 2", "Resultat"]
            )
            if(data):
                res1 = es.knn_search(
                    index="equipev1-indexing",
                    knn=query1,
                    _source=["Nom de club"]+[d for d in data]
                )
                results_data = res1["hits"]["hits"][0]['_source']
                print(results_data)



            if(teams):
               results_team = res["hits"]["hits"]




            filtered_results = []

            if(results_team):

                for result in results_team:
                    source = result["_source"]
                    team1 = source["Equipe 1"]
                    team2 = source["Equipe 2"]

                    if equipe_2:
                        if (
                                (team1.lower() == equipe_1.lower() and team2.lower() == equipe_2.lower()) or
                                (team1.lower() == equipe_2.lower() and team2.lower() == equipe_1.lower())
                        ):
                            filtered_results.append(source)
                    else:
                        if team1.lower() == equipe_1.lower() or team2.lower() == equipe_1.lower():
                            filtered_results.append(source)
            if(data and filtered_results):
                return jsonify({"results_match": filtered_results,"result_club":results_data})
            elif(data):
                return jsonify({"result_club":results_data})
            else:
                return jsonify({"results_match": filtered_results})


if __name__ == '__main__':
    app.run(debug=True)
