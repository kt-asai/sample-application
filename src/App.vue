<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-title
        ><router-link to="/">Todo Application</router-link></v-app-bar-title
      >
    </v-app-bar>

    <v-navigation-drawer app permanent>
      <v-list nav>
        <v-list-item
          prepend-icon="mdi-check-circle-outline"
          title="Todo"
          value="todo"
          to="todo"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app height="40" class="text-center" outlined elevation="5">
      <v-card-text>
        &copy; {{ new Date().getFullYear() }} — <strong>Hamcutlet</strong>
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app",
});
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>
