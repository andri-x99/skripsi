import pymongo

db = pymongo.MongoClient("mongodb://localhost:27017/")
database = db["dionea"]
namatabel = database['connections']

# myclient = pymongo.MongoClient("mongodb://localhost:27017/")

# mydb = myclient["mydatabase"]

# dblist = myclient.list_database_names()
# if "mydatabase" in dblist:
#   print("The database exists.")