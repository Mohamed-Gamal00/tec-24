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
          <div class="w-100 mb-1 d-flex mx-auto">
            <router-link class="mx-auto" :to="{ name: 'admin' }">
              <img src="@/assets/images/24.png" width="50" alt="img" />
            </router-link>
          </div>
          <ul class="navbar-nav flex-fill w-100 mb-2 small">
            <router-link
              class="text-white mb-1 nav-link"
              :to="{ name: 'admin' }"
            >
              <li class="pe-2">
                <i class="fe fe-home fe-16"></i>
                <span class="ml-3 item-text">لوحة التحكم</span>
              </li>
            </router-link>

            <li class="nav-item dropdown">
              <router-link
                class="dropdown-toggle text-white mb-1 nav-link"
                :to="{ name: 'users' }"
                href="#dashboard"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <!-- <i class="fe fe-home fe-16"></i> -->
                <li class="pe-2">
                  <FontAwesome icon="users" class="fe-16" />
                  <span class="ml-3 item-text">المستخدمون</span
                  ><span class="sr-only">(تصفح الكل)</span>
                </li>
              </router-link>
              <ul class="collapse list-unstyled pl-4 w-100" id="dashboard">
                <li class="nav-item active">
                  <a class="nav-link pl-3" href="./index.html"
                    ><span class="ml-1 item-text">انشاء جديد</span></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link pl-3" href="./dashboard-analytics.html"
                    ><span class="ml-1 item-text">المستويات</span></a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link pl-3" href="./dashboard-sales.html"
                    ><span class="ml-1 item-text">التأكيد</span></a
                  >
                </li>
              </ul>
            </li>
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
  font-size: 15px;
}
.navbar-light .navbar-nav .nav-link:hover {
  background: #6565af !important;
}
</style>
