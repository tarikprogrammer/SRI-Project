indexMapping = {
    "properties":{
        "Nom de club":{
            "type":"text"
        },
        "Ville":{
            "type":"text"
        },
        "Terrain":{
            "type":"text"
        },
        "Date de creation":{
            "type":"text"
        },
        "Titres gagnés":{
            "type":"text"
        },
        "President":{
            "type":"text"
        },
        "entraineur":{
            "type":"text"
        },
        "Butteur":{
            "type":"text"
        },
        "Ennemi":{
            "type":"text"
        },
        "Description":{
            "type":"text"
        },
        "Vector":{
            "type":"dense_vector",
            "dims": 768,
            "index":True,
            "similarity": "l2_norm"
        }

    }
}

"""indexMapping = {
    "properties":{
        "Round":{
            "type":"text"
        },
        "Equipe1":{
            "type":"text"
        },
        "Equipe2":{
            "type":"text"
        },
        "date":{
            "type":"text"
        },
        "Resultat":{
            "type":"text"
        },

        "Equipe_1_vector":{
            "type":"dense_vector",
            "dims": 768,
            "index":True,
            "similarity": "l2_norm"
        },
        "Equipe_2_vector":{
            "type":"dense_vector",
            "dims": 768,
            "index":True,
            "similarity": "l2_norm"
        }

    }
}"""