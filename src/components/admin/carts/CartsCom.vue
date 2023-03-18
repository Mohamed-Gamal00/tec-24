<template>
  <div>
    <div class="wrapper">
      <main role="main" class="main-content p-0">
        <div class="container-fluid ps-0 pe-0">
          <div class="col-md-12 p-0">
            <div class="card border-0">
              <div
                class="card-header pt-3 pb-3 border-0 bg-purple"
                style="border-radius: 0"
              >
                <strong class="card-title mb-0 text-white">العربات </strong>
                <!-- <strong class="float-right m-0 p-0 text-white">اضافة</strong> -->
              </div>
              <div class="card-body pt-3 pb-3 ps-0 pe-0">
                <div class="list-group list-group-flush my-n3 p-0">
                  <div class="list-group-item">
                    <div class="row card-body pb-1">
                      <table
                        class="table admin table-borderless tbody table-striped"
                      >
                        <thead>
                          <tr>
                            <th scope="col">العربة</th>
                            <th scope="col">السعر</th>
                            <th scope="col">الزيارات</th>
                            <th scope="col">المبيعات</th>
                            <th scope="col">قاعة الانتظار</th>
                            <th scope="col">التقييم</th>
                            <th scope="col">انشئت منذ</th>
                            <th scope="col">الحالة</th>
                            <th scope="col">الخيارات</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="user in 15" :key="user.id">
                            <!-- الملف -->
                            <td>
                              <div class="fw-bold fs-10 phone td1">
                                <span class="m-3 d-block"
                                  >تسميات توضيحية جذابة على وسائل التواصل
                                  الاجتماعي</span
                                >
                              </div>
                            </td>

                            <td>
                              <div class="fw-bold fs-10 phone">
                                <span class="m-3 d-block">$300</span>
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10 phone">
                                <span class="m-3 text-success d-block">1</span>
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10 phone">
                                <span class="m-3 text-success d-block">3</span>
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10 phone">
                                <span class="m-3 text-success d-block">4</span>
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10 phone">
                                <span class="m-3 text-success d-block">5</span>
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10 phone">
                                <span class="m-3 text-success d-block"
                                  >منذ اسبوع</span
                                >
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10 phone">
                                <span class="m-3 text-success d-block"
                                  >نشط</span
                                >
                              </div>
                            </td>
                            <!-- الخيارات -->
                            <td class="lasttd">
                              <div class="fw-bold fs-10 phone lasttd">
                                <button class="btn">
                                  <FontAwesome
                                    icon="trash"
                                    class="fe-16 text-white"
                                  />
                                </button>
                                <button class="btn me-2">
                                  <FontAwesome
                                    icon="pen-to-square"
                                    class="fe-16 text-white"
                                  />
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
export default {
  name: "CartsCom",
  data() {
    return {};
  },
};
</script>

<style scoped>
table > tbody td .td1 {
  width: 182px;
}
table .lasttd {
  width: 100px !important;
}
@media only screen and (max-width: 600px) {
  table > tbody td .phone {
    width: 150px;
  }
  table > tbody td .td1 {
    width: 182px;
  }
}
.btn {
  transition: all 0.3s ease-in-out;
}
.btn:hover .fe-16 {
  font-size: 14px;
}
</style>
