<template>
  <div>
    <SidebarCom />
    <BillsCom />
  </div>
</template>

<script>
import BillsCom from "@/components/admin/bills/BillsCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "BillsView",
  components: { SidebarCom, BillsCom },
};
</script>

<style scoped></style>
