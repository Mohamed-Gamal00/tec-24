<template>
  <div>
    <div class="wrapper">
      <main role="main" class="main-content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3 p-2" v-for="card in cards" :key="card.id">
              <div class="card shadow border">
                <div class="card-body pt-1" style="max-height: 105px">
                  <div class="row align-items-center">
                    <div class="col">
                      <small class="text-purple mb-1 fw-bold900">{{
                        card.title
                      }}</small>
                      <p class="small text-purple fw-bold fs-10 my-lg-2">
                        <span>{{ card.desc }}</span>
                      </p>
                      <strong class="card-title mb-0 fw-bold900">{{
                        card.number
                      }}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <!-- المستخدمين الجدد -->
            <div class="col-md-6">
              <div class="card border shadow">
                <div class="card-header border-0 bg-purple">
                  <strong class="card-title mb-0 text-white"
                    >المستخمين الجدد</strong
                  >
                  <p class="small m-0 p-0 text-white">احدث المستخدمين</p>
                </div>
                <div class="card-body pt-3 pb-2 ps-0 pe-0">
                  <div class="list-group list-group-flush my-n3 p-0">
                    <div class="list-group-item">
                      <div
                        class="row card-body my-1 pb-1 border shadow"
                        v-for="user in 5"
                        :key="user.id"
                      >
                        <div class="col">
                          <strong class="text-purple fs-14"
                            >mohamed gamal</strong
                          >
                          <div class="my-0 text-muted small">
                            <small class="badge badge-light text-muted"
                              >منذ 5 أيام</small
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- الخريطة -->
            <div class="col-md-6">
              <div class="card shadow border">
                <div class="card-header border-0 bg-purple text-white">
                  <strong class="card-title mb-0">خريطة الزوار</strong>
                  <p class="small m-0 p-0">احدث الزيارات الي موقعك</p>
                </div>
                <div class="card-body pt-0 p-0">
                  <div class="list-group list-group-flush p-0">
                    <div class="list-group-item">
                      <div class="row align-items-center">
                        <!-- <GoogleMap
                          api-key=""
                          style="width: 100%; height: 300px; padding: 0"
                          :center="center"
                          :zoom="15"
                        >
                          <Marker :options="{ position: center }" />
                        </GoogleMap> -->
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
// import { GoogleMap, Marker } from "vue3-google-map";

export default {
  name: "DashboardCom",
  // components: { GoogleMap, Marker },
  // setup() {
  //   const center = { lat: 40.689247, lng: -74.044502 };

  //   return { center };
  // },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "صافي الدخل",
          desc: "صافي الدخل شامل الطلبات المعلقة",
          number: "$12.500",
        },
        {
          id: 2,
          title: "الضرائب",
          desc: " الدخل من الضرائب",
          number: "$2.500",
        },
        {
          id: 3,
          title: " العمولات",
          desc: "الدخل من العمولات",
          number: "$1500",
        },
        {
          id: 4,
          title: "سحب الموال",
          desc: "وافق علي سحب الاموال",
          number: "$400",
        },
        {
          id: 5,
          title: "اجمالي المبيعات",
          desc: "عمليات البيع الناجحة",
          number: "88",
        },
        {
          id: 6,
          title: "مجموع العربات",
          desc: "كل العربات شاملة المعلقة",
          number: "47",
        },
        {
          id: 7,
          title: "اجمالي المستخدمين",
          desc: "كل المستخدمين شاملة المعلقين",
          number: "35",
        },
        {
          id: 8,
          title: "اجمالي الرسائل",
          desc: "جميع الرسائل بين المستخدمين",
          number: "55",
        },
      ],
    };
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
  background-color: antiquewhite !important;
}
.border {
  /* background-color: #f5f5f567; */
  border: 1px solid rgba(184, 183, 183, 0.199) !important;
}
.shadow {
  box-shadow: 0 0rem 1rem rgba(70, 70, 70, 0.034) !important;
}
</style>
