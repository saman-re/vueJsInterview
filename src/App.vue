<template>
  <v-app>
    <app-toolbar/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: {
    "app-toolbar": Toolbar,
  },
};
</script>
