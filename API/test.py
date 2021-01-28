import pymongo
from pymongo import MongoClient
import settings
client = MongoClient(settings.mongoconnect)
db = client['User1']
jobs = db['jobs']
market = db['market']
social = db['social']
tracker = db['tracker']
vaccine = db['vaccine']
dictjobs = dict()
listjobs = []
count = 0
for j in jobs.find():
    count+=1
    listjobs.append(j)
dictjobs['job-count'] = count
dictjobs['jobs'] = listjobs
print(dictjobs)
print(type(dictjobs))
