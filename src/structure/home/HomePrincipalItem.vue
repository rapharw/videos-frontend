<template>
  <CAppTitleAndContent title="Principal Item" spacingTitle="minor" :showMore="true">
    <BCarousel :items="contentHomePrincipalItem" slot="slot-content"></BCarousel>
  </CAppTitleAndContent>
</template>

<script>
import BCarousel from "@/components/basic/BCarousel.vue";
import CAppTitleAndContent from "@/components/complex/CAppTitleAndContent.vue";
const {
  homePrincipalItemPropsMixin
} = require("@/mixins/props/home/home-principal-item-props-mixin.js");
export default {
  mixins: [homePrincipalItemPropsMixin],
  components: {
    BCarousel,
    CAppTitleAndContent
  }
};
</script>
<style scoped>
.spacing-content {
  margin: 35px 0;
}
</style>
