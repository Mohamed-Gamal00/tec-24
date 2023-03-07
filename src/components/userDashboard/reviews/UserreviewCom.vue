<template>
  <div>
    <div class="wrapper">
      <main role="main" class="main-content p-0">
        <div class="container-fluid vh-100" style="overflow: scroll">
          <HeaderCom />

          <div class="row justify-content-center">
            <div class="col-12">
              <div class="row">
                <table
                  width="100%"
                  class="table table-responsive table-sm table-hover table-borderless"
                >
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>الخدمة</th>
                      <th>التعليق</th>
                      <th class="text-lg-center">تقييم</th>
                      <th>المدة</th>
                      <th>الحالة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="order in 10" :key="order.id">
                      <!-- id -->
                      <td style="width: 7%">3224</td>
                      <!-- الخدمة -->
                      <td style="width: 30%">
                        <div class="row">
                          <div class="col-4 ps-0 text-center">
                            <img
                              src="@/assets/images/webtest.webp"
                              alt=""
                              class="rounded"
                              width="50"
                              height="50"
                            />
                          </div>
                          <div class="col-8 pe-0">
                            <p class="my-0 text-purple small fw-bold cairo">
                              تصميم صفحة ويب
                            </p>
                            <p class="my-0">$155</p>
                          </div>
                        </div>
                      </td>
                      <!-- التعليق -->
                      <td style="width: 20%">
                        <strong
                          class="text-purple fs-10 text-muted cairo fw-bold"
                        >
                          احسنت في العمل ، الموقع رائع جدأ!
                        </strong>
                      </td>
                      <!-- التقييم -->
                      <td style="width: 20%" class="text-lg-center">
                        <span class="bg-gold">&starf;</span>
                        <span class="bg-gold">&starf;</span>
                        <span class="bg-gold">&starf;</span>
                        <span class="bg-gold">&starf;</span>
                        <span class="bg-gold">&starf;</span>
                      </td>
                      <!-- المدة -->
                      <td style="width: 20%">13 ساعة</td>
                      <!-- الحالة -->
                      <td>
                        <div class="dropdown badge badge-pill">
                          <button
                            class="btn btn-secondary fs-10 border-0 dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            خيارات
                          </button>
                          <ul
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <a class="dropdown-item" href="#">حذف</a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#">تعديل</a>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  name: "UserreviewCom",
  components: { HeaderCom },
};
</script>

<style scoped>
.table thead th {
  color: #433472;
  padding: 10px;
}
table > tbody td {
  padding: 20px 0;
}
table > thead tr {
  border-bottom: 1px solid rgba(189, 187, 187, 0.37);
  border-top: 1px solid rgba(189, 187, 187, 0.37);
}

table > tbody td img {
  object-fit: cover;
}

@media only screen and (max-width: 600px) {
  table > tbody td div p {
    display: none;
  }
  img {
    object-fit: cover;
    max-width: 50px !important;
    max-height: 50px !important;
  }
}
/* reviews */
.bg-gold {
  color: gold;
}
</style>
