from flask import Flask, jsonify, request, render_template

app = Flask('__name__')

@app.route('/')
def coba():
    return render_template('home.html')

if __name__ == "__main__":
    app.run(debug=True)