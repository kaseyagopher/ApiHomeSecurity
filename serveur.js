const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/utilisateur');
const empreinteRoutes = require('./routes/empreinte');

const app = express();
const port = 3000;

app.use(express.json()); // This replaces bodyParser.json() in modern Express versions

// Routes
app.use('/api/users', userRoutes);
app.use('/api/empreintes', empreinteRoutes);

// Other routes
app.get('/', (req, res) => {
    res.send("Bienvenue sur notre application");
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});