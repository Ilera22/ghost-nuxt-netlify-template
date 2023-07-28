import axios from 'axios'; // Agrega esta línea para importar axios
import GhostContentAPI from '@tryghost/content-api';

const apiBaseUrl = process.env.API_BASE_URL;
const apiKey = process.env.API_CONTENT_KEY;

// Función para obtener los últimos posts desde el API de Ghost
export async function getPosts(limit = 5) {
  try {
    const response = await axios.get(`${apiBaseUrl}/posts`, {
      params: {
        limit,
        order: 'published_at desc',
        key: apiKey, // Agrega el API key como parámetro de la consulta
      },
    });
    return response.data.posts;
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    throw error;
  }
}

const ghostApi = new GhostContentAPI({
  url: process.env.API_BASE_URL,
  key: process.env.API_CONTENT_KEY,
  version: 'v3.0',
});

export default ghostApi;
