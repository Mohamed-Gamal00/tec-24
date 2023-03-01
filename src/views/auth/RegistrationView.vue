<template>
  <div class="home">
    <RegistrationCom />
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationCom from "@/components/auth/RegistrationCom.vue";

export default {
  name: "RegistrationView",
  components: {
    RegistrationCom,
  },
};
</script>
