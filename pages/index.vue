<template>
  <div>
    <v-container class="bg-surface-variant">
      <v-row :align="'center'">
        <v-col v-for="n in 5" :key="n" cols="12" sm="4" md="4" lg="3" xl="3">
          <v-card>
            <v-img
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            ></v-img>
            <v-card-title>Titulo</v-card-title>
            <v-card-text class="overflow-hidden card-limits">
              Descubre todo lo que necesitas saber sobre este fascinante tema.
              "Descubre todo lo que necesitas saber sobre este fascinante tema.
              Exploraremos los conceptos fundamentales, las mejores prácticas y
              los consejos expertos que te ayudarán a comprenderlo a fondo.
              Desde los conceptos básicos hasta los detalles más avanzados, este
              artículo te guiará paso a paso en tu viaje de aprendizaje.
              Prepárate para sumergirte en un mundo lleno de conocimientos y
              descubrimientos emocionantes"
            </v-card-text>
            <v-card-actions>
              <v-btn variant="plain" class="mt-2">Leer Más</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style>
.card-limits {
  max-height: 60px; /* Ajusta la altura deseada para las tarjetas */
}
</style>
