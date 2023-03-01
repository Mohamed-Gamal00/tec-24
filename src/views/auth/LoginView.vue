<template>
  <div class="home">
    <LoginCom />
  </div>
</template>

<script>
import LoginCom from "@/components/auth/LoginCom.vue";

export default {
  name: "LoginView",
  components: {
    LoginCom,
  },
};
</script>
