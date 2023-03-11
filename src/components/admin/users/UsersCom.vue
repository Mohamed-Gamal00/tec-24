<template>
  <div>
    <div class="wrapper">
      <main role="main" class="main-content">
        <div class="container-fluid">
          <div class="col-md-12">
            <div class="card border">
              <div class="card-header border-0 bg-purple">
                <strong class="card-title mb-0 text-white"
                  >المستخمين الجدد</strong
                >
                <p class="small m-0 p-0 text-white">احدث المستخدمين</p>
              </div>
              <div class="card-body pt-3 pb-3 ps-0 pe-0">
                <div class="list-group list-group-flush my-n3 p-0">
                  <div class="list-group-item">
                    <div class="row card-body my-1 pb-1">
                      <table class="table">
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
                          <tr v-for="user in 10" :key="user.id">
                            <td style="width: 200px">mohamed gamal</td>
                            <td>مشتري</td>
                            <td>$500</td>
                            <td>منذ ساعة</td>
                            <td>نشط</td>
                            <td>حذف | تعديل</td>
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
@media only screen and (min-width: 600px) {
  table tr td {
    width: 200px;
  }
}
</style>
