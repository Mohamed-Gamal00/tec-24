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
                <strong class="card-title mb-0 text-white"
                  >سجل الانساحابات
                </strong>
                <!-- <strong class="float-right m-0 p-0 text-white">اضافة</strong> -->
              </div>
              <div class="card-body pt-3 pb-3 ps-0 pe-0">
                <div class="list-group list-group-flush my-n3 p-0">
                  <div class="list-group-item">
                    <div class="row card-body my-1 pb-1">
                      <table
                        class="table admin table-borderless tbody table-striped"
                      >
                        <thead>
                          <tr>
                            <th scope="col" class="text-center">الصورة</th>
                            <th scope="col">المستخدم</th>
                            <th scope="col">الي</th>
                            <th scope="col">الكمية</th>
                            <th scope="col">الحالة</th>
                            <th scope="col">الخيارات</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="user in 15" :key="user.id">
                            <td style="width: 10%" class="text-center">
                              <div>
                                <span class="">
                                  <img
                                    src="@/assets/images/hassan.jpg"
                                    alt="img"
                                    class="rounded"
                                    width="50"
                                    height="50"
                                  />
                                </span>
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10 phone">
                                <span class="m-3 d-block my-1"
                                  >mohamed gamal</span
                                >
                                <span class="m-3 d-block my-1"
                                  >mg232416@gmail.com</span
                                >
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10 phone">
                                <span class="m-3 d-block my-1"
                                  >mg232416@gmail.com</span
                                >
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10 phone">
                                <span class="m-3 text-success d-block my-1"
                                  >$300</span
                                >
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10 phone">
                                <span class="m-3 text-success d-block my-1"
                                  >معلقة</span
                                >
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10 phone">
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
  name: "MoneyCom",
  data() {
    return {};
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  table > tbody td .phone {
    width: 150px;
  }
}
.btn {
  transition: all 0.3s ease-in-out;
}
.btn:hover .fe-16 {
  font-size: 14px;
}
</style>
