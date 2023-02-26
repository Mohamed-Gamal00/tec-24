<template>
  <div class="home">
    <VoiceservCom />
  </div>
</template>

<script>
// @ is an alias to /src
import VoiceservCom from "@/components/voice/VoiceservCom.vue";

export default {
  name: "VoiceservView",
  components: {
    VoiceservCom,
  },
};
</script>
