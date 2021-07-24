<template>
  <v-card
    class="mx-auto d-flex flex-column align-center px-10 pt-4 pb-2"
    max-width="400"
    :elevation="eval"
    @mouseenter="eval=14"
    @mouseleave="eval=3"
    link
    :to="`experts\\${expert.id}`"
  >

    <v-avatar size="150" class="mx-4">
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="expert_image" />
    </v-avatar>

    <v-card-title class="text-h4 font-weight-bold">{{
      expert.name
    }}</v-card-title>

    <v-card-text
      class="text--primary text-button d-flex flex-column align-center"
    >
      <div>
        <div>
          Return:
          <span :class="`${returnColor(expert.return)}`">{{
            returnSign(expert.return)
          }}</span>
        </div>
        <div>
          Risk:
          <span :class="`${riskColor(expert.risk)}`">{{ expert.risk }}</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["expert"],

  data(){
    return{
      eval:4
    }
  },

  methods: {
    returnSign(returnVal) {
      if (returnVal > 0) {
        return "+" + returnVal;
      } else if (returnVal < 0) {
        return returnVal;
      }
      return returnVal;
    },

    returnColor(returnVal) {
      if (returnVal > 0) {
        return "green--text accent-4";
      } else if (returnVal < 0) {
        return "red--text accent-4";
      }
      return "black--text";
    },

    riskColor(riskVal) {
      if (riskVal <= 4) {
        return "green--text accent-4";
      } else if (riskVal > 4 && riskVal <= 7) {
        return "amber--text accent-4";
      } else {
        return "red--text accent-4";
      }
    },
  },
};
</script>
