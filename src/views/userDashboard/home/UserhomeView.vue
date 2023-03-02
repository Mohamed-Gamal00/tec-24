<template>
  <div>
    <NavbarCom />
    <SidebarCom />
    <UserhomeCom />
  </div>
</template>

<script>
import SidebarCom from "@/components/userDashboard/nav/SidebarCom.vue";
import UserhomeCom from "@/components/userDashboard/home/UserhomeCom.vue";
import NavbarCom from "@/components/userDashboard/nav/NavbarCom.vue";
export default {
  name: "UserhomeView",
  components: { SidebarCom, UserhomeCom, NavbarCom },
};
</script>

<style lang="scss" scoped></style>
