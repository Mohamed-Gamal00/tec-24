<template>
  <div class="about">about</div>
  <input type="text" v-model="search" />
  <div v-for="categorie in filtercategories" :key="categorie.id">
    <h3>{{ categorie.title }}</h3>
    <h3>{{ categorie.body }}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      categories: [
        { id: 1, title: "post-1", body: "vue.js is cool" },
        { id: 2, title: "post-2", body: "Javascript.js is cool" },
      ],
    };
  },
  computed: {
    filtercategories() {
      return this.categories.filter((categorie) =>
        categorie.body.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>
<style scoped></style>
