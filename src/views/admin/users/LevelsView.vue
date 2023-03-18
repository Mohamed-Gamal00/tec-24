<template>
  <div>
    <SidebarCom />
    <LevelsCom />
  </div>
</template>

<script>
import LevelsCom from "@/components/admin/users/LevelsCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "UsersView",
  components: { SidebarCom, LevelsCom },
};
</script>

<style scoped></style>
