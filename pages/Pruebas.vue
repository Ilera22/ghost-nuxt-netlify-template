<template>
    <div>
      <v-sheet class="mx-auto" elevation="8" max-width="1000">
        <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
          <v-slide-item v-for="post in posts" :key="post.id" v-slot="{ active, toggle }">
            <v-card :color="active ? 'primary' : 'grey lighten-1'" class="ma-4" height="300" width="250">
              <v-img :src="post.feature_image"></v-img>
              <v-card-title>{{ post.title }}</v-card-title>
              <v-card-actions>
                <v-btn rounded>Leer Más</v-btn>
              </v-card-actions>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </template>
  
  <script>
  import { getPosts } from '../api/posts';
  
  export default {
    name: "PruebasPage",
    data() {
      return {
        model: null,
        posts: [],
      };
    },
    async asyncData() {
      try {
        const response = await getPosts({ limit: 5 }); // Obtener los 5 posts más recientes
        const posts = response.data.posts;
        return { posts };
      } catch (error) {
        console.error(error);
        return { posts: [] };
      }
    },
  };
  </script>
  
  <style>
  .card-limits {
    max-height: 150px; /* Ajusta la altura deseada para las tarjetas */
  }
  </style>
  