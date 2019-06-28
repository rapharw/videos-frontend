<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 class="spacing-content-item">
          <HomePrincipalItem :contentHomePrincipalItem="contentHomePrincipalItem"></HomePrincipalItem>
        </v-flex>
        <v-flex xs12 class="spacing-content-item">
          <HomeHighlyCatalogItem :contentHomeHighlyCatalogItem="contentHomeHighlyCatalogItem"></HomeHighlyCatalogItem>
        </v-flex>
        <v-flex xs12></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HomePrincipalItem from "@/structure/home/HomePrincipalItem.vue";
import HomeHighlyCatalogItem from "@/structure/home/HomeHighlyCatalogItem.vue";
const {
  homePrincipalItemPropsMixin
} = require("@/mixins/props/home/home-principal-item-props-mixin.js");

const {
  homeHighlyCatalogItem
} = require("@/mixins/props/home/home-highly-catalog-item-props-mixin.js");
export default {
  mixins: [homePrincipalItemPropsMixin, homeHighlyCatalogItem],
  components: {
    HomePrincipalItem,
    HomeHighlyCatalogItem
  }
};
</script>
<style scoped>
.spacing-content-item {
  margin-bottom: 4em;
}
</style>
