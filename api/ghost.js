import axios from 'axios';
import GhostContentAPI from '@tryghost/content-api';

const apiBaseUrl = process.env.API_BASE_URL;
const apiKey = process.env.API_CONTENT_KEY;

console.log('API_BASE_URL:', apiBaseUrl);
console.log('API_CONTENT_KEY:', apiKey);

// Función para obtener los últimos posts desde el API de Ghost
export async function getPosts(limit = 5) {
  try {
    const response = await axios.get(`${apiBaseUrl}/posts`, {
      params: {
        limit,
        order: 'published_at desc',
        key: apiKey,
      },
    });
    return response.data.posts;
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    throw error;
  }
}

const ghostApi = new GhostContentAPI({
  url: apiBaseUrl,
  key: apiKey,
  version: 'v3.0',
});

export default ghostApi;
