const express = require('express');
const path = require('path');

const app = express();
const port = 3002;

// Définir le dossier statique pour servir vos fichiers HTML, CSS, JS, etc.
app.use(express.static(path.join(__dirname)));

// Route pour la page principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'employee-list.html'));
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
