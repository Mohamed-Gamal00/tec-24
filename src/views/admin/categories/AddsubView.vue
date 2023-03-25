<template>
  <div>
    <SidebarCom />
    <AddsubCom />
  </div>
</template>

<script>
import AddsubCom from "@/components/admin/categories/AddsubCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "AddsubView",
  components: { SidebarCom, AddsubCom },
};
</script>

<style scoped></style>
