import React, { useEffect, useState } from 'react';
import { getClientes, createCliente } from './api';

function App() {
  const [clientes, setClientes] = useState([]);
  const [newCliente, setNewCliente] = useState({ Name: '', Apellido: '', Genero: '', Fecha_Nacimiento: '', Estado: '', Value: 0 });

  useEffect(() => {
    const fetchClientes = async () => {
      const data = await getClientes();
      setClientes(data);
    };
    fetchClientes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdCliente = await createCliente(newCliente);
    setClientes([...clientes, createdCliente]);
    setNewCliente({ Name: '', Apellido: '', Genero: '', Fecha_Nacimiento: '', Estado: '', Value: 0 });
  };

  return (
    <div>
      <h1>Clientes</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={newCliente.Name} onChange={(e) => setNewCliente({ ...newCliente, Name: e.target.value })} required />
        <input type="text" placeholder="Apellido" value={newCliente.Apellido} onChange={(e) => setNewCliente({ ...newCliente, Apellido: e.target.value })} required />
        <input type="text" placeholder="Genero" value={newCliente.Genero} onChange={(e) => setNewCliente({ ...newCliente, Genero: e.target.value })} required />
        <input type="date" placeholder="Fecha Nacimiento" value={newCliente.Fecha_Nacimiento} onChange={(e) => setNewCliente({ ...newCliente, Fecha_Nacimiento: e.target.value })} required />
        <select value={newCliente.Estado} onChange={(e) => setNewCliente({ ...newCliente, Estado: e.target.value })} required>
          <option value="">Select Estado</option>
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </select>
        <input type="number" placeholder="Value" value={newCliente.Value} onChange={(e) => setNewCliente({ ...newCliente, Value: e.target.value })} required />
        <button type="submit">Add Cliente</button>
      </form>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.Id}>{cliente.Name} {cliente.Apellido}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
