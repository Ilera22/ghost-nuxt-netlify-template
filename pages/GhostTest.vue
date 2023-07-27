<template>
  <!-- ... -->
</template>

<script>
import ghostApi from '../api/ghost';

export default {
  name: "GhostTest",
  async asyncData() {
    try {
      // Realiza una solicitud al API de Ghost para obtener los últimos 5 posts
      const response = await ghostApi.posts.browse({
        limit: 5,
        order: 'published_at desc',
      });

      // Retorna los datos obtenidos para mostrarlos en la página
      return {
        posts: response,
        loading: false,
      };
    } catch (error) {
      console.error('Error al obtener los posts:', error);

      // En caso de error, muestra un mensaje de error en la página
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
