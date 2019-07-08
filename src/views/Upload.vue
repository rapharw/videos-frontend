<template>
  <div>
    <BStepper :itemsStepper="arraySteps">
      <vue-dropzone
        slot="stepper-content-1"
        :useCustomSlot="true"
        id="dropzone"
        ref="dropzone"
        :options="dropOptions"
        @vdropzone-complete="afterComplete"
        @vdropzone-removed-file="removedFile"
        @vdropzone-file-added="added"
        @vdropzone-total-upload-progress="progress"
        class="dropzone-custom"
      >
        <div class="dropzone-custom-content">
          <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
          <div class="subtitle">...or click to select a file from your computer</div>
        </div>
        <img src="removebutton.png" alt="Click me to remove the file." class="data-dz-remove">
      </vue-dropzone>

      <img slot="stepper-content-2" :src="getFile.dataURL" width="150">
      <!-- <video width="400" controls slot="stepper-content-2">
        <source :src="getFile.name" :type="getFile.type">
      </video>-->
    </BStepper>
  </div>
</template>

<script>
import BStepper from "@/components/basic/BStepper.vue";
import vueDropzone from "vue2-dropzone";
export default {
  components: {
    BStepper,
    vueDropzone
  },
  mounted() {},
  data() {
    return {
      file: null,
      dropOptions: {
        url: "https://httpbin.org/post",
        maxFilesize: 50, // MB
        maxFiles: 1,
        thumbnailWidth: 200,
        addRemoveLinks: true
      },
      arraySteps: [
        { step: 1, name: "Basic info", desc: "Information of your video" },
        { step: 2, name: "Translation options" },
        { step: 3, name: "Preview" }
      ]
    };
  },
  methods: {
    afterComplete(data) {
      this.file = data;
    },
    removedFile(file, error, xhr) {
      this.file = null;
    },
    added(data) {
      console.log("added");
      console.log(data);
    },
    progress(totaluploadprogress, totalBytes, totalBytesSent) {
      console.log(totaluploadprogress);
    }
  },
  computed: {
    getFile() {
      if (this.file !== null) return this.file;
      return "";
    }
  }
};
</script>

<style scoped>
.dropzone-custom {
  background-color: transparent;
  border-style: dashed;
  border-radius: 4px;
  border-width: 1.5px;
}
.dropzone-custom-content {
  text-align: center;
}

.dropzone-custom-title {
  margin-top: 0;
  color: #00b782;
}

.subtitle {
  color: #314b5f;
}
</style>
