import sqlite3
import time, threading
from flask import jsonify
from flask import request
from flask import json
from flask import Flask
from dictor import dictor

app = Flask('hehe')

def database():
    con = sqlite3.connect('dionaea.sqlite')
    return con

def getData(res, cur):
    data= []
    for i in range(len(res)):
        x = dict(
            zip([c[0] for c in cur.description], 
            res[i])
            )
        data.append(x)
    return data

def thebase():
    db = database()
    cur = db.cursor()
    return cur

@app.route('/connections')
def tabel1():
    cur = thebase()
    res = cur.execute("select * from connections").fetchall()
    data = getData(res, cur)
    return jsonify(data)

    @app.route('/<path:url_path>')
    def index( url_path="" ):
    return url_path

    # pakai if for menentukan pathnya
@app.route('/dcerpcbinds')
def tabel2():
    cur = thebase()
    res = cur.execute("select * from dcerpcbinds").fetchall()
    data = getData(res, cur)
    return jsonify(data)

# connections

# dcerpcbinds
# dcerpcrequests
# downloads 
# offers 

# logins 

# mssql_commands 
# mssql_fingerprints

# mysql_command_args 
# mysql_command_ops 
# mysql_commands 

app.run(debug=True,host='10.33.109.242')