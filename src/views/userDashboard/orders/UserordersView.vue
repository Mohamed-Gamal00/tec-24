<template>
  <div>
    <NavbarCom />
    <SidebarCom />
    <UserordersCom />
  </div>
</template>

<script>
import SidebarCom from "@/components/userDashboard/nav/SidebarCom.vue";
import UserordersCom from "@/components/userDashboard/userorders/UserordersCom.vue";
import NavbarCom from "@/components/userDashboard/nav/NavbarCom.vue";

export default {
  name: "UserordersView",
  components: { SidebarCom, UserordersCom, NavbarCom },
};
</script>

<style lang="scss" scoped></style>
