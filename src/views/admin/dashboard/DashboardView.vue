<template>
  <SidebarCom />
  <DashboardCom />
</template>

<script>
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";
import DashboardCom from "@/components/admin/dashboard/DashboardCom.vue";

export default {
  name: "DashboardView",
  components: { SidebarCom, DashboardCom },
};
</script>

<style scoped></style>
