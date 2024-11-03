const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all transactions
router.get('/', (req, res) => {
  db.query('SELECT * FROM Transacciones', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Create a new transaction
router.post('/', (req, res) => {
  const { Cliente_id, Fecha_creacion, Fecha_actualizacion, Usuario, Estado, Value } = req.body;
  db.query('INSERT INTO Transacciones (Cliente_id, Fecha_creacion, Fecha_actualizacion, Usuario, Estado, Value) VALUES (?, ?, ?, ?, ?, ?)', 
    [Cliente_id, Fecha_creacion, Fecha_actualizacion, Usuario, Estado, Value], (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ id: result.insertId, ...req.body });
  });
});

module.exports = router;
