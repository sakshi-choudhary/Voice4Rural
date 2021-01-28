from fastapi import FastAPI, status, Response
from starlette.status import HTTP_200_OK, HTTP_404_NOT_FOUND
import uvicorn
import json, requests
from pydantic import BaseModel
from models import PostJob
import pymongo
from pymongo import MongoClient
import settings
from bson import ObjectId
from bson.json_util import loads, dumps

# class JSONEncoder(json.JSONEncoder):
#     def default(self, o):
#         if isinstance(o, ObjectId):
#             return str(o)
#         return json.JSONEncoder.default(self, o)

def parse_json(data):
    return json.loads(dumps(data))

client = MongoClient(settings.mongoconnect)
db = client['User1']
jobs = db['jobs']
market = db['market']
social = db['social']
tracker = db['tracker']
vaccine = db['vaccine']

app = FastAPI(debug = True,
                title="Voice4Rural",
                description="API endpoints for accessing database info",
                version="1.0")

'''
JOBS API
'''
@app.get('/jobs', status_code = 200, name = 'Show all Jobs')
async def showjobs(response: Response):
    dictjobs = dict()
    listjobs = []
    count = 0
    for j in jobs.find():
        count+=1
        listjobs.append(j)
    if count > 0:
        dictjobs['job-count'] = count
        dictjobs['jobs'] = listjobs
        response.status_code = status.HTTP_200_OK
        return parse_json(dictjobs)

    response.status_code = status.HTTP_204_NO_CONTENT    
    return parse_json(dictjobs)


@app.post('/jobs', status_code = 200, name = 'Post a Job')
async def postjobs(pj:PostJob, response: Response):
    jobs.insert_one(parse_json(pj.__dict__))
    response.status_code = status.HTTP_202_ACCEPTED
    return parse_json(pj.__dict__)


@app.delete('/jobs/{item_id}', status_code = 200, name = 'Delete all Job')
async def deletejobs(item_id: str, response: Response):
    try:
        f = jobs.find_one({"_id": ObjectId(item_id)})
        jobs.delete_one({"_id": ObjectId(item_id)})
        response.status_code = status.HTTP_200_OK
        return f
    except Exception:
        return HTTP_404_NOT_FOUND


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)






