import os
from pymongo import MongoClient
from pymongo.results import UpdateResult
from bson import ObjectId

CONNECTION_STRING = "mongodb+srv://~~~"

client = MongoClient(CONNECTION_STRING)


def get_submission(id):
    item = client.get_database('test').get_collection('submissions').find_one(ObjectId(id))
    return {
        'id': str(item['_id']),
        'code': item['code'],
        'language': item['language'],
        'problem': item['problem'],
    }

def update_submission(id, result):
    result: UpdateResult = client.get_database('test').get_collection('submissions').update_one(
        { "_id": ObjectId(id) }, { "$set": { "status": result } }
    )

    # 하나의 데이터가 변경되었는지 확인
    return result.modified_count == 1