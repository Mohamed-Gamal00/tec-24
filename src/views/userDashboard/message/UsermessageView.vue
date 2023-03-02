<template>
  <div>
    <NavbarCom />
    <SidebarCom />
    <UsermessegeCom />
  </div>
</template>

<script>
import SidebarCom from "@/components/userDashboard/nav/SidebarCom.vue";
import NavbarCom from "@/components/userDashboard/nav/NavbarCom.vue";

import UsermessegeCom from "@/components/userDashboard/message/UsermessegeCom.vue";
export default {
  name: "UsermessageView",
  components: { SidebarCom, UsermessegeCom, NavbarCom },
};
</script>

<style lang="scss" scoped></style>
