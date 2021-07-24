<template>
  <v-card
    class="mx-auto pt-0"
  >
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
        class="px-2"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0 mt-5 text-center">
      <div class="text-h6 font-weight-light mb-2">
        Expert Trade Status
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    data(){
        return{
            labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],
        }
    }
}
</script>