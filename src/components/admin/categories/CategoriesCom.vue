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
                <div class="btn float-left">
                  <strong class="card-title mb-0 text-white">الاقسام </strong>
                </div>
                <router-link :to="{ name: 'addcat' }">
                  <button class="btn float-right click">
                    <strong class="float-right m-0 p-0">اضافة</strong>
                  </button>
                </router-link>
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
                            <th scope="col">القسم</th>
                            <th scope="col">صور وسائل التواصل الاجتماعي</th>
                            <th scope="col">الرؤية</th>
                            <th scope="col">الخيارات</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="user in 15" :key="user.id">
                            <!-- القسم -->
                            <td>
                              <div class="fw-bold fs-10 phone">
                                <span class="m-3 d-block my-1">البيانات</span>
                                <span class="m-3 d-block my-1"
                                  >العثور على افضل خدمات البيانات</span
                                >
                              </div>
                            </td>
                            <td style="width: 10%">
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
                                <span class="m-3 d-block my-1 text-success"
                                  >مرئي</span
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
  name: "FoldersCom",
  data() {
    return {};
  },
};
</script>

<style scoped>
.table th {
  text-align: center;
}
.table td {
  text-align: center;
  width: 21% !important;
}
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
.click {
  transition: all 0.3s ease-in-out;
  color: white;
}
.click:hover {
  background-color: white !important;
  color: darkslateblue !important;
}
</style>
