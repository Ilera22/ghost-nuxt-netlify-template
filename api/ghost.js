import axios from 'axios';

const apiBaseUrl = 'http://128.199.8.129/ghost/api/v3';
const apiKey = 'a1e0fcf6f7ea7a36249cf02e53';

export async function getPosts(limit = 5) {
  try {
    const response = await axios.get(`${apiBaseUrl}/posts`, {
      params: {
        limit,
        order: 'published_at desc',
        key: apiKey,
      },
    });
    // Asegurarte de que los posts tienen un id y un título
    return response.data.posts.filter(post => post.id && post.title);
  } catch (error) {
    // Aquí puedes manejar el error, por ejemplo rechazando la promesa
    throw new Error('Error al obtener los posts');
  }
}

const ghostApi = new GhostContentAPI({
  url: apiBaseUrl,
  key: apiKey,
  version: 'v3.0',
});

export default ghostApi;
