<template>
  <div>
    <SidebarCom />
    <CreateArticleCom />
  </div>
</template>

<script>
import CreateArticleCom from "@/components/admin/articles/CreateArticleCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "CreateArticleView",
  components: { SidebarCom, CreateArticleCom },
};
</script>

<style scoped></style>
