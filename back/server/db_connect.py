import pymongo
from dotenv import load_dotenv
import os

load_dotenv()

user = os.getenv('MONGO_USER')
password = os.getenv('MONGO_PASSWORD')
host = os.getenv('MONGO_HOST')
db_name = os.getenv('MONGO_DB_NAME')
db_collection = os.getenv('MONGO_DB_COLLECTION')
uri = f"mongodb+srv://{user}:{password}@{host}/?retryWrites=true&w=majority"

def get_mongo_collection():
    client = pymongo.MongoClient(uri)
    mydb = client[str(db_name)]
    mycol = mydb[str(db_collection)]
    return mycol