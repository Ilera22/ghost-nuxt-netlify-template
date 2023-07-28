<template>
  <v-app dark>
    <v-container class="fill-height" fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
          <v-card class="text-center">
            <v-card-title>
              <h1 v-if="error.statusCode === 404">
                {{ pageNotFound }}
              </h1>
              
              
              <h1 v-else>
                {{ otherError }}
              </h1>
            </v-card-title>
            <v-card-text>
              <NuxtLink to="/">
                Home page
              </NuxtLink>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 28px;
  margin-bottom: 20px;
}

v-card {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
</style>
