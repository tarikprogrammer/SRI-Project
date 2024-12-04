indexMapping = {
    "properties":{
        "Club Name":{
            "type":"text"
        },
        "City":{
            "type":"text"
        },
        "Stadium":{
            "type":"text"
        },
        "Founded Year":{
            "type":"text"
        },
        "Titles Won":{
            "type":"text"
        },
        "Club President":{
            "type":"text"
        },
        "Coach":{
            "type":"text"
        },
        "Top Scorer (Last Season)":{
            "type":"text"
        },
        "Main Rival":{
            "type":"text"
        },
        "Descriptions":{
            "type":"text"
        },
        "DescriptionVector":{
            "type":"dense_vector",
            "dims": 768,
            "index":True,
            "similarity": "l2_norm"
        }

    }
}