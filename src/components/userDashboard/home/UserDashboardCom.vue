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
                                <th>الصورة</th>
                                <th>الخدمة</th>
                                <th>السعر</th>
                                <th>المدة</th>
                                <th>الحالة</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="order in orders" :key="order.id">
                                <!-- id -->
                                <td style="width: 15%">3224</td>
                                <!-- الصورة -->
                                <td style="width: 10%">
                                  <div>
                                    <span class="">
                                      <img
                                        src="@/assets/images/webtest.webp"
                                        alt="img"
                                        class="rounded"
                                        width="60"
                                        height="60"
                                      />
                                    </span>
                                  </div>
                                </td>
                                <!-- الخدمة -->
                                <td class="ps-0 pe-0" style="width: 50%">
                                  <div class="maxwidth">
                                    <div class="m-0" style="width: 185px">
                                      <strong
                                        class="text-purple small cairo fw-bold"
                                      >
                                        تصميم صفحة ويب
                                      </strong>
                                      <p class="fs-10 text-muted">
                                        هو ببساطة نص شكلي (بمعنى أن الغاية هي
                                        الشكل وليس المحتوى)
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <!-- السعر -->
                                <td style="width: 40%">
                                  <div class="fs-10 fw-bold maxwidth-lg">
                                    155$
                                  </div>
                                </td>
                                <!-- المدة -->
                                <td>
                                  <div
                                    class="fs-10 fw-bold maxwidth-lg"
                                    style="width: 120px"
                                  >
                                    13 ساعة
                                  </div>
                                </td>
                                <!-- الحالة -->
                                <td>
                                  <div class="maxwidth-lg">
                                    <span
                                      v-if="order.state == 'continuee'"
                                      class="badge badge-pill badge-warning"
                                    >
                                      تحت الانشاء</span
                                    >
                                    <span
                                      v-if="order.state == 'done'"
                                      class="badge badge-pill badge-success"
                                      >تم</span
                                    >
                                    <span
                                      v-if="order.state == 'refused'"
                                      class="badge badge-pill badge-danger"
                                      >ملغي</span
                                    >
                                  </div>
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
                                        width="45"
                                        height="45"
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
                        </div>
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
      orders: [
        { id: 1, state: "done" },
        { id: 2, state: "continuee" },
        { id: 3, state: "refused" },
        { id: 4, state: "done" },
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
/* table */
table > thead tr {
  border-bottom: 1px solid rgba(189, 187, 187, 0.37);
  border-top: 1px solid rgba(189, 187, 187, 0.37);
}
table > thead th {
  color: #433472;
  text-align: start;
  padding: 10px;
}
table > tbody td {
  text-align: start;
  /* width: 30%; */
  color: #433472 !important;
  padding: 15px 10px;
}
table > tbody td img {
  object-fit: cover;
}
.badge-pill {
  border-radius: 14px !important;
  padding: 8px 10px !important;
  width: 85px;
}
.badge-warning {
  background-color: #ffd9503b;
  color: #f0bc00;
}
.badge-success {
  background-color: #24856538;
  color: #248565;
}
.badge-danger {
  background-color: #dc354634;
  color: #dc3545;
}

@media only screen and (min-width: 992px) {
  table tbody td .maxwidth-lg {
    width: 75px !important;
  }
}
@media only screen and (max-width: 600px) {
  table tbody td .maxwidth {
    width: 190px !important;
  }
  table tbody td img {
    object-fit: cover;
    width: 50px;
    height: 50px;
  }
  table > thead th {
    text-align: center;
  }
  table > tbody td {
    text-align: center;
  }
}
</style>
