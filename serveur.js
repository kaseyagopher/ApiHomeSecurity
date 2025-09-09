const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/utilisateur');

const app = express();
const port = 3000;
app.use(express.json())
// Middleware pour parser le JSON
app.use(bodyParser.json());


// Routes
app.use('/api', userRoutes);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

app.get('/', (req, res)=>{
  res.send("Benvenu sur notre application")
});