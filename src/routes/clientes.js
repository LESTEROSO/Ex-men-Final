const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.query('SELECT * FROM Clientes', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});


router.post('/', (req, res) => {
  const { Name, Apellido, Genero, Fecha_Nacimiento, Estado, Value } = req.body;
  db.query('INSERT INTO Clientes (Name, Apellido, Genero, Fecha_Nacimiento, Estado, Value) VALUES (?, ?, ?, ?, ?, ?)', 
    [Name, Apellido, Genero, Fecha_Nacimiento, Estado, Value], (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ id: result.insertId, ...req.body });
  });
});

module.exports = router;
