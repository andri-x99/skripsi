## =============================================================================== 
import requests, time
from flask import Flask
from pymongo import MongoClient
# from db-testapiclient import 

# mongo --host 10.33.109.102 --port 27217

app = Flask('test')
bu_list = 
# =============================
# print(response.status_code) | Data gada, memasukkan pas awalnya gimana?
# print(response.json())      | 
# =============================

    # =================================================================
    #                     KONEKSI KE API HONEYPOT
    # =================================================================
def get_respon1():
    response = requests.get("http://10.33.109.242:5000/connections")
    return response.json()
def get_respon2():
    response = requests.get("http://10.33.109.242:5000/logins")
    return response.json()
def get_respon3():
    response = requests.get("http://10.33.109.242:5000/dcerpcrequests")
    return response.json()
def get_respon4():
    response = requests.get("http://10.33.109.242:5000/dcerpcbinds")
    return response.json()
def get_respon5():
    response = requests.get("http://10.33.109.242:5000/offers")
    return response.json()
def get_respon6():
    response = requests.get("http://10.33.109.242:5000/downloads")
    return response.json()
def get_respon7():
    response = requests.get("http://10.33.109.242:5000/mssql_commands")
    return response.json()
def get_respon8():
    response = requests.get("http://10.33.109.242:5000/mssql_fingerprints")
    return response.json()
def get_respon9():
    response = requests.get("http://10.33.109.242:5000/mysql_commands")
    return response.json()
def get_respon10():
    response = requests.get("http://10.33.109.242:5000/mysql_command_args")
    return response.json()
def get_respon11():
    response = requests.get("http://10.33.109.242:5000/mysql_command_ops")
    return response.json()

def tabel_ke_1():
    # =================================================================
    #                   KONEKSI KE DATABASE MONGO
    # =================================================================
    try: 
        koneksi = MongoClient('localhost',27017)
        db = koneksi.dionea
        collection1  =  db.connections 
        collection2  =  db.logins
        collection3  =  db.dcerpcrequests
        collection4  =  db.dcerpcbinds
        collection5  =  db.offers
        collection6  =  db.downloads
        collection7  =  db.mssql_commands
        collection8  =  db.mssql_fingerprints
        collection9  =  db.mysql_commands
        collection10 =  db.mysql_command_args
        collection11 =  db.mysql_command_ops
        print("Menghubungkan ke MongoDB..............") 
        print("Berhasil Terhubung!") 
    except:   
        print("Maaf, belum bisa terhubung dengan MongoDB")
        print("Silahkan check kembali konfigurasi Anda")
    # =================================================================
    #                 MENGHITUNG DATA YANG ADA DI API
    # =================================================================
    results1 = [] 
    for ar in get_respon1(): 
        results1.append(ar) 
    print ("Data sekarang adalah : {}".format(len(get_respon1())))
    
    results2 = [] 
    for ar in get_respon2(): 
        results2.append(ar) 
    print ("Data sekarang adalah : {}".format(len(get_respon2())))
    
    results3 = [] 
    for ar in get_respon3(): 
        results3.append(ar) 
    print ("Data sekarang adalah : {}".format(len(get_respon3())))
    
    results4 = [] 
    for ar in get_respon4(): 
        results4.append(ar) 
    print ("Data sekarang adalah : {}".format(len(get_respon4())))
    
    results5 = [] 
    for ar in get_respon5(): 
        results5.append(ar) 
    print ("Data sekarang adalah : {}".format(len(get_respon5())))
    
    results6 = [] 
    for ar in get_respon6(): 
        results6.append(ar) 
    print ("Data sekarang adalah : {}".format(len(get_respon6())))
    
    results7 = [] 
    for ar in get_respon7(): 
        results7.append(ar) 
    print ("Data sekarang adalah : {}".format(len(get_respon7())))
    
    results8 = [] 
    for ar in get_respon8(): 
        results8.append(ar) 
    print ("Data sekarang adalah : {}".format(len(get_respon8())))
    
    results9 = [] 
    for ar in get_respon9(): 
        results9.append(ar) 
    print ("Data sekarang adalah : {}".format(len(get_respon9())))
    
    results10 = [] 
    for ar in get_respon10(): 
        results10.append(ar) 
    print ("Data sekarang adalah : {}".format(len(get_respon10())))
    
    results11 = [] 
    for ar in get_respon11(): 
        results10.append(ar) 
    print ("Data sekarang adalah : {}".format(len(get_respon11())))
    # =================================================================
    #                       MENGAMBIL DATA UPDATE
    # =================================================================
    lama1 = len(get_respon1())
    lama2 = len(get_respon2())
    lama3 = len(get_respon3())
    lama4 = len(get_respon4())
    lama5 = len(get_respon5())
    lama6 = len(get_respon6())
    lama7 = len(get_respon7())
    lama8 = len(get_respon8())
    lama9 = len(get_respon9())
    lama10 = len(get_respon10())
    lama11 = len(get_respon11())
    time.sleep(10)
    baru1 = len(get_respon1())
    baru2 = len(get_respon2())
    baru3 = len(get_respon3())
    baru4 = len(get_respon4())
    baru5 = len(get_respon5())
    baru6 = len(get_respon6())
    baru7 = len(get_respon7())
    baru8 = len(get_respon8())
    baru9 = len(get_respon9())
    baru10 = len(get_respon10())
    baru11 = len(get_respon11())
    # =================================================================
    #   ada -     MENAMPILKAN DAN MEMASUKKAN KE MONGODB
    # =================================================================
    if baru1 > lama1:
        results1 = []
        for ar1 in get_respon1(): 
            results1.append(ar1)
        for update1 in range(lama1,baru1):
            print (results1[update1])
            collection1.insert(results1[update1])

    if baru2 > lama2:
        results2 = []
        for ar2 in get_respon2(): 
            results2.append(ar2)
        for update2 in range(lama2,baru2):
            print (results2[update2])
            collection2.insert(results2[update2])

    if baru3 > lama3:
        results3 = []
        for ar3 in get_respon3(): 
            results3.append(ar3)
        for update3 in range(lama3,baru3):
            print (results3[update3])
            collection3.insert(results3[update3])

    if baru4 > lama4:
        results4 = []
        for ar4 in get_respon4(): 
            results4.append(ar4)
        for update4 in range(lama4,baru4):
            print (results4[update4])
            collection4.insert(results4[update4])

    if baru5 > lama5:
        results5 = []
        for ar5 in get_respon5(): 
            results5.append(ar5)
        for update5 in range(lama5,baru5):
            print (results5[update5])
            collection5.insert(results5[update5])
    
    if baru6 > lama6:
        results6 = []
        for ar6 in get_respon6(): 
            results6.append(ar6)
        for update6 in range(lama6,baru6):
            print (results6[update6])
            collection6.insert(results6[update6])
    
    if baru7 > lama7:
        results7 = []
        for ar7 in get_respon7(): 
            results7.append(ar7)
        for update7 in range(lama7,baru7):
            print (results7[update7])
            collection7.insert(results7[update7])

    if baru8 > lama8:
        results8 = []
        for ar8 in get_respon8(): 
            results8.append(ar8)
        for update8 in range(lama8,baru8):
            print (results8[update8])
            collection8.insert(results8[update8])
    
    if baru9 > lama9:
        results9 = []
        for ar9 in get_respon9(): 
            results9.append(ar9)
        for update9 in range(lama9,baru9):
            print (results9[update9])
            collection9.insert(results9[update9])
    
    if baru10 > lama10:
        results10 = []
        for ar10 in get_respon10(): 
            results10.append(ar10)
        for update10 in range(lama10,baru10):
            print (results10[update10])
            collection10.insert(results10[update10])

    if baru11 > lama11:
        results11 = []
        for ar11 in get_respon11(): 
            results11.append(ar11)
        for update11 in range(lama11,baru11):
            print (results11[update11])
            
            collection11.insert(results11[update11])
    else :
        print("Tidak ada penambahan data terbaru pada Dionaea!")
while True:
    tabel_ke_1()

app.run(debug=True)


# buat endpoint buat manggil function diatas
# flask restfull+
# biar rapi = factory pattern

# ======================================================================

# api_url = 'http://127.0.0.1:5000/' # alamat API
# results = requests.get(api_url) # mengirimkan request ke alamat API

# https://www.dataquest.io/blog/python-api-tutorial/
# https://github.com/fauziacharuna/MengukurKetinggianAir
# https://medium.com/swlh/basic-c-r-u-d-with-pymongo-3a33a04dec8f
# https://medium.com/@MicroPyramid/mongodb-crud-operations-with-python-pymongo-a26883af4d09
# https://gist.github.com/cjgiridhar/3167821

# mantap bagus
# https://medium.com/swlh/inserting-and-reading-mongodb-documents-from-a-python-flask-api-4fa7be61e45
# https://github.com/gsweene2/python-flask-mongo-example/blob/master/app.py
# https://github.com/ghiscure/SSO-Internet-UGM/blob/master/login.py