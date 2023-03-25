<template>
  <div>
    <SidebarCom />
    <ReportsCom />
  </div>
</template>

<script>
import ReportsCom from "@/components/admin/reports/ReportsCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "UsersView",
  components: { SidebarCom, ReportsCom },
};
</script>

<style scoped></style>
