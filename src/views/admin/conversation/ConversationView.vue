<template>
  <div>
    <SidebarCom />
    <ConversationCom />
  </div>
</template>

<script>
import ConversationCom from "@/components/admin/conversations/ConversationsCom.vue";
import SidebarCom from "@/components/admin/nav/SidebarCom.vue";

export default {
  name: "ConversationView",
  components: { SidebarCom, ConversationCom },
};
</script>

<style scoped></style>
