<template>
  <div class="about">
    <v-row class="mx-1 mt-10 justify-center" no-gutters>

      <v-col class="px-2" cols="12" sm="5" lg="3">
        <expert-card-view :expert="expert" :Clink="''" class="my-2" />
      </v-col>

      <v-col class="px-2" cols="12" sm="7" lg="9">
        <chart class="my-2"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ExpertCardView from "../components/ExpertCardView.vue";
import Chart from "../components/Chart.vue";
export default {
  created() {
    let id = this.$route.params.id;
    console.log(this.$store.state.experts[id]);
    return this.$store.state.experts[id];
  },
  data() {
    let id = this.$route.params.id;
    // console.log(this.$store.state.experts[id]);
    return {
      expert: this.$store.state.experts[id],
    };
  },
  components: {
    ExpertCardView,
    Chart,
  },
  // computed: {
  //   expert() {
  //     let id = this.$route.params.id;
  //     console.log(this.$store.state.experts[id]);
  //     return this.$store.state.experts[id];
  //   },
  // },
};
</script>
