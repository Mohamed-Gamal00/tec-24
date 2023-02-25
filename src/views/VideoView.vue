<template>
  <div class="home">
    <VideoCom />
  </div>
</template>

<script>
// @ is an alias to /src
import VideoCom from "@/components/designVideo/VideoCom.vue";

export default {
  name: "VideoView",
  components: {
    VideoCom,
  },
};
</script>
