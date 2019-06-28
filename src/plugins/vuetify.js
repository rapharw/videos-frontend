import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "mdi",
  theme: {
    primary: "#212121",
    secondary: "#424242",
    accent: "#E0E0E0",
    subaccent: "#F5F5F5"
  }
  //See App.vue style .app-bg-color-content
});
