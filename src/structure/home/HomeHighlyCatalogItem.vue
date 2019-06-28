<template>
  <CAppTitleAndContent title="Higly Catalog Item" spacingTitle="minor" :showMore="true">
    <CLineCatalogVideoHorizontal slot="slot-content" :catalog="contentHomeHighlyCatalogItem"></CLineCatalogVideoHorizontal>
  </CAppTitleAndContent>
</template>

<script>
import CLineCatalogVideoHorizontal from "@/components/complex/CLineCatalogVideoHorizontal.vue";
import CAppTitleAndContent from "@/components/complex/CAppTitleAndContent.vue";

const {
  homeHighlyCatalogItem
} = require("@/mixins/props/home/home-highly-catalog-item-props-mixin.js");

export default {
  mixins: [homeHighlyCatalogItem],
  components: {
    CLineCatalogVideoHorizontal,
    CAppTitleAndContent
  }
};
</script>
