<template>
  <div>
    <div class="row bg-purple py-2">
      <!-- لوحة التحكم -->
      <div class="col-6 align-self-center">
        <router-link
          v-if="$route.name == 'dashboard'"
          class="text-white"
          :to="{ name: 'dashboard' }"
        >
          <i class="fe fe-home fe-16"></i>
          <span class="ml-2 item-text">لوحة التحكم</span>
          <span>
            <FontAwesome icon="angles-left" class="fe-16 ms-lg-2 me-lg-2" />
            الرئيسية
          </span>
        </router-link>
        <router-link
          v-if="$route.name == 'orders'"
          class="text-white"
          :to="{ name: 'orders' }"
        >
          <i class="fe fe-home fe-16"></i>
          <span class="ml-2 item-text">طلباتي</span>
          <span>
            <FontAwesome icon="angles-left" class="fe-16 ms-lg-2 me-lg-2" />
            طلباتي
          </span>
        </router-link>
        <router-link
          v-if="$route.name == 'reviews'"
          class="text-white"
          :to="{ name: 'reviews' }"
        >
          <i class="fe fe-star fe-16"></i>
          <span class="ml-2 item-text">مراجعاتي</span>
          <span>
            <FontAwesome icon="angles-left" class="fe-16 ms-lg-2 me-lg-2" />
            مراجعاتي
          </span>
        </router-link>
      </div>
      <div class="col-6 d-inline text-start">
        <span class="ps-2">
          <img
            src="@/assets/images/bg-image.png"
            alt="img"
            width="40"
            height="40"
            class="avatar-img rounded-circle"
            style="object-fit: cover"
          />
        </span>
        <span>
          <strong class="mb-1 text-white">mohamed gamal</strong>
          <!-- <span class="dot dot-lg bg-success ml-1"></span> -->
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderCom",
};
</script>

<style lang="scss" scoped></style>
