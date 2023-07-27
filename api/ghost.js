// api/ghost.js
import axios from 'axios';

// Define la URL base del API de Ghost
const apiBaseUrl = 'https://example.com/ghost/api/v3'; // Reemplaza esto con la URL de tu API de Ghost

// Función para obtener los últimos posts desde el API de Ghost
export async function getPosts(limit = 5) {
  try {
    const response = await axios.get(`${apiBaseUrl}/posts`, {
      params: {
        limit,
        order: 'published_at desc',
      },
    });
    return response.data.posts;
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    throw error;
  }
}
