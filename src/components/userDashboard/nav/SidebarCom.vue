<template>
  <div>
    <div class="wrapper">
      <aside
        class="sidebar-left border-right bg-purple"
        id="leftSidebar"
        data-simplebar
      >
        <nav class="vertnav navbar navbar-light">
          <!-- nav bar -->
          <div class="w-100 mb-4 d-flex mx-auto">
            <router-link class="mx-auto" :to="{ name: 'dashboard' }">
              <img src="@/assets/images/24.png" width="50" alt="img" />
            </router-link>
          </div>
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
        </nav>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarCom",
};
</script>

<style scoped>
ul a.router-link-exact-active {
  padding: 10px 0;
  font-weight: bold;
  color: #ffffff !important;
  transition: all 0.3s ease-in-out;
  background-color: #6565af;
  font-size: 16px;
}
</style>
