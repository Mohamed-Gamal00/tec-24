<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-white"
      style="background-color: #433472"
    >
      <div class="container">
        <router-link :to="{ name: 'home' }">
          <img src="../../assets/images/24.png" width="50" />
        </router-link>

        <button
          class="navbar-toggler bg-transparent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link mx-2 active" aria-current="page" href="#"
                >الخدمات المتاحة</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2 active" aria-current="page" href="#"
                >الخدمات المتاحة</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2 active" aria-current="page" href="#"
                >الخدمات المتاحة</a
              >
            </li>
          </ul>
          <router-link
            class="btn bg-white text-purple ms-2 fs-14 fw-bold cairo"
            :to="{ name: 'login' }"
          >
            تسجيل دخول
          </router-link>
          <router-link
            class="btn bg-white text-purple ms-2 fs-14 fw-bold cairo"
            :to="{ name: 'register' }"
          >
            انشاء حساب
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavebarCom",
  // mounted() {
  //   window.scrollTo(0, 0);
  // },
};
</script>

<style scoped>
* {
  z-index: 9999;
}
.navbar-nav .nav-link.active,
.navbar-nav .show > .nav-link {
  color: #ffffff;
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    width: 10%;
  }
}
</style>
