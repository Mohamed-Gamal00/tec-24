<template>
  <div>
    <SidebarCom />
    <AdduserCom />
  </div>
</template>

<script>
import AdduserCom from "@/components/admin/users/AdduserCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "AdduserView",
  components: { AdduserCom, SidebarCom },
};
</script>

<style lang="scss" scoped></style>
