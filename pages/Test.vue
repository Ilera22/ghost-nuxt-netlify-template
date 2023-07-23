<template>
  <ul>
    <li v-for="post in posts">{{ post.title }}</li>
  </ul>
</template>

<script>
  import { getPosts } from '../api/posts';

  export default {
    name: "TestPage",
    async asyncData () {
      const posts = await getPosts();
      return { posts: posts }
    }
  }
</script>
