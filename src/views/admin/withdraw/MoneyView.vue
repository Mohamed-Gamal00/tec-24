<template>
  <div>
    <SidebarCom />
    <MonyCom />
  </div>
</template>

<script>
import MonyCom from "@/components/admin/withdraw/MoneyCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "MoneyView",
  components: { SidebarCom, MonyCom },
};
</script>

<style scoped></style>
