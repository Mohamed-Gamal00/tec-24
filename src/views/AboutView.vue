<template>
  <div class="about">about</div>
  <div class="star-rating star">
    <span
      ><a v-for="ratings in 5" :key="ratings" href="#" :rating="rating">
        &starf;</a
      ></span
    >
    <!-- <div class="star-rating__current">
      <span>&starf;</span>
      <span>&starf;</span>
      <span>&starf;</span>
      <span>&starf;</span>
      <span>&starf;</span>
    </div> -->
  </div>
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
      rating: "",
    };
  },
  computed: {
    filtercategories() {
      return this.categories.filter((categorie) =>
        categorie.body.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  mounted() {
    this.stars();
  },
  methods: {
    stars() {
      var stars = document.querySelectorAll(".star a");
      stars.forEach((item, index1) => {
        item.addEventListener("click", () => {
          stars.forEach((star, index2) => {
            index1 >= index2
              ? star.classList.add("active")
              : star.classList.remove("active");
          });
          console.log(index1 + 1);
          this.rating = index1 + 1;
        });
      });
    },
  },
};
</script>
<style scoped>
.star-rating {
  display: inline;
  color: gold;
  font-size: 2rem;
  position: relative;
}
/* .star-rating__current {
  position: absolute;
  top: -13px;
} */
.star-rating a {
  color: aliceblue;
  transition: all 0.3 ease-in-out;
}
.star-rating a.active {
  color: gold;
}
</style>
