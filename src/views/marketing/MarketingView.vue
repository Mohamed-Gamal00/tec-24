<template>
  <div class="home">
    <MarketingCom />
  </div>
</template>

<script>
// @ is an alias to /src
import MarketingCom from "@/components/marketing/MarketingCom.vue";

export default {
  name: "MarketingView",
  components: {
    MarketingCom,
  },
};
</script>
