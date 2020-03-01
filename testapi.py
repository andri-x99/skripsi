import sqlite3
import time, threading
from flask import jsonify
from flask import request
from flask import json
from flask import Flask
from dictor import dictor

app = Flask('hehe')
WAIT_SECONDS = 1

# def database():
#     con = sqlite3.connect('dionaea.sqlite')
#     return con

# @app.route('/by')
def database():
    con = sqlite3.connect('dionaea.sqlite')
    # print(time.ctime())
    # threading.Timer(WAIT_SECONDS, database).start()
    # return (con, database)
    return con

@app.route('/connections')
def tabel1():
    db = database()
    cur = db.cursor()
    res = cur.execute("select * from connections").fetchall()
    
    data= []
    for i in range(len(res)):
        x = dict(zip([c[0] for c in cur.description], res[i]))
        # print(x)
        data.append(x)
    return jsonify(data)



app.run(debug=True)