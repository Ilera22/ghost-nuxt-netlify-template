<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      delimiter-icon="mdi-minus"
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          :align="'center'"
          justify="center"
        >
          <div class="text-h2">
            {{ slide }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { getPosts } from '../api/ghost';

export default {
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [],
    };
  },
  async mounted() {
    try {
      // Obtiene los últimos 5 posts desde el API de Ghost
      const posts = await getPosts(5);

      // Actualiza el array de slides con los títulos de los posts
      this.slides = posts.map((post) => post.title);
    } catch (error) {
      console.error('Error al obtener los posts:', error);
    }
  },
};
</script>

<style>
/* Estilos personalizados para el carrusel si es necesario */
</style>
