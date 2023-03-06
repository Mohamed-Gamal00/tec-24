<template>
  <div>
    <NavbarCom />
    <SidebarCom />
    <UserDashboardComVue />
  </div>
</template>

<script>
import SidebarCom from "@/components/userDashboard/nav/SidebarCom.vue";
import UserDashboardComVue from "@/components/userDashboard/home/UserDashboardCom.vue";
import NavbarCom from "@/components/userDashboard/nav/NavbarCom.vue";
export default {
  name: "UserhomeView",
  components: { SidebarCom, UserDashboardComVue, NavbarCom },
};
</script>

<style lang="scss" scoped></style>
