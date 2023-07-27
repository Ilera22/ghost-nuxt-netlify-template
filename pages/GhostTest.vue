<template>
  <div>
    <h1>Prueba de conexión al API de Ghost</h1>
    <div v-if="loading">Cargando...</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <div v-html="post.html"></div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { getPosts } from '../api/ghost'; // Importa la función getPosts desde el archivo api/ghost.js

export default {
  async asyncData() {
    try {
      // Usa la función getPosts para obtener los posts del API
      const posts = await getPosts();
      return {
        posts,
        loading: false,
      };
    } catch (error) {
      console.error('Error al obtener los posts:', error);
      return {
        posts: [],
        loading: false,
        error: 'Error al obtener los posts desde el API de Ghost.',
      };
    }
  },
  data() {
    return {
      loading: true,
      posts: [],
      error: null,
    };
  },
};
</script>
