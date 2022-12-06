from flask import jsonify, request, Flask
from flask_cors import CORS

# create app

app = Flask(__name__)
app.config["DEBUG"] = True
CORS(app)

all_heroes = [

    { 'id': 11, 'name': 'Snorlax'       },
    { 'id': 12, 'name': 'Pikachu'       },
    { 'id': 13, 'name': 'JigglyPuff'    },
    { 'id': 14, 'name': 'Dragonite'     },
    { 'id': 15, 'name': 'SpriteTomb'    },
    { 'id': 16, 'name': 'Gengar'        },
    { 'id': 17, 'name': 'Milotic'       },
    { 'id': 18, 'name': 'Charizard'     },
    { 'id': 19, 'name': 'Venosaure'     },
    { 'id': 20, 'name': 'Blastoids'     }

]
@app.route('/heroes', methods= ['GET'])
def heroes():
    return jsonify(all_heroes)

@app.route('/detail/<id>', methods=['GET'])
def detail(id):
    for x in all_heroes:
        if int(x ['id']) == int(id):
            return jsonify(x)
    return "no such record exists, error number: ", 400
    
@app.route('/update', methods=['POST'])
def update():

  data = request.data
  string = data.decode('UTF-8')
  data = eval(string)

  for x in all_heroes:
    if x['id'] == data['id']:
      x['name'] = data['name']
      return x

  return "Not found", 400






app.run()