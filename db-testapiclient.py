    # =================================================================
    #                   KONEKSI KE DATABASE MONGO
    # =================================================================
def fungsii():
    try: 
        koneksi = MongoClient('localhost',27017)
        db = koneksi.dionea
        collection =  db.connections 
        print("Menghubungkan ke MongoDB..............") 
        print("Berhasil Terhubung!") 
    except:   
        print("Maaf, belum bisa terhubung dengan MongoDB")
        print("Silahkan check kembali konfigurasi Anda")
    return fungsii()