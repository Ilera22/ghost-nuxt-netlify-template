<template>
  <div id="app">
    <v-layout row justify-center>
      <v-responsive v-if="$vuetify.breakpoint.smAndDown">
        <v-app-bar app color="purple darken-4">
          <v-btn plain @click="goToIndex">GremioKTG</v-btn>
          <v-spacer></v-spacer>
          <v-app-bar-nav-icon @click="menuOpen = !menuOpen"></v-app-bar-nav-icon>
          <v-menu v-model="menuOpen" offset-y>
            <v-list>
              <v-list-item
    
                v-for="item in nav"
                :key="item.icon"
                :to="item.to"
                :title="item.title"
                @click="handleMenuClick(item.to)"
              >
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar>
      </v-responsive>

      <v-responsive v-else>
        <v-app-bar app dark color="purple darken-4">
          <v-btn plain @click="goToIndex">GremioKTG</v-btn>
          <v-spacer></v-spacer>
          <v-app-bar-items>
            <v-btn
              plain
              v-for="item in nav"
              :key="item.icon"
              :to="item.to"
              :title="item.title"
            >
              {{ item.text }}
            </v-btn>
          </v-app-bar-items>
        </v-app-bar>
      </v-responsive>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      dialog: false,
      menuOpen: false,
      nav: [
        {
          icon: "info",
          text: "About",
          title: "About this demo",
          active: false,
          to: "/about",
        },
        {
          icon: "assignment_turned_in",
          text: "Test",
          title: "Some stuff that needs doing",
          active: false,
          to: "/Test",
        },
        {
          icon: "email",
          text: "Contact",
          title: "Our Contact info",
          active: false,
          to: "/contact",
        },
      ],
    };
  },
  methods: {
    handleMenuClick(to) {
      this.$router.push(to);
      this.menuOpen = false; // Cerramos el menú después de la redirección
    },
    goToIndex() {
      this.$router.push('/');
    },
  },
};
</script>
