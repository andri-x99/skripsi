from pymongo import MongoClient 
import datetime

def kakak():
    try: 
        koneksi = MongoClient('localhost',27017) 
        print("Connected successfully!!!") 
    except:   
        print("Could not connect to MongoDB") 

    db = koneksi.database
    collection =  db.connections
    return collection.find()


# https://www.geeksforgeeks.org/mongodb-python-insert-update-data/
# https://api.mongodb.com/python/current/tutorial.html
# https://www.youtube.com/watch?v=upGiAG7-Sa4
# https://github.com/PrettyPrinted/mongodb_backed_restful/blob/master/mongo.py
# https://github.com/mohanad86/mongodb/blob/master/mongo.py