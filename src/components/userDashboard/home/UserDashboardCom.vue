<template>
  <div>
    <div class="wrapper">
      <main role="main" class="main-content p-0">
        <div class="container-fluid">
          <!-- dash -->
          <HeaderCom />
          <div class="row mt-3 align-items-center">
            <div class="col-12 align-self-center">
              <!-- الخدمات المكتملة -->
              <div class="row justify-content-evently">
                <div
                  class="col-md-6 col-xl-4 d-flex justify-content-center align-self-center mt-2 mb-2"
                  v-for="mission in missions"
                  :key="mission.id"
                >
                  <div
                    class="card border shadow text-purple"
                    style="width: 74%"
                  >
                    <div class="card-body pt-3 p-4">
                      <div class="row align-items-center">
                        <div class="col-3 text-center">
                          <span class="circle circle-sm bg-purple">
                            <img
                              :src="mission.img"
                              width="35"
                              height="35"
                              class="rounded-circle"
                              alt="img"
                            />
                          </span>
                        </div>
                        <div class="col pr-0">
                          <p class="fs-14 text-purple mb-1">
                            {{ mission.title }}
                          </p>
                          <span class="h5 fw-bold mb-0 text-purple">{{
                            mission.number
                          }}</span>
                          <span
                            class="fs-10 fw-bold text-purple ms-lg-4 ms-4 float-right"
                            >{{ mission.percent }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- contain -->
              <div class="row justify-content-center">
                <div class="col-11">
                  <div class="row">
                    <!-- col-8 -->
                    <div class="col-lg-8 col-md-12 col-sm-6 text-light">
                      <!--Expandable rows -->
                      <div class="card border shadow text-purple">
                        <div class="card-body pb-2">
                          <h5 class="card-title">الخدمات</h5>
                          <table
                            width="100%"
                            class="table table-responsive table-sm table-hover table-borderless"
                          >
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>الخدمة</th>
                                <th>الاسم</th>
                                <th>السعر</th>
                                <th>المدة</th>
                                <th>الحالة</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="order in 4" :key="order.id">
                                <!-- id -->
                                <td style="width: 15%">3224</td>
                                <!-- الخدمة -->
                                <td style="width: 15%">
                                  <div>
                                    <img
                                      src="@/assets/images/testimg.webp"
                                      alt=""
                                      class="rounded"
                                      width="60"
                                      height="60"
                                    />
                                  </div>
                                  <!-- <span>
                                    <h6 class="text-purple">تصميم صفحة ويب</h6>
                                    <p class="small">هو ببساطة نص شكلي</p>
                                  </span> -->
                                </td>
                                <!-- الاسم -->
                                <td>
                                  <strong
                                    class="text-purple small cairo fw-bold"
                                  >
                                    تصميم صفحة ويب
                                  </strong>
                                </td>
                                <!-- السعر -->
                                <td style="width: 15%">155$</td>
                                <!-- المدة -->
                                <td style="width: 30%">13 ساعة</td>
                                <!-- الحالة -->
                                <td>
                                  <span class="badge badge-pill badge-warning"
                                    >تحت الانشاء</span
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <!-- Expandable rows -->
                    </div>
                    <!-- col-4 -->
                    <div class="col-lg-4 col-md-12">
                      <div class="card border shadow">
                        <div class="card-header bg-white">
                          <strong class="card-title">اجدد الاحداث</strong>
                        </div>
                        <div class="card-body pt-3">
                          <div class="row">
                            <div class="col-md-5 col-lg-12 col-sm-12">
                              <div
                                class="list-group mb-3 pl-0 list-group-flush my-n3"
                                v-for="user in 6"
                                :key="user.id"
                              >
                                <div class="list-group-item">
                                  <div class="row align-items-center">
                                    <!-- <div class="col-3 col-md-2"> -->
                                    <div class="col-3">
                                      <img
                                        src="@/assets/images/learning.webp"
                                        alt="..."
                                        class="rounded"
                                        width="50"
                                        height="50"
                                      />
                                    </div>
                                    <div class="col-8">
                                      <strong class="fs-10 fw-bold cairo"
                                        >قام احمد</strong
                                      >
                                      <span
                                        class="fs-10 fw-bold text-purple cairo"
                                      >
                                        بإنهاء المشروع
                                      </span>
                                      <div class="my-0 text-muted fs-10 cairo">
                                        منذ ساعتين
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
                      <!-- / .card -->
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
import HeaderCom from "../nav/HeaderCom.vue";
export default {
  components: { HeaderCom },
  name: "UserDashboardCom",
  data() {
    return {
      missions: [
        {
          id: 1,
          img: require("@/assets/images/complete.gif"),
          title: "الخدمات المكتلمة",
          number: "15",
          percent: "12 %",
        },
        {
          id: 2,
          img: require("@/assets/images/build.gif"),
          title: "الخدمات تحت الانشاء",
          number: "17",
          percent: "19 %",
        },
        {
          id: 1,
          img: require("@/assets/images/complete.gif"),
          title: "المشاريع المكتملة",
          number: "11",
          percent: "18 %",
        },
      ],
    };
  },
};
</script>

<style scoped>
.shadow {
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.05) !important;
}
.border {
  border: var(--bs-border-width) var(--bs-border-style) #dee2e65e !important;
}
.table thead th {
  color: #433472;
}
table > thead th {
  text-align: center;
  /* width: 30% !important; */
  padding: 10px;
}
table > thead tr {
  border-bottom: 1px solid rgba(189, 187, 187, 0.37);
  border-top: 1px solid rgba(189, 187, 187, 0.37);
}
table > tbody td {
  text-align: center;
  width: 30%;
  color: #433472 !important;
  padding: 15px 0;
}
table > tbody td img {
  object-fit: cover;
  /* width: 100%; */
}
.badge-pill {
  border-radius: 14px !important;
  padding: 8px 10px !important;
}
.badge-warning {
  color: #212529;
  background-color: #ffd9503b;
  color: #f0bc00;
}
.card-header {
  border-bottom: var(--bs-card-border-width) solid rgb(108 93 93 / 18%);
}
@media only screen and (min-width: 992px) {
  table > tbody td {
    padding: 15px 0;
  }
}
</style>
