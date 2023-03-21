<template>
  <div>
    <SidebarCom />
    <AddcatCom />
  </div>
</template>

<script>
import AddcatCom from "@/components/admin/categories/AddcatCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "AddcatView",
  components: { SidebarCom, AddcatCom },
};
</script>

<style scoped></style>
