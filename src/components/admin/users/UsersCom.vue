<template>
  <div>
    <div class="wrapper">
      <main role="main" class="main-content p-0">
        <div class="container-fluid">
          <div class="col-md-12 p-0">
            <div class="card border-0">
              <div class="card-header border-0 bg-purple">
                <strong class="card-title mb-0 text-white">المستخدمون </strong>
                <strong class="float-right m-0 p-0 text-white">اضافة</strong>
              </div>
              <div class="card-body pt-3 pb-3 ps-0 pe-0">
                <div class="list-group list-group-flush my-n3 p-0">
                  <div class="list-group-item">
                    <div class="row card-body my-1 pb-1">
                      <table class="table table-borderless tbody table-striped">
                        <thead>
                          <tr>
                            <th scope="col">المستخدم</th>
                            <th scope="col">نوع الحساب</th>
                            <th scope="col">المكاسب</th>
                            <th scope="col">تاريخ التسجيل</th>
                            <th scope="col">الحالة</th>
                            <th scope="col">الخيارات</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="user in 15" :key="user.id">
                            <td>
                              <div class="fw-bold fs-10">
                                <span class="m-3">mohamed gamal</span>
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10">
                                <span class="m-3 text-success">مشتري</span>
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10">
                                <span class="m-3 text-danger">$300</span>
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10">
                                <span class="m-3">منذ ساعة</span>
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10">
                                <span class="m-3 text-success">نشط</span>
                              </div>
                            </td>
                            <td>
                              <div class="fw-bold fs-10">
                                <span class="m-3">حذف | تعديل</span>
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
  name: "DashboardCom",
  data() {
    return {};
  },
};
</script>

<style scoped>
.table thead th,
td {
  color: #322a7d;
  text-align: center;
}
@media only screen and (max-width: 600px) {
  .button_number {
    margin-bottom: 21px;
    fs-10-size: 10px;
    width: 120px;
  }
  .button_number .fs-10Awesome {
    fs-10-size: 10px;
  }
  .fs-10 {
    width: 164px;
  }
}
</style>
