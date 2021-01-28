from fastapi import FastAPI, status, Response
from fastapi.middleware.cors import CORSMiddleware
from starlette.status import HTTP_200_OK, HTTP_404_NOT_FOUND, HTTP_406_NOT_ACCEPTABLE
import uvicorn
import json, requests
from pydantic import BaseModel
from models import PostJob, Market, Vaccine
import pymongo
from pymongo import MongoClient
#import settings
from bson import ObjectId
from bson.json_util import loads, dumps
import datetime

# class JSONEncoder(json.JSONEncoder):
#     def default(self, o):
#         if isinstance(o, ObjectId):
#             return str(o)
#         return json.JSONEncoder.default(self, o)
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3001"
]

def parse_json(data):
    return json.loads(dumps(data))

client = MongoClient("mongodb+srv://codebreak:codebreak2021@cluster0.t9bjr.mongodb.net/User1?retryWrites=true&w=majority")
db = client['User1']
jobs = db['jobs']
market = db['market']
social = db['social']
tracker = db['tracker']
vaccine = db['vaccine']
slots = db['slots']

app = FastAPI(debug = True,
                title="Voice4Rural",
                description="API endpoints for accessing database info",
                version="1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
'''
--------JOBS API----------
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


@app.delete('/jobs/{item_id}', status_code = 200, name = 'Delete a Job')
async def deletejobs(item_id: str, response: Response):
    try:
        f = jobs.find_one({"_id": ObjectId(item_id)})
        jobs.delete_one({"_id": ObjectId(item_id)})
        response.status_code = status.HTTP_200_OK
        return f
    except Exception:
        return HTTP_404_NOT_FOUND

'''
--------MARKET API----------
'''
@app.get('/market', status_code = 200, name = 'Show all Listed Items')
async def showitems(response: Response):
    dictitems = dict()
    listitems = []
    count = 0
    for j in market.find():
        count+=1
        listitems.append(j)
    if count > 0:
        dictitems['items-count'] = count
        dictitems['listings'] = listitems
        response.status_code = status.HTTP_200_OK
        return parse_json(dictitems)

    response.status_code = status.HTTP_204_NO_CONTENT    
    return parse_json(dictitems)

@app.post('/market', status_code = 200, name = 'Post an Item for sale')
async def postitem(m: Market, response: Response):
    market.insert_one(parse_json(m.__dict__))
    response.status_code = status.HTTP_202_ACCEPTED
    return parse_json(m.__dict__)

@app.delete('/market/{item_id}', status_code = 200, name = 'Delete a Listed Item')
async def deletejobs(item_id: str, response: Response):
    try:
        f = market.find_one({"_id": ObjectId(item_id)})
        market.delete_one({"_id": ObjectId(item_id)})
        response.status_code = status.HTTP_200_OK
        return f
    except Exception:
        return HTTP_404_NOT_FOUND

'''
--------VACCINE API----------
'''
sl = [50,50,50,50,50]
dates = dict()
base = datetime.datetime.today()
for x in range(0, 5):
    d = (base + datetime.timedelta(days=x+1))
    fd = d.strftime("%d/%m/%y")
    dates[fd] = sl[x]

@app.get('/vaccine', status_code=200, name = "Get slots remaining")
async def showslots(response: Response):
    return parse_json(dates)



@app.post('/vaccine',status_code=200, name = "Book and update slots")
async def bookslots(v: Vaccine, response: Response):
    dt = v.date
    m = v.members    
    if dt in dates.keys(): 
        if dates[dt]>=m:       
            dates[dt]-=m
            if dates[dt] <= 0:
                dates[dt] = 0    
        else:
            return HTTP_406_NOT_ACCEPTABLE    
    response.status_code = status.HTTP_201_CREATED
    slots.insert_one(parse_json(v.__dict__))
    return dates           
    
@app.get('/vaccine/reset',status_code=200, name = "Reset slots")
async def resetslots(response: Response):
    sl = [50,50,50,50,50]
    base = datetime.datetime.today()
    for x in range(0, 5):
        d = (base + datetime.timedelta(days=x+1))
        fd = d.strftime("%d/%m/%y")
        dates[fd] = sl[x]
    response.status_code = status.HTTP_205_RESET_CONTENT
    return parse_json(dates)


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)





