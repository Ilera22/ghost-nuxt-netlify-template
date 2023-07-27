<template>
    <div id="app">
      <v-layout row justify-center>
        <v-responsive v-if="$vuetify.breakpoint.smAndDown">
          <v-app-bar app color="red">
            <v-app-bar-title>Mobile</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </v-app-bar>
        </v-responsive>
  
        <v-responsive v-else>
          <v-app-bar app dark color="blue-grey darken-1">
            <v-app-bar-title>Desktop</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-app-bar-items>
              <v-btn
                variant="plain"
                v-for="item in nav"
                :key="item.icon"
                :to="item.to"
                :title="item.title"
                >{{ item.text }}</v-btn
              >
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
        nav: [
          {
            icon: "home",
            text: "Home",
            title: "Back to Home page",
            active: true,
            to: "/",
          },
          {
            icon: "info",
            text: "About",
            title: "About this demo",
            active: false,
            to: "/about",
          },
          {
            icon: "assignment_turned_in",
            text: "Todos",
            title: "Some stuff that needs doing",
            active: false,
            to: "/todos",
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
  };
  </script>
  