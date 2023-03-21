<template>
  <div>
    <SidebarCom />
    <SubcategoriesCom />
  </div>
</template>

<script>
import SubcategoriesCom from "@/components/admin/categories/SubcategoriesCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "SubcategoriesView",
  components: { SidebarCom, SubcategoriesCom },
};
</script>

<style scoped></style>
