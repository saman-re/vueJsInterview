<template>
  <v-app-bar
    class="pa-1 grey lighten-1"
    height="70px"
    app
    fixed
    elevate-on-scroll
    clipped-left
  >
    <v-btn plain icon class="hidden-lg-and-up" @click="navShow">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title class="px-4 font-weight-bold text-no-wrap text-h4" style="width:240px">
        Inter view
    </v-toolbar-title>
    <div class="d-flex justify-center ml-lg-10 ml-5">
        <v-btn class="px-2 mx-2 white font-weight-black" plain tile>item 1</v-btn>
        <v-btn class="px-2 mx-2 white font-weight-black" plain tile>item 2</v-btn>
        <v-btn class="px-2 mx-2 white font-weight-black" plain tile>item 3</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import {eventBus} from '../main';

export default {
  data() {
    return {};
  },
  methods:{
      navShow(){
        eventBus.$emit('showNav','')
      }
  },
};
</script>
