<template>
  <div>
    <SidebarCom />
    <UsersCom />
  </div>
</template>

<script>
import UsersCom from "@/components/admin/users/UsersCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "UsersView",
  components: { SidebarCom, UsersCom },
};
</script>

<style scoped></style>
