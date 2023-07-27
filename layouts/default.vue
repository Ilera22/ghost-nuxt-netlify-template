<template>
  <div>
    <v-app dark>
      <header>
        <NavBar />
      </header>

      <v-main>
        <nuxt />
      </v-main>

      <footer>
        <Footer />
      </footer>
    </v-app>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    NavBar,
    Footer,
  },
};
</script>