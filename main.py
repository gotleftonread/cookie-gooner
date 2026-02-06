from flask import Flask, request, Response

app = Flask(__name__)

@app.route('/get-cookie')
def get_cookie():
    cookie = request.cookies.get('.ROBLOSECURITY')
    if cookie:
        return f'Roblox Security Cookie: {cookie}'
    else:
        return 'Roblox Security Cookie not found.'

if __name__ == '__main__':
    app.run(port=5000)
