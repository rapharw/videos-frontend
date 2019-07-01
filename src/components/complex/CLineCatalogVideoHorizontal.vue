<template>
  <div class="row">
    <div class="row__inner">
      <BTileCardVideo v-for="item in catalog" :key="item.title" :img="item.img" :title="item.title"></BTileCardVideo>
    </div>
  </div>
</template>

<script>
import BTileCardVideo from "@/components/basic/BTileCardVideo.vue";
export default {
  components: {
    BTileCardVideo
  },
  props: {
    catalog: {
      type: Array,
      required: true,
      description: 'Sets an array of videos. Example: [title: "", img: ""]'
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  overflow: scroll;
  width: 100%;
}
.row::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
.row__inner {
  transition: 450ms -webkit-transform;
  transition: 450ms transform;
  transition: 450ms transform, 450ms -webkit-transform;
  font-size: 0;
  white-space: nowrap;
  margin: 35px 0;
  padding-bottom: 2px;
}
.row__inner:hover {
  -webkit-transform: translate3d(-62.5px, 0, 0);
  transform: translate3d(-62.5px, 0, 0);
}
.row__inner:hover .tile {
  opacity: 0.3;
}
.row__inner:hover .tile:hover {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  opacity: 1;
}
</style>
