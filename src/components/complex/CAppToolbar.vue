<template>
  <BToolbar color="primary" title="My" subtitle="Videos" :extended="searchVideo">
    <v-icon left color="subaccent" slot="buttons" @click="hrefToUpload">mdi-video-plus</v-icon>

    <v-icon
      left
      class="pr-4"
      color="subaccent"
      @click="searchVideo = !searchVideo"
      slot="buttons"
    >mdi-magnify</v-icon>

    <CAppDialogLogin slot="buttons"></CAppDialogLogin>

    <BTextField label="Search Video" v-if="searchVideo" slot="extended"></BTextField>
  </BToolbar>
</template>

<script>
import BTextField from "@/components/basic/BTextField.vue";
import BToolbar from "@/components/basic/BToolbar.vue";
import CAppDialogLogin from "@/components/complex/CAppDialogLogin.vue";
export default {
  data() {
    return {
      searchVideo: false
    };
  },
  components: {
    BToolbar,
    CAppDialogLogin,
    BTextField
  },
  methods: {
    hrefToUpload() {
      this.$router.push({ name: "upload" });
    }
  }
};
</script>
