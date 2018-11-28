Maxime Le Texier / Alexandre Chaillet

UTILISATION:
1- Se rendre sur http://localhost:3000/notation?type=accueil (ou l'ip de la machine sur laquelle le server est hébergé à la place de localhost).
2- Sélectionner un campus qui notera et donner une note entre 0 et 20 à chaque campus à noter et cliquer sur envoyer, vous serez redirigé vers la page de résultats.
3- Constater les résultats.

IMPORTANT A SAVOIR:
1- Pour démarrer le serveur, ouvrez l'invite de commande nodejs, sélectionnez le répertoir à la base de "server.js" et éxécuter la commande "node server.js"
2- Pour réinitialiser les scores, supprimez le fichier data.json.
3- data.json et disponible sur l'adresse http://localhost:3000/notation?type=dataJSON
4- Les modules express.js et fs.js sont nécessaires pour fonctionner.

FONCTIONNEMENT:
1- Le server envoie les pages d'accueil, de résultats, et JSON sur différentes routes en méthode GET
2- la page d'accueil fait une requête au serveur, pour connaître les campus qui sont déjà noté, le serveur renvoie le fichier json, s'il existe et la page affiche les campus qui ont noté
3- l'utilisateur sélectionne le campus qui note et clique sur valider, la page génère dynamiquement les input qui serviront à noter
4- l'utilisateur entre des notes dans chacune des input, puis clique sur envoyer.
5- la page vérifie que les données sont valides et envoit une requête avec un contenu de texte au serveur.
6- Le serveur récupère cette requête et la transforme en objet utilisable.
7- Le serveur lis le fichier data.json s'il existe, sinon il le créer.
8- Si les entrées existent déjà, la nouvelle entrée est rejetée.
9- Le serveur enregistre la nouvelle entrée à la suite du fichier json.
10- La page de résultats envoie un requête au serveur et récupère le contenu du fichier json.
11- Il converti ces données en object utilisable, puis les classe selon les notes de chaque campus, en faisant un système de point par position.
12- Un tableau est généré dynamiquement et affiche les résultats par campus et par point.
13- Un algorithme génère un diagramme se servant de la library d3.js en se servant des données de classement.
