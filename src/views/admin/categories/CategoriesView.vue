<template>
  <div>
    <SidebarCom />
    <CategoriesCom />
  </div>
</template>

<script>
import CategoriesCom from "@/components/admin/categories/CategoriesCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "CategoriesView",
  components: { SidebarCom, CategoriesCom },
};
</script>

<style scoped></style>
