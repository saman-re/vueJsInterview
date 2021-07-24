<template>
  <v-app-bar
    class="pa-1 grey lighten-1 height-200px"
    height="95px"
    max-height="200px"
    app
    fixed
    elevate-on-scroll
    clipped-left
  >
    <div
      class="d-flex flex-column align-center flex-sm-row"
      style="width: 100%"
    >
      <v-toolbar-title
        class="px-2 py-0 py-sm-4 font-weight-bold text-center text-no-wrap text-h4"
        style="width: 240px"
      >
        <v-btn
          plain
          icon
          class="hidden-lg-and-up"
          @click="navShow"
          v-if="$route.path == '/'"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        Interview
      </v-toolbar-title>
      <div class="d-flex justify-center ml-lg-10 ml-5">
        <v-btn class="px-4 py-4 py-sm-8 mx-2 white font-weight-black" plain tile
          >item 1</v-btn
        >
        <v-btn class="px-4 py-4 py-sm-8 mx-2 white font-weight-black" plain tile
          >item 2</v-btn
        >
        <v-btn class="px-4 py-4 py-sm-8 mx-2 white font-weight-black" plain tile
          >item 3</v-btn
        >
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {};
  },
  methods: {
    navShow() {
      eventBus.$emit("showNav", "");
    },
  },
};
</script>

