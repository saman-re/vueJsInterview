<template>
  <v-card class="mx-auto pt-0">
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="4"
      max-width="100%"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        class="mx-4"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0 mt-5 text-center">
      <div class="text-h6 font-weight-bold mb-2">Expert Trade Status</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  created() {
    let id =this.$route.params.id;
    let expert =  this.$store.state.experts[id];
    this.value = expert.trades;
  },
  data() {
    return {
      labels: [
        "2Jan",
        "3Feb",
        "6Mar",
        "9Apr",
        "12May",
        "3Jun",
        "6Jul",
        "9Aug",
        "8Sep",
        "2Oct",
        "10Nov",
        "12Dec",
      ],
      value: [],
    };
  },
};
</script>
