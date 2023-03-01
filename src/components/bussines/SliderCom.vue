<template>
  <div class="bg-white">
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide v-for="img in images" :key="img.id">
        <img class="" :src="img.img" alt="img" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
export default {
  name: "SliderCom",
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      images: [
        { id: 1, img: require("@/assets/images/testimg.jpg") },
        { id: 2, img: require("@/assets/images/marketing.jpg") },
        { id: 3, img: require("@/assets/images/bg-image.png") },
      ],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-button-prev:after {
  content: "next";
  color: white !important;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media only screen and (min-width: 992px) {
  .swiper-slide img {
    object-fit: fill;
  }
  .swiper {
    height: 417px;
    border-radius: 8px;
  }
}
@media only screen and (min-width: 700px) {
  .swiper-slide img {
    object-fit: fill;
  }
  .swiper {
    height: 417px;
  }
}
@media only screen and (max-width: 600px) {
  .swiper {
    height: 250px;
  }
  .swiper-slide img {
    object-fit: cover;
  }
}
</style>
