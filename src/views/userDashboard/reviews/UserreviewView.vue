<template>
  <div>
    <NavbarCom />
    <SidebarCom />
    <UserreviewComVue />
  </div>
</template>

<script>
import SidebarCom from "@/components/userDashboard/nav/SidebarCom.vue";
import UserreviewComVue from "@/components/userDashboard/reviews/UserreviewCom.vue";
import NavbarCom from "@/components/userDashboard/nav/NavbarCom.vue";

export default {
  name: "UserreviewView",
  components: { SidebarCom, UserreviewComVue, NavbarCom },
};
</script>

<style lang="scss" scoped></style>
