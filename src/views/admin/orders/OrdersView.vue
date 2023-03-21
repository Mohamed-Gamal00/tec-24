<template>
  <div>
    <SidebarCom />
    <OrdersCom />
  </div>
</template>

<script>
import OrdersCom from "@/components/admin/orders/OrdersCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "OrdersView",
  components: { SidebarCom, OrdersCom },
};
</script>

<style scoped></style>
