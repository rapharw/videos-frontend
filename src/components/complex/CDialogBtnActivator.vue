<template>
  <div>
    <BButton
      :btnClick="()=>{dialog = true}"
      :btnText="btnText"
      :btnIcon="btnIcon"
      :btnOutline="btnOutline"
      :btnColor="btnColor"
    ></BButton>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline" primary-title>{{titleDialog}}</v-card-title>
        <v-divider></v-divider>
        <br>
        <div class="text-xs-center">
          <img src="@/assets/my-videos-logo.png" class="img-rounded" height="45">
        </div>
        <v-card-text>
          <slot name="content-dialog"></slot>
        </v-card-text>

        <div v-if="confirmation">
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="default" flat @click="dialog = false">Cancel</v-btn>
            <v-btn color="info" @click="action">Confirm</v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import BButton from "@/components/basic/BButton.vue";
const { btnPropsMixins } = require("@/mixins/props/btn/btn-props-mixins.js");
export default {
  mixins: [btnPropsMixins],
  components: {
    BButton
  },
  data() {
    return {
      dialog: false
    };
  },
  props: {
    titleDialog: {
      type: String,
      required: true
    },
    action: {
      type: Function,
      required: true
    },
    confirmation: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.img-rounded {
  border-radius: 1em;
}
</style>
