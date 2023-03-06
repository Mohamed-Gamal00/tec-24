<template>
  <div>
    <div class="wrapper">
      <main role="main" class="main-content p-0">
        <div class="container-fluid vh-100" style="overflow: scroll">
          <HeaderCom />
          <div class="row justify-content-center">
            <div class="col-11">
              <!-- header -->
              <div class="row mt-lg-3">
                <div class="col-lg-3 col-md-3">
                  <span>
                    <input
                      type="date"
                      class="form-control rounded drgpicker"
                      id="date-input1"
                      value="04/24/2020"
                      aria-describedby="button-addon2"
                    />
                  </span>
                </div>
                <div class="col-lg-9 col-md-9 align-self-center">
                  <span class="float-start">
                    <button class="btn text-white fs-14 fw-bold">
                      اضافة خدمة جديدة
                    </button>
                  </span>
                </div>
              </div>

              <div>
                <div class="row">
                  <div
                    class="card border-0 shadow p-0 mt-4"
                    v-for="order in 8"
                    :key="order.id"
                  >
                    <!-- header -->
                    <div class="card-header border-0 pb-0">
                      <div class="row">
                        <div class="col col-md-2 text-muted">
                          ID
                          <p class="mb-1 fw-bold small text-purple">15</p>
                        </div>
                        <div class="col col-md-2 text-muted">
                          تاريخ الطلب
                          <p class="mb-1 fw-bold small text-purple">
                            13/11/589
                          </p>
                        </div>
                        <div class="col col-md-2 text-muted">
                          السعر الاجمالي
                          <p class="mb-1 fw-bold small text-purple">$155</p>
                        </div>
                      </div>
                    </div>
                    <!-- body -->
                    <div class="card-body">
                      <div class="list-group list-group-flush my-n3">
                        <div class="list-group-item mt-3">
                          <div class="row align-items-center">
                            <!-- img -->
                            <div class="col-3 col-md-2 mt-2">
                              <div class="imgcss">
                                <img
                                  src="@/assets/images/webtest.webp"
                                  alt="img"
                                  class="rounded"
                                />
                              </div>
                            </div>
                            <!-- title -->
                            <div class="col-auto mt-2">
                              <strong class="text-purple cairo"
                                >تصميم صفحة ويب</strong
                              >
                              <div class="mt-lg-4 mb-lg-5 text-muted small">
                                <p class="my-0 cairo">العدد</p>
                                <p class="my-0 text-purple fw-bold">1</p>
                              </div>
                            </div>
                            <!-- التاريخ -->
                            <div class="col-sm-12 col-lg-3 col-md-3 mt-2">
                              <strong class="text-muted cairo fs-10"
                                >تاريخ الاكتمال المتوقع</strong
                              >
                              <div class="my-1 fw-bold text-purple small">
                                13/11/2024
                              </div>
                            </div>
                            <!-- الحالة -->
                            <div class="col mt-2">
                              <strong class="text-muted fs-10 cairo"
                                >الحالة</strong
                              >
                              <div class="my-0 fs-10 fw-bold small text-danger">
                                خطأ
                              </div>
                            </div>
                            <!-- عرض الخدمة -->
                            <div
                              class="col-sm-12 text-purple col-lg-3 col-md-3 mt-2"
                            >
                              <a
                                href="#"
                                class="text-purple fs-10 fw-bold small cairo"
                              >
                                عرض الخدمة
                              </a>
                              &nbsp; | &nbsp;
                              <a
                                href="#"
                                class="text-purple fw-bold fs-10 small cairo"
                              >
                                تواصل مع العميل
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- / .list-group -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- .row -->
        </div>
      </main>
      <!-- main -->
    </div>
    <!-- .wrapper -->
  </div>
</template>

<script>
import HeaderCom from "../nav/HeaderCom.vue";
export default {
  components: { HeaderCom },
  name: "UserhomeCom",
};
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (min-width: 600px) {
  img {
    object-fit: cover;
    width: 115px;
    height: 115px;
  }
}
@media only screen and (max-width: 830px) {
  img {
    object-fit: cover;
    max-width: 80px !important;
    max-height: 80px !important;
  }
}
@media only screen and (max-width: 600px) {
  img {
    object-fit: cover;
    width: 50px !important;
    height: 50px !important;
  }
}
.shadow {
  box-shadow: 1 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
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
/* date */
input[type="date"] {
  display: block;
  position: relative;
  font-size: 1rem;
  font-family: monospace;

  border: 1px solid #9faab65b;
  border-radius: 0.25rem;
  background: white
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' viewBox='0 0 20 22'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23688EBB' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' transform='translate(1 1)'%3E%3Crect width='18' height='18' y='2' rx='2'/%3E%3Cpath d='M13 0L13 4M5 0L5 4M0 8L18 8'/%3E%3C/g%3E%3C/svg%3E")
    right 1rem center no-repeat;

  cursor: pointer;
}
input[type="date"]:focus {
  outline: none;
  box-shadow: 0 0 0 0.25rem rgba(0, 120, 250, 0.1);
}
::-webkit-calendar-picker-indicator {
  position: absolute;
  width: 2.5rem;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;

  opacity: 0;
}
</style>
