var express = require('express'); // intègre le module express
var app = express();
var fs = require('fs'); // intègre le module file system

app.use(express.json());

app.post('/', function(request, response){ // écoute la méthode POST pour le chemin /.
  response.send(request.body); // récupère la réponse
  console.log(request.body);
  var json = JSON.stringify(request.body); // transforme la réponse en object utilisable

  if (fs.existsSync('data.json')) { // vérifie si le fichier data.json éxiste
    fs.readFile('data.json', 'utf8', function readFileCallback(err, data){ // lis le fichier
      if (err){
          console.log(err);
      } else {
        obj = JSON.parse(data); // transforme le contenu du ficher en object utilisable

        if (obj.table.length < 9) { // vérifie que la longueure de chaque entrée est inférieur au nombre maximal de campus
          var alreadyInFile = false;
          for (var i = 0; i < obj.table.length; i++) {
            if (obj.table[i].campusActuel == request.body.campusActuel) { // vérifie si la nouvelle entrée n'est pas déjà dans le fichier
              alreadyInFile = true;
            }
          }
          if (alreadyInFile == false) {
            obj.table.push(request.body);
            json = JSON.stringify(obj, null, 2); // converti les objects en json avec incrément de 2
            fs.writeFileSync('data.json', json, 'utf8'); // écrit sur le fichier
          } else {
            console.log("Campus deja noté");
          }
        } else {
          console.log("Les resultats sont au complet!")
        }
    }});
  } else { //si le fichier n'éxiste pas, il le créer
    obj = {
      table : []
    }
    obj.table.push(request.body);
    json = JSON.stringify(obj, null, 2); // converti les objects en json avec incrément de 2
    fs.writeFileSync('data.json', json, 'utf8'); // écrit sur le fichier
  }

});

app.get('/notation', function (req, res) { //diffuse sur la route /notation
  if (req.query.type == "accueil") {
    res.sendFile(__dirname + "/accueil.html"); //envoi le fichier accueil.html
  } else if (req.query.type == "resultats") {
    res.sendFile(__dirname + "/resultats.html"); //envoi le fichier resultats.html
  } else if (req.query.type == "dataJSON") {
    res.sendFile(__dirname + "/data.json"); //envoi le fichier data.json
  } else {
    res.send("erreur 404: Page non-existante, Ce chemin n'a pas été configuré");
  }

});

app.listen(3000, function(){ // écoute sur le port 3000
  console.log('listening on *:3000');
});
