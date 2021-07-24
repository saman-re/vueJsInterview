<template>
  <v-app>
    <navigation-drawer />
    <v-row class="mx-1 mt-10 justify-center justify-md-start" no-gutters>
      <v-col class="justify-center px-2" v-for="(expert,index) in experts" :key="index" cols="12" sm="6" md="4" lg="3">
    <expert-card-view :expert="expert" :Clink="true" class="my-2"/>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import NavigationDrawer from "../components/NavigationDrawer.vue";
import ExpertCardView from "../components/ExpertCardView.vue";

export default {
  name: "Home",
  computed:{
    experts(){
      return this.$store.state.experts
    }
  },
  components: {
    "navigation-drawer": NavigationDrawer,
    "expert-card-view": ExpertCardView,
  },
};
</script>
