from flask import Flask, jsonify, request, render_template
# tambah file local data.py
from data import Articles

app = Flask('__name__')

Articles = Articles()

@app.route('/')
def coba():
    return render_template('home.html')
@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/articles')
def articles():
    return render_template('articles.html', articles = Articles)

@app.route('/article/<string:id>/')
def article(id):
    return render_template('article.html', id=id)

if __name__ == "__main__":
    app.run(debug=True)

# create database myflaskapp;
# use myflaskapp;
# CREATE TABLE users(
#     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
#     name VARCHAR(100), 
#     email VARCHAR(100), 
#     username VARCHAR(30), 
#     password VARCHAR(100), 
#     register_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
# );