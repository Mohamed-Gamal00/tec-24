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
          </ul>
          <!-- المستخدمون -->
          <ul class="navbar-nav flex-fill w-100 mb-2 small">
            <li class="nav-item dropdown">
              <router-link
                class="dropdown-toggle text-white mb-1 nav-link"
                :to="{ name: this.$route.name }"
                href="#dashboard"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <!-- <i class="fe fe-home fe-16"></i> -->
                <li class="pe-2">
                  <FontAwesome icon="users" class="fe-16" />

                  <span class="ml-3 item-text" v-if="$route.name == 'users'"
                    >المستخدمون</span
                  >
                  <span class="ml-3 item-text" v-else></span>
                  <span class="ml-3 item-text" v-if="$route.name == 'adduser'"
                    >إنشاء جديد</span
                  >
                  <span class="ml-3 item-text" v-if="$route.name == 'levels'"
                    >المستويات</span
                  >
                </li>
              </router-link>
              <ul class="collapse list-unstyled pl-4 w-100" id="dashboard">
                <router-link :to="{ name: 'users' }">
                  <li class="nav-item">
                    <a class="nav-link pl-3"
                      ><span class="ml-1 item-text fs-10">المستخدمون</span></a
                    >
                  </li>
                </router-link>
                <router-link :to="{ name: 'adduser' }">
                  <li class="nav-item">
                    <a class="nav-link pl-3"
                      ><span class="ml-1 item-text fs-10">انشاء جديد</span></a
                    >
                  </li>
                </router-link>
                <router-link :to="{ name: 'levels' }">
                  <li class="nav-item">
                    <a class="nav-link pl-3"
                      ><span class="ml-1 item-text fs-10">المستويات</span></a
                    >
                  </li>
                </router-link>
                <!-- <li class="nav-item">
                  <a class="nav-link pl-3"
                    ><span class="ml-1 item-text">التأكيد</span></a
                  >
                </li> -->
              </ul>
            </li>
          </ul>
          <!-- الانسحابات -->
          <ul class="navbar-nav flex-fill w-100 mb-2 small">
            <li class="nav-item dropdown">
              <router-link
                class="text-white mb-1 nav-link"
                :to="{ name: 'money' }"
              >
                <!-- <i class="fe fe-home fe-16"></i> -->
                <li class="pe-2">
                  <FontAwesome icon="comments-dollar" class="fe-16" />
                  <span class="ml-3 item-text">الانسحابات</span>
                </li>
              </router-link>
              <!-- <ul class="collapse list-unstyled pl-4 w-100" id="Withdraw">
                <router-link :to="{ name: 'money' }">
                  <li class="nav-item">
                    <a class="nav-link pl-3"
                      ><span class="ml-1 item-text fs-10">عرض الكل</span></a
                    >
                  </li>
                </router-link>
              </ul> -->
            </li>
          </ul>
          <!-- الملفات -->
          <ul class="navbar-nav flex-fill w-100 mb-2 small">
            <li class="nav-item dropdown">
              <router-link
                class="text-white mb-1 nav-link"
                :to="{ name: 'folders' }"
              >
                <li class="pe-2">
                  <FontAwesome icon="folder-open" class="fe-16" />
                  <span class="ml-3 item-text">الملفات</span>
                </li>
              </router-link>
            </li>
          </ul>
          <!-- العربات -->
          <ul class="navbar-nav flex-fill w-100 mb-2 small">
            <li>
              <router-link
                class="text-white mb-1 nav-link"
                :to="{ name: 'carts' }"
              >
                <li class="pe-2">
                  <FontAwesome icon="cart-shopping" class="fe-16" />
                  <span class="ml-3 item-text">العربات</span>
                </li>
              </router-link>
            </li>
          </ul>
          <!-- الفواتير -->
          <ul class="navbar-nav flex-fill w-100 mb-2 small">
            <li>
              <router-link
                class="text-white mb-1 nav-link"
                :to="{ name: 'bills' }"
              >
                <li class="pe-2">
                  <FontAwesome icon="dollar" class="fe-16" />
                  <span class="ml-3 item-text">الفواتير</span>
                </li>
              </router-link>
            </li>
          </ul>
          <!-- الاقسام -->
          <ul class="navbar-nav flex-fill w-100 mb-2 small">
            <li class="nav-item dropdown">
              <router-link
                class="dropdown-toggle text-white mb-1 nav-link"
                :to="{ name: this.$route.name }"
                href="#categories"
                data-toggle="collapse"
                aria-expanded="false"
              >
                <li class="pe-2">
                  <FontAwesome icon="users" class="fe-16" />

                  <span class="ml-3 item-text">الاقسام</span>
                </li>
              </router-link>
              <ul class="collapse list-unstyled pl-4 w-100" id="categories">
                <router-link :to="{ name: 'categories' }">
                  <li class="nav-item">
                    <a class="nav-link pl-3"
                      ><span class="ml-1 item-text fs-10">الاقسام</span></a
                    >
                  </li>
                </router-link>
                <router-link :to="{ name: 'subcategories' }">
                  <li class="nav-item">
                    <a class="nav-link pl-3"
                      ><span class="ml-1 item-text fs-10"
                        >الاقسام الفرعية</span
                      ></a
                    >
                  </li>
                </router-link>
                <!-- <li class="nav-item">
                  <a class="nav-link pl-3"
                    ><span class="ml-1 item-text">التأكيد</span></a
                  >
                </li> -->
              </ul>
            </li>
          </ul>
          <!-- التقارير -->
          <ul class="navbar-nav flex-fill w-100 mb-2 small">
            <li class="nav-item dropdown">
              <router-link
                class="text-white mb-1 nav-link"
                :to="{ name: 'reports' }"
              >
                <li class="pe-2">
                  <FontAwesome icon="triangle-exclamation" class="fe-16" />
                  <span class="ml-3 item-text">التقارير</span>
                </li>
              </router-link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "SidebarCom",
  mounted() {
    this.lastproject();
  },
  methods: {
    lastproject() {
      $(document).ready(function () {
        $(".icon").click(function () {
          $(".show").slideToggle("slow");
        });
      });
    },
  },
};
</script>

<style scoped>
.vertical
  .sidebar-left
  .navbar-nav
  > .nav-item
  > a.dropdown-toggle[data-v-57838f61]::after {
  display: inline-block;
  font-size: 20px !important;
  position: relative !important;
  top: -12px !important;
}
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
