<template>
  <div class="home">
    <HomeCom />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCom from "@/components/home/HomeCom.vue";

export default {
  name: "HomeView",
  components: {
    HomeCom,
  },
};
</script>
