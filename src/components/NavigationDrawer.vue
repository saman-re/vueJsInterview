<template>
  <v-navigation-drawer
    app
    v-model="navDrawer"
    clipped
    width="300px"
    class="blue darken-3 container px-0"
  >
    <v-list>
      <v-list-item class="pl-5 my-5">
        <v-icon x-large>settings</v-icon>
        <p class="text-start mb-0 text-h4 pl-3 font-weight-bold">setting</p>
      </v-list-item>
      <hr />
      <v-list-item
        class="px-0"
        v-for="(listItem, index) in listItems.setting"
        :key="index + 'set'"
      >
        <v-card
          flat
          width="100%"
          class="pl-4 blue darken-3 pb-2"
          style="cursor: pointer"
          link
          :to="{}"
        >
          <v-card-text class="text-start pb-2 pl-8 white--text text-h6">
            <v-icon large class="white--text pr-1">
              {{ listItem.icon }}
            </v-icon>
            {{ listItem.subtitle }}
          </v-card-text>
        </v-card>
      </v-list-item>

      <v-list-item class="pl-5 my-5 mt-10">
        <v-icon x-large>trending_up</v-icon>
        <p class="text-start mb-0 ml-2 pl-3 text-h4 font-weight-bold">trade</p>
      </v-list-item>
      <hr />

      <v-list-item
        class="px-0"
        v-for="(listItem, index) in listItems.trade"
        :key="index + 'trad'"
      >
        <v-card
          flat
          width="100%"
          class="pl-4 blue darken-3 pb-2"
          style="cursor: pointer"
          link
          :to="{}"
        >
          <v-card-text class="text-start pb-2 pl-8 white--text text-h6">
            <v-icon large class="white--text pr-1">
              {{ listItem.icon }}
            </v-icon>
            {{ listItem.subtitle }}
          </v-card-text>
        </v-card>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { eventBus } from "../main";
const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
export default {
  created() {
    if (vw >= 1263) {
      this.navDrawer = true;
    }else{
      this.navDrawer =false;
    }
    eventBus.$on("showNav", () => {
      this.navDrawer = !this.navDrawer;
    });
  },
  data() {
    return {
      navDrawer:Boolean,
      listItems: {
        setting: [
          {
            icon: "info",
            subtitle: "Item 1",
          },
          {
            icon: "info",
            subtitle: "Item 2",
          },
          {
            icon: "info",
            subtitle: "Item 3",
          },
        ],
        trade: [
          {
            icon: "info",
            subtitle: "Item 4",
          },
          {
            icon: "info",
            subtitle: "Item 5",
          },
          {
            icon: "info",
            subtitle: "Item 6",
          },
        ],
      },
    };
  },
};
</script>
