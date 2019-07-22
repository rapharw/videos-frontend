<template>
  <div>
    <BStepper :itemsStepper="arraySteps">
      <!-- Step 1 -->
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
      </vue-dropzone>

      <v-progress-linear
        v-if="progressBar > 0"
        slot="stepper-content-1"
        color="info"
        v-model="progressBar"
      ></v-progress-linear>

      <!-- Step 2 -->
      <video
        v-if="srcvideo !== null && typevideo !== null"
        slot="stepper-content-2"
        width="400"
        controls
      >
        <source :src="selectedVideo" :type="selectedTypeVideo">
      </video>
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
      showStepper: false,
      progressBar: 0,
      file: null,
      dropOptions: {
        url: "https://httpbin.org/post",
        maxFilesize: 50, // MB
        maxFiles: 1,
        thumbnailWidth: 200,
        addRemoveLinks: true
      },
      arraySteps: [
        { step: 1, name: "Upload your video" },
        { step: 2, name: "Basic info", desc: "Information of your video" },
        { step: 3, name: "Translation options" },
        { step: 4, name: "Preview" }
      ],
      srcvideo: null,
      typevideo: null
    };
  },
  methods: {
    afterComplete(data) {
      this.file = data;
      console.log("afterComplete");
      console.log(data);
      this.showStepper = true;

      this.srcvideo = JSON.parse(data.xhr.response).files.file;
      this.typevideo = data.type;
    },
    removedFile(file, error, xhr) {
      this.file = null;
      this.progressBar = 0;
    },
    added(data) {
      console.log("added");
      console.log(data);
      this.progressBar = 1;
    },
    progress(totaluploadprogress, totalBytes, totalBytesSent) {
      //   console.log(totaluploadprogress);
      this.progressBar = totaluploadprogress;
    }
  },
  computed: {
    getFile() {
      if (this.file !== null) return this.file;
      return "";
    },
    selectedVideo() {
      return this.srcvideo;
    },
    selectedTypeVideo() {
      return this.typevideo;
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
