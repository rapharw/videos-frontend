<template>
  <v-app>
    <CAppToolbar></CAppToolbar>
    <v-content class="app-bg-color-content">
      <br>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import CAppToolbar from "@/components/complex/CAppToolbar.vue";
export default {
  components: {
    CAppToolbar
  },
  name: "App",
  data() {
    return {};
  }
};
</script>
<style scoped>
.app-bg-color-content {
  background-color: #252525;
}
</style>
