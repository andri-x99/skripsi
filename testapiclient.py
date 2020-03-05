## =============================================================================== 
import requests
import json
import time
from flask import Flask
from pymongo import MongoClient 

# mongo --host 10.33.109.102 --port 27217

# app = Flask('test')
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

def tabel_ke_1():
    # =================================================================
    # create a formatted string of the Python JSON object
    # text = json.dumps(obj, sort_keys=True, indent=4)
    # print(text)
    # =================================================================
    #                   KONEKSI KE DATABASE MONGO
    # =================================================================
    try: 
        koneksi = MongoClient('localhost',27017) 
        print("Menghubungkan ke MongoDB..............") 
        print("Berhasil Terhubung!") 
    except:   
        print("Maaf, belum bisa terhubung dengan MongoDB")
        print("Silahkan check kembali konfigurasi Anda")
    db = koneksi.dionea
    collection =  db.connections
    # =================================================================
    #                 MENGHITUNG DATA YANG ADA DI API
    # =================================================================
    results = [] 
    for ar in get_respon1(): 
        results.append(ar) 
    # print (len(results))d
    print ("Data sekarang adalah : {}".format(len(get_respon1())))
    # =================================================================
    #                       MENGAMBIL DATA UPDATE
    # =================================================================
    lama = len(get_respon1())
    time.sleep(10)
    baru = len(get_respon1())
    # =================================================================
    #            MENAMPILKAN DAN MEMASUKKAN KE MONGODB
    # =================================================================
    if baru > lama:
        results = []
        for ar in get_respon1(): 
            results.append(ar)
        for update in range(lama,baru):
            print (results[update])
            collection.insert(results[update])
            # for data in results[update]:
            #     db.collection.find()
    else :
        print("Tidak ada penambahan data terbaru pada Dionaea!")
tabel_ke_1()



# if x 
# ======================================================================

# api_url = 'http://127.0.0.1:5000/' # alamat API
# results = requests.get(api_url) # mengirimkan request ke alamat API

# if results.status_code == requests.codes.ok : # server memberikan respon ok
#     hasil = results.json() # konversi hasil dari format json ke dictionary
#     print("Sukses")
#     # rates = hasil['connections'] # ambil rate konversi tiap mata uang ke IDR
#     # for cur,vals in rates.items():
#     #     val1 = 1 / vals
#     #     print('1 {} = {} IDR'.format(cur,val1))
#     # else :
#     #     print('Gagal mendapatkan respon yang diinginkan dari server')
# https://www.dataquest.io/blog/python-api-tutorial/
# https://github.com/fauziacharuna/MengukurKetinggianAir
# https://medium.com/swlh/basic-c-r-u-d-with-pymongo-3a33a04dec8f
# https://medium.com/@MicroPyramid/mongodb-crud-operations-with-python-pymongo-a26883af4d09
# https://gist.github.com/cjgiridhar/3167821

# mantap bagus
# https://medium.com/swlh/inserting-and-reading-mongodb-documents-from-a-python-flask-api-4fa7be61e45
# https://github.com/gsweene2/python-flask-mongo-example/blob/master/app.py
# https://github.com/ghiscure/SSO-Internet-UGM/blob/master/login.py