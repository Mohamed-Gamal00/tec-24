<template>
  <div class="wrapper">
    <main role="main" class="main-content p-0">
      <div class="container-fluid ps-0 pe-0">
        <div class="col-md-12 p-0">
          <div class="card border-0">
            <div
              class="card-header pt-3 pb-3 border-0 bg-purple"
              style="border-radius: 0"
            >
              <strong class="card-title mb-0 text-white">إنشاء جديد </strong>
              <button class="float-right m-0 p-0 text-white">اضافة</button>
            </div>
            <div>
              <div
                class="row p-5 justify-content-center"
                style="text-align: start"
              >
                <div class="col-12 col-lg-8 col-md-8">
                  <div class="row">
                    <!-- name -->
                    <div class="row">
                      <!-- اسم المستخدم -->
                      <div class="col-md-6 col-lg-6">
                        <label
                          class="mb-1 text-purple fs-10 fw-bold"
                          for="fname"
                          >اسم المستخدم</label
                        >
                        <!-- <div class="input-group mb-2">
                          <input
                            type="text"
                            class="form-control rounded-3"
                            id="fname"
                          />
                        </div> -->
                        <div class="input-group mb-2 mr-sm-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <FontAwesome icon="user" class="fe-16" />
                            </div>
                          </div>
                          <input type="text" class="form-control" id="fname" />
                        </div>
                      </div>
                      <!-- email -->
                      <div class="col-md-6 col-lg-6">
                        <label
                          class="mb-1 text-purple fs-10 fw-bold"
                          for="email"
                          >البريد الالكتروني</label
                        >
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <FontAwesome icon="envelope" class="fe-16" />
                            </div>
                          </div>
                          <input type="email" class="form-control" id="email" />
                        </div>
                      </div>
                    </div>
                    <!-- رقم الهاتف البريد الاليكتروني -->
                    <div class="row">
                      <!-- نوع الحساب -->
                      <div class="col-md-6 col-lg-6 mb-3">
                        <label
                          class="mb-1 text-purple fs-10 fw-bold"
                          for="account"
                          >نوع الحساب</label
                        >
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <FontAwesome icon="check" class="fe-16" />
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="account"
                          />
                        </div>
                      </div>
                      <!-- المستوي-->
                      <div class="col-md-6 col-lg-6">
                        <label
                          class="mb-1 text-purple fs-10 fw-bold"
                          for="level"
                          >المستوي</label
                        >
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <FontAwesome icon="tag" class="fe-16" />
                            </div>
                          </div>
                          <input type="text" class="form-control" id="level" />
                        </div>
                      </div>
                      <!-- البلد -->
                      <div class="col-md-6 col-lg-6 mb-3">
                        <label
                          class="mb-1 text-purple fs-10 fw-bold"
                          for="country"
                          >الدولة</label
                        >
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <FontAwesome icon="globe" class="fe-16" />
                            </div>
                          </div>
                          <select
                            class="form-select fs-10 rounded-0"
                            aria-label="Default select example"
                            id="country"
                          >
                            <option selected>المملكة العربية السعودية</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <!-- password -->
                      <div class="col-md-6 col-lg-6 mb-3">
                        <label
                          class="mb-1 text-purple fs-10 fw-bold"
                          for="password"
                          >كلمة السر</label
                        >
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <FontAwesome icon="lock" class="fe-16" />
                            </div>
                          </div>
                          <input
                            type="password"
                            class="form-control"
                            id="password"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row"></div>
                    <!-- الاسم كامل و العنوان -->
                    <div class="row">
                      <!-- fullname -->
                      <div class="col-md-6 col-lg-6">
                        <label
                          class="mb-1 text-purple fs-10 fw-bold"
                          for="fullname"
                          >الاسم الكامل</label
                        >
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <FontAwesome icon="user" class="fe-16" />
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="fullname"
                          />
                        </div>
                      </div>
                      <!-- العنوان-->
                      <div class="col-md-6 col-lg-6">
                        <label
                          class="mb-1 text-purple fs-10 fw-bold"
                          for="address"
                          >العنوان</label
                        >
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <FontAwesome icon="location-dot" class="fe-16" />
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="address"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- الوصف -->
                    <div class="row">
                      <!-- description -->
                      <div class="col-md-12 col-lg-12">
                        <div class="form-group">
                          <label
                            for="description"
                            class="mb-1 text-purple fs-10 fw-bold"
                            >الوصف</label
                          >
                          <textarea
                            class="form-control"
                            id="description"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <!-- الحالة والرصيد المتوفر -->
                    <div class="row">
                      <!-- الحالة -->
                      <div class="col-md-6 col-lg-6">
                        <label
                          class="mb-1 text-purple fs-10 fw-bold"
                          for="state"
                          >الحالة</label
                        >
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <FontAwesome icon="arrows-rotate" class="fe-16" />
                            </div>
                          </div>
                          <input type="text" class="form-control" id="state" />
                        </div>
                      </div>
                      <!-- الرصيد المتوفر-->
                      <div class="col-md-6 col-lg-6">
                        <label
                          class="mb-1 text-purple fs-10 fw-bold"
                          for="balance"
                          >الرصيد المتوفر</label
                        >
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <FontAwesome
                                icon="money-check-dollar"
                                class="fe-16"
                              />
                            </div>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            id="balance"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- image -->
                    <div class="row">
                      <div class="col-md-6 col-lg-12">
                        <div class="form-group mb-3">
                          <label
                            for="customFile"
                            class="mb-1 text-purple fs-10 fw-bold"
                            >اضافة صورة رمزية</label
                          >
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              id="customFile"
                            />
                            <label
                              class="custom-file-label"
                              for="customFile"
                            ></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- حفظ التعديلات -->
                    <div class="d-flex justify-content-end">
                      <div class="col-md-4 justify-content-start">
                        <div class="text-center mt-lg-2">
                          <button
                            class="btn text-white fs-10"
                            :to="{ name: 'login' }"
                          >
                            الغاء
                          </button>
                          <button
                            class="btn text-white fs-10 me-2"
                            :to="{ name: 'login' }"
                          >
                            إانشاء جديد
                          </button>
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
</template>

<script>
export default {
  name: "AdduserCom",
};
</script>

<style scoped>
div .fe-16 {
  color: #433472;
}
</style>
