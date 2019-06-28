<template>
  <div>
    <BTitle color="white" :title="title"></BTitle>
    <div :class="cssSpacing"></div>
    <slot name="slot-content"></slot>
    <div :class="cssSpacing"></div>
    <BButton
      :btnClick="functionShowMore"
      btnText="Show More"
      :btnFlat="true"
      btnColor="info"
      v-if="showMore"
      class="spacing-button-margin"
    ></BButton>
    <br>
    <v-divider dark></v-divider>
  </div>
</template>

<script>
import BButton from "@/components/basic/BButton.vue";
import BTitle from "@/components/basic/BTitle.vue";
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    showMore: {
      type: Boolean,
      required: false
    },
    functionShowMore: {
      type: Function,
      required: false,
      default: function() {}
    },
    spacingTitle: {
      type: String,
      required: false,
      default: "large",
      validator: value => {
        let acceptedValues = ["default", "minor", "large"];
        return acceptedValues.indexOf(value) !== -1;
      }
    }
  },
  components: {
    BTitle,
    BButton
  },
  computed: {
    cssSpacing() {
      if (this.spacingTitle === "minor") {
        return "spacing-content-minor";
      } else if (this.spacingTitle === "large") {
        return "spacing-content-large";
      } else {
        return "spacing-content-default";
      }
    }
  }
};
</script>
<style scoped>
.spacing-content-large {
  margin: 55px 0;
}
.spacing-content-default {
  margin: 35px 0;
}
.spacing-content-minor {
  margin: 15px 0;
}
.spacing-button-margin {
  margin-left: -7px !important;
}
</style>
