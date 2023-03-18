<template>
  <div>
    <SidebarCom />
    <CartsCom />
  </div>
</template>

<script>
import CartsCom from "@/components/admin/carts/CartsCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "CartsView",
  components: { SidebarCom, CartsCom },
};
</script>

<style scoped></style>
