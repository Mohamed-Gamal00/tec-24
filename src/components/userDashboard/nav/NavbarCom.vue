<template>
  <div class="wrapper">
    <div>
      <nav class="navbar navbar-expand-lg bg-purple navbarsmalldvice">
        <div class="container p-2">
          <router-link :to="{ name: 'dashboard' }">
            <img src="@/assets/images/24.png" width="50" alt="img" />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fe fe-menu fe-16"></span>
          </button>
          <div
            class="collapse navbar-collapse mt-3"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav flex-fill w-100 mb-2 small">
              <!-- لوحة التحكم -->
              <router-link class="text-white mb-4" :to="{ name: 'dashboard' }">
                <li class="pe-2">
                  <i class="fe fe-home fe-16"></i>
                  <span class="ml-3 item-text">لوحة التحكم</span>
                </li>
              </router-link>
              <!-- طلباتي -->
              <router-link class="text-white mb-4" :to="{ name: 'orders' }">
                <li class="pe-2">
                  <i class="fe fe-shopping-cart fe-16"></i>
                  <span class="ml-3 item-text">طلباتي</span>
                </li>
              </router-link>
              <!-- رسائلي -->
              <router-link class="text-white mb-4" :to="{ name: 'message' }">
                <li class="pe-2">
                  <i class="fe fe-message-square fe-16"></i>
                  <span class="ml-3 item-text">رسائلي</span>
                </li>
              </router-link>
              <!-- مراجعتي -->
              <router-link class="text-white mb-4" :to="{ name: 'reviews' }">
                <li class="pe-2">
                  <i class="fe fe-star fe-16"></i>
                  <span class="ml-3 item-text">مراجعتي</span>
                </li>
              </router-link>
              <!-- حسابي -->
              <router-link class="text-white mb-4" :to="{ name: 'account' }">
                <li class="pe-2">
                  <i class="fe fe-user fe-16"></i>
                  <span class="ml-3 item-text">حسابي</span>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarCom",
};
</script>

<style scoped>
.navbar-toggler {
  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
  font-size: var(--bs-navbar-toggler-font-size);
  line-height: 1;
  color: rgb(255, 255, 255);
  background-color: transparent;
  border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
  /* border-radius: var(--bs-navbar-toggler-border-radius); */
  transition: var(--bs-navbar-toggler-transition);
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: none;
}
</style>
