
## =============================================================================== 
import requests
import json
import time
# =============================
# print(response.status_code) | Data gada, memasukkan pas awalnya gimana
# print(response.json())      | 
# =============================
def get_respon():
    response = requests.get("http://10.33.109.242:5000/connections")
    return response.json()

def biar_rapi():
    # ===============================================================
    # create a formatted string of the Python JSON object
    # text = json.dumps(obj, sort_keys=True, indent=4)
    # print(text)
    results = [] 
    
    for ar in get_respon(): 
        results.append(ar) 
    # print (len(results))
    print ("Data sekarang adalah : {}".format(len(get_respon())))
    # ===============================================================
    lama = len(get_respon())
    time.sleep(30)
    baru = len(get_respon())
    # ================================================================
    if baru > lama:
        results = []
        for ar in get_respon(): 
            results.append(ar)
        for update in range(lama,baru):
            print (results[update])
    else :
        print("Tidak ada penambahan data terbaru pada Dionaea!")       
biar_rapi()


# if x 
# ===============================================================================

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
