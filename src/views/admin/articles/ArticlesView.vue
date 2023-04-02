<template>
  <div>
    <SidebarCom />
    <ArticlesCom />
  </div>
</template>

<script>
import ArticlesCom from "@/components/admin/articles/ArticlesCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "ArticlesView",
  components: { SidebarCom, ArticlesCom },
};
</script>

<style scoped></style>
