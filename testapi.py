import sqlite3, time, threading
from flask import jsonify, request, Flask, json
from dictor import dictor

app = Flask('hehe')

def database():
    con = sqlite3.connect('dionaea.sqlite')
    return con
def thebase():
    db = database()
    cur = db.cursor()
    return cur
def getData(res, cur):
    data= []
    for i in range(len(res)):
        x = dict(
            zip([c[0] for c in cur.description], 
            res[i])
            )
        data.append(x)
    return data
# CLUE DINAMIS    
# @app.route('/<path:url_path>')
# def index( url_path="" ):
# return url_path
@app.route('/connections')
def tabel1():
    cur = thebase()
    res = cur.execute("select * from connections where _id=").fetchall()
    data = getData(res, cur)
    return jsonify(data)
# select where id
# dari server ngirim GET ke honeypot terkait parameter last id
# dari honeypot nerima get

@app.route('/dcerpcbinds')
def tabel2():
    cur = thebase()
    res = cur.execute("select * from dcerpcbinds").fetchall()
    data = getData(res, cur)
    return jsonify(data)
@app.route('/dcerpcrequests')
def tabel3():
    cur = thebase()
    res = cur.execute("select * from dcerpcrequests").fetchall()
    data = getData(res, cur)
    return jsonify(data)
@app.route('/downloads')
def tabel4():
    cur = thebase()
    res = cur.execute("select * from downloads").fetchall()
    data = getData(res, cur)
    return jsonify(data)
@app.route('/offers')
def tabel5():
    cur = thebase()
    res = cur.execute("select * from offers").fetchall()
    data = getData(res, cur)
    return jsonify(data)
@app.route('/logins')
def tabel6():
    cur = thebase()
    res = cur.execute("select * from logins").fetchall()
    data = getData(res, cur)
    return jsonify(data)
@app.route('/mssql_commands')
def tabel7():
    cur = thebase()
    res = cur.execute("select * from mssql_commands").fetchall()
    data = getData(res, cur)
    return jsonify(data)
@app.route('/mssql_fingerprints')
def tabel8():
    cur = thebase()
    res = cur.execute("select * from mssql_fingerprints").fetchall()
    data = getData(res, cur)
    return jsonify(data)
@app.route('/mysql_command_args')
def tabel9():
    cur = thebase()
    res = cur.execute("select * from mysql_command_args").fetchall()
    data = getData(res, cur)
    return jsonify(data)
@app.route('/mysql_command_ops')
def tabel10():
    cur = thebase()
    res = cur.execute("select * from mysql_command_ops").fetchall()
    data = getData(res, cur)
    return jsonify(data)
@app.route('/mysql_commands')
def tabel11():
    cur = thebase()
    res = cur.execute("select * from mysql_commands").fetchall()
    data = getData(res, cur)
    return jsonify(data)

app.run(debug=True, host='10.33.109.245')