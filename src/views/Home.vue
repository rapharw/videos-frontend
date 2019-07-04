<template>
  <div>
    <HomeIndex
      :contentHomePrincipalItem="contentHomePrincipalItem"
      :contentHomeHighlyCatalogItem="contentHomeHighlyCatalogItem"
    ></HomeIndex>

    <br>
    <BStepper></BStepper>
  </div>
</template>

<script>
import BStepper from "@/components/basic/BStepper.vue";
import HomeIndex from "@/structure/home/HomeIndex.vue";
export default {
  components: {
    HomeIndex,
    BStepper
  },
  data() {
    return {
      e6: 1,

      //data of carousel
      contentHomePrincipalItem: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],

      contentHomeHighlyCatalogItem: [
        {
          title: "Show 1",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
        },
        {
          title: "Show 2",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg"
        },
        {
          title: "Show 3",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-3.jpg"
        },
        {
          title: "Show 4",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-4.jpg"
        },
        {
          title: "Show 5",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-5.jpg"
        },
        {
          title: "Show 6",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-6.jpg"
        },
        {
          title: "Show 7",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg"
        },
        {
          title: "Show 8",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-8.jpg"
        },
        {
          title: "Show 9",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-9.jpg"
        },
        {
          title: "Show 10",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-10.jpg"
        },
        {
          title: "Show 11",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-11.jpg"
        },
        {
          title: "Show 12",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-12.jpg"
        },
        {
          title: "Show 13",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-13.jpg"
        },
        {
          title: "Show 14",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-14.jpg"
        },
        {
          title: "Show 15",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-15.jpg"
        },
        {
          title: "Show 16",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-16.jpg"
        },
        {
          title: "Show 17",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-17.jpg"
        },
        {
          title: "Show 18",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-18.jpg"
        },
        {
          title: "Show 19",
          img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-19.jpg"
        }
      ]
    };
  }
};
</script>