<template>
  <div>
    <div class="wrapper">
      <main role="main" class="main-content p-0">
        <div class="container-fluid vh-100" style="overflow: scroll">
          <HeaderCom />
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="row">
                <!-- col-9 -->
                <div class="col-md-12 col-lg-9 mb-4">
                  <div
                    class="card border-0 profile rounded-4 mt-lg-3"
                    style="background-color: #4334720a"
                  >
                    <div class="card-body my-4">
                      <div
                        class="row justify-content-around align-items-center"
                      >
                        <!-- img -->
                        <div class="col-md-3 col-lg-4 text-end text-lg-end">
                          <a href="#!" class="avatar avatar-xl">
                            <img
                              src="@/assets/images/hassan.jpg"
                              alt="..."
                              class="avatar-img rounded-circle"
                            />
                          </a>
                          <div class="d-inline-block me-lg-2">
                            <span class="text-purple cairo fw-bolder"
                              >mohamed gamal</span
                            >
                            <p class="text-muted fs-10">front-end developer</p>
                          </div>
                        </div>
                        <!-- email -->
                        <div class="col-md-3">
                          <div>
                            <p class="my-0 cairo fs-10 text-muted">
                              البريد الاكتروني
                            </p>
                            <p class="fs-10 fw-bold">mg2312@gmaddddil.com</p>
                          </div>
                          <div>
                            <p class="my-0 cairo text-muted fs-10">
                              رقم الهاتف
                            </p>
                            <p class="fs-10 fw-bold">01017850369</p>
                          </div>
                        </div>
                        <!-- address -->
                        <div class="col-md-4">
                          <div>
                            <p class="my-0 text-muted fs-10">الموقع</p>
                            <p class="fs-10 fw-bold">
                              مدينة الرياض - المملكة العربية السعودية
                            </p>
                          </div>
                          <div>
                            <p class="my-0 text-muted fs-10">رابط الموقع</p>
                            <p class="fs-10 fw-bold">https://24techsa.com</p>
                          </div>
                        </div>
                      </div>
                      <p class="fw-bold900 cairo mt-4">إعدادات الحساب</p>
                      <div class="row">
                        <form
                          class="form-inline"
                          style="direction: rtl !important"
                        >
                          <div class="row" style="text-align: start">
                            <!-- name -->
                            <div class="row">
                              <!-- الاسم الاول -->
                              <div class="col-md-6 col-lg-4">
                                <label
                                  class="mb-1 text-purple fs-10 fw-bold"
                                  for="fname"
                                  >الاسم الاول</label
                                >
                                <div class="input-group mb-2">
                                  <input
                                    type="text"
                                    class="form-control rounded-3"
                                    id="fname"
                                  />
                                </div>
                              </div>
                              <!-- الاسم الاخير -->
                              <div class="col-md-6 col-lg-4">
                                <label
                                  class="mb-1 text-purple fs-10 fw-bold"
                                  for="lname"
                                  >الاسم الاخير</label
                                >
                                <div class="input-group mb-2">
                                  <input
                                    type="text"
                                    class="form-control rounded-3"
                                    id="lname"
                                  />
                                </div>
                              </div>
                              <!-- username -->
                              <div class="col-md-6 col-lg-4 mb-3">
                                <label
                                  class="mb-1 text-purple fs-10 fw-bold"
                                  for="username"
                                  >اسم المستخدم</label
                                >
                                <div class="input-group mb-2">
                                  <input
                                    type="email"
                                    class="form-control rounded-3"
                                    id="username"
                                  />
                                </div>
                              </div>
                            </div>
                            <!-- رقم الهاتف البريد الاليكتروني -->
                            <div class="row">
                              <!-- phone -->
                              <div class="col-md-6 col-lg-4 mb-3">
                                <label
                                  class="mb-1 text-purple fs-10 fw-bold"
                                  for="phone"
                                  >رقم الهاتف</label
                                >
                                <div class="input-group mb-2">
                                  <input
                                    type="number"
                                    class="form-control rounded-3"
                                    id="phone"
                                  />
                                </div>
                              </div>
                              <!-- email -->
                              <div class="col-md-6 col-lg-4">
                                <label
                                  class="mb-1 text-purple fs-10 fw-bold"
                                  for="email"
                                  >البريد الالكتروني</label
                                >
                                <div class="input-group mb-2">
                                  <input
                                    type="email"
                                    class="form-control rounded-3"
                                    id="email"
                                  />
                                </div>
                              </div>
                              <!-- رابط الموقع-->
                              <div class="col-md-6 col-lg-4">
                                <label
                                  class="mb-1 text-purple fs-10 fw-bold"
                                  for="link"
                                  >رابط الموقع</label
                                >
                                <div class="input-group mb-2">
                                  <input
                                    type="text"
                                    class="form-control rounded-3"
                                    id="link"
                                  />
                                </div>
                              </div>
                            </div>
                            <!-- البلاد -->
                            <div class="row">
                              <!-- البلد -->
                              <div class="col-md-6 col-lg-4 mb-3">
                                <label
                                  class="mb-1 text-purple fs-10 fw-bold"
                                  for="password"
                                  >الدولة</label
                                >
                                <div class="input-group mb-2">
                                  <select
                                    class="form-select fs-10"
                                    aria-label="Default select example"
                                  >
                                    <option selected>
                                      المملكة العربية السعودية
                                    </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                              </div>
                              <!-- المدينة -->
                              <div class="col-md-6 col-lg-4">
                                <label
                                  class="mb-1 text-purple fs-10 fw-bold"
                                  for="confirmPass"
                                  >المدينة</label
                                >
                                <div class="input-group mb-2">
                                  <select
                                    class="form-select fs-10"
                                    aria-label="Default select example"
                                  >
                                    <option selected>الرياض</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                              </div>
                              <!-- العنوان-->
                              <div class="col-md-6 col-lg-4">
                                <label
                                  class="mb-1 text-purple fs-10 fw-bold"
                                  for="address"
                                  >العنوان</label
                                >
                                <div class="input-group mb-2">
                                  <input
                                    type="text"
                                    class="form-control rounded-3"
                                    id="address"
                                  />
                                </div>
                              </div>
                            </div>
                            <!-- اعدادات عامة -->
                            <div class="row">
                              <p class="fw-bold900 cairo mt-3">إعدادات عامة</p>

                              <!-- اعدادات عامة -->
                              <div class="col-md-6 col-lg-4 mb-3">
                                <label
                                  class="mb-1 text-purple fs-10 fw-bold"
                                  for="password"
                                  >الدولة</label
                                >
                                <div class="input-group mb-2">
                                  <select
                                    class="form-select fs-10"
                                    aria-label="Default select example"
                                  >
                                    <option selected>
                                      المملكة العربية السعودية
                                    </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                              </div>
                              <!-- العملة الافتراضية -->
                              <div class="col-md-6 col-lg-4">
                                <label
                                  class="mb-1 text-purple fs-10 fw-bold"
                                  for="confirmPass"
                                  >العملة الافتراضية</label
                                >
                                <div class="input-group mb-2">
                                  <select
                                    class="form-select fs-10"
                                    aria-label="Default select example"
                                  >
                                    <option selected>الريال</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <!-- حفظ التعديلات -->
                            <div class="d-flex justify-content-end">
                              <div class="col-md-4 justify-content-start">
                                <div class="text-center mt-lg-2">
                                  <button
                                    class="btn text-white fs-10"
                                    :to="{ name: 'login' }"
                                  >
                                    الغاء التعديلات
                                  </button>
                                  <button
                                    class="btn text-white fs-10 me-2"
                                    :to="{ name: 'login' }"
                                  >
                                    حفظ التعديلات
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- col-3 -->
                <div class="col-md-12 col-lg-3">
                  <div
                    class="card border-0 profile rounded-4 mt-lg-3"
                    style="background-color: #4334720a"
                  >
                    <div class="card-body my-4">
                      <div
                        class="row justify-content-around align-items-center"
                      >
                        <!-- img -->
                        <div class="col-md-12 col-lg-12 text-center">
                          <a href="#!" class="avatar avatar-lg">
                            <img
                              src="@/assets/images/hassan.jpg"
                              alt="..."
                              class="avatar-img rounded-circle"
                            />
                          </a>
                          <div class="d-block">
                            <span class="text-purple cairo fw-bolder"
                              >mohamed gamal</span
                            >
                            <p class="text-muted fs-10">front-end developer</p>
                          </div>
                        </div>
                        <!-- email -->
                        <div class="col-md-12">
                          <div>
                            <p class="my-0 cairo fs-10 text-muted">
                              البريد الاكتروني
                            </p>
                            <p class="fs-10 fw-bold">mg2312@gmaddddil.com</p>
                          </div>
                          <div>
                            <p class="my-0 cairo text-muted fs-10">
                              رقم الهاتف
                            </p>
                            <p class="fs-10 fw-bold">01017850369</p>
                          </div>
                        </div>
                        <!-- address -->
                        <div class="col-md-12">
                          <div>
                            <p class="my-0 text-muted fs-10">الموقع</p>
                            <p class="fs-10 fw-bold">
                              مدينة الرياض - المملكة العربية السعودية
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- اخر المشاريع -->
                      <div class="card border border-0">
                        <div class="card-header">
                          <strong class="card-title fs-10 fw-bold"
                            >اخر المشاريع</strong
                          >
                          <!-- <button class="btn float-start">fgj</button> -->
                          <FontAwesome
                            icon="square-caret-down"
                            class="fe-16 ms-lg-2 me-lg-2 float-start text-purple mt-1 icon"
                          />
                        </div>
                        <div
                          class="card-body pt-3 ps-0 pe-0 show"
                          style="background-color: #4334720a"
                        >
                          <div class="row justify-content-center">
                            <div class="col-md-5 col-lg-12">
                              <div
                                class="list-group mb-3 pl-0 list-group-flush my-n3"
                                v-for="user in 3"
                                :key="user.id"
                              >
                                <div
                                  class="list-group-item"
                                  style="background-color: transparent"
                                >
                                  <div class="row align-items-center">
                                    <!-- <div class="col-3 col-md-2"> -->
                                    <div class="col-3">
                                      <img
                                        src="@/assets/images/webtest.webp"
                                        alt="..."
                                        class="rounded"
                                        width="45"
                                        height="45"
                                      />
                                    </div>
                                    <div class="col-9">
                                      <strong class="fs-10 fw-bold cairo"
                                        >قام احمد</strong
                                      >
                                      <span
                                        class="fs-10 fw-bold text-purple cairo"
                                      >
                                        بإنهاء المشروع
                                      </span>
                                      <div class="my-0 text-muted fs-10 cairo">
                                        $ 155
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- / .list-group -->
                        </div>
                        <!-- / .card-body -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import HeaderCom from "../nav/HeaderCom.vue";
export default {
  name: "UseraccountCom",
  components: { HeaderCom },
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
.show {
  display: none;
}
/* scroll */
/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 1px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #433472;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #433472;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #6c10e6;
}
</style>
