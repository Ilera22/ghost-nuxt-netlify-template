import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://gremioktg.com',
  key: 'a1e0fcf6f7ea7a36249cf02e53',
  version: "v5.0"
})

export async function getPosts() {
  try {
    const response = await axios.get('https://api.example.com/posts');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
;