<template>
  <div>
    <SidebarCom />
    <FoldersCom />
  </div>
</template>

<script>
import FoldersCom from "@/components/admin/folders/FoldersCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "FoldersView",
  components: { SidebarCom, FoldersCom },
};
</script>

<style scoped></style>
