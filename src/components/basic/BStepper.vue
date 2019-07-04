<template>
  <v-stepper v-model="step">
    <v-stepper-header v-for="item in arraySteps" :key="item.step">
      <v-stepper-step :complete="step > item.step" :step="item.step">{{item.name}}</v-stepper-step>
      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="continueStep">Continue</v-btn>

        <v-btn flat @click="backStep">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="continueStep">Continue</v-btn>

        <v-btn flat @click="backStep">Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-5" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="step = 1">Continue</v-btn>

        <v-btn flat @click="backStep">Cancel</v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      arraySteps: [
        { step: 1, name: "Name of step 1" },
        { step: 2, name: "Name of step 2" },
        { step: 3, name: "Name of step 3" }
      ]
    };
  },
  methods: {
    continueStep() {
      this.step = this.step + 1;
    },
    backStep() {
      if (this.step > 1) {
        this.step = this.step - 1;
      }
    }
  }
  //   props: {
  //     itemsStepper: {
  //       type: Array,
  //       required: true,
  //       validator: value => {
  //         const jsonValidator = require("@/functions/json-validator.js").default;

  //         let innerSchema = {
  //           type: "object",
  //           properties: {
  //             src: { type: "string" }
  //           },
  //           required: ["src"]
  //         };

  //         let schema = {
  //           type: "array",
  //           items: innerSchema
  //         };
  //         //Must be array of object json with property src required: [{src:''}]
  //         return jsonValidator.validateSchema(schema, value);
  //       }
  //     }
  //   }
};
</script>

<style>
</style>
