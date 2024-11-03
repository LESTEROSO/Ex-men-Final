import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getClientes = async () => {
  const response = await axios.get(`${API_URL}/clientes`);
  return response.data;
};

export const createCliente = async (cliente) => {
  const response = await axios.post(`${API_URL}/clientes`, cliente);
  return response.data;
};

export const getTransacciones = async () => {
  const response = await axios.get(`${API_URL}/transacciones`);
  return response.data;
};

export const createTransaccion = async (transaccion) => {
  const response = await axios.post(`${API_URL}/transacciones`, transaccion);
  return response.data;
};
