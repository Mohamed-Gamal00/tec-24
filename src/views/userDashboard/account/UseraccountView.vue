<template>
  <div>
    <NavbarCom />
    <SidebarCom />
    <UseraccountCom />
  </div>
</template>

<script>
import SidebarCom from "@/components/userDashboard/nav/SidebarCom.vue";
import NavbarCom from "@/components/userDashboard/nav/NavbarCom.vue";
import UseraccountCom from "@/components/userDashboard/account/UseraccountCom.vue";
export default {
  name: "UseraccountView",
  components: { SidebarCom, UseraccountCom, NavbarCom },
};
</script>

<style lang="scss" scoped></style>
