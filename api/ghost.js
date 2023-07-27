// api/ghost.js

import axios from 'axios';

// Configura la URL base del API de Ghost
const apiBaseUrl = 'https://gremioktg.com/ghost/api/v3'; // Reemplaza esta URL con la dirección correcta de la API de Ghost

// Define una función para obtener los posts del API de Ghost
export async function getPosts() {
  try {
    const response = await axios.get(`${apiBaseUrl}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    return [];
  }
}

// Exporta las funciones que necesites para usar en otras partes de tu aplicación
// export { getPosts, /* otras funciones */ };
