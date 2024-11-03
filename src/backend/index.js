const express = require('express');
const cors = require('cors');
const db = require('./db');
const clientesRoutes = require('./routes/clientes');
const transaccionesRoutes = require('./routes/transacciones');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/clientes', clientesRoutes);
app.use('/api/transacciones', transaccionesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
