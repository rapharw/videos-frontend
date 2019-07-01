<template>
  <CAppTitleAndContent title="Principal Item" spacingTitle="minor" :showMore="true">
    <BCarousel :items="contentHomePrincipalItem" slot="slot-content"></BCarousel>
  </CAppTitleAndContent>
</template>

<script>
import BTileCardVideo.vue from "@/components/basic/BTileCardVideo.vue";
import CAppTitleAndContent from "@/components/complex/CAppTitleAndContent.vue";
export default {
    components: {
        BTileCardVideo,
        CAppTitleAndContent
    }
}
</script>

<style>
</style>
