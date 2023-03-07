<template>
  <div class="login">
    <div class="container-fluid w-auto vh-100 bg-light">
      <div class="row vh-100">
        <!-- col-8 img -->
        <div class="col-lg-8 containerr bg-black m-0 p-0">
          <div class="containerr">
            <img
              src="@/assets/images/bg-image.webp "
              class="vh-100"
              alt="Nature"
              style="width: 100%"
            />
            <div class="text-block cairo">
              <div class="row justify-content-center">
                <div class="col-md-11">
                  <p>
                    منصة الكترونية خليجية تعمل على تقديم الخدمات الالكترونية
                    المتنوعه للافراد واصحاب الاعمال والمشاريع الناشئة لتنفيذ
                    اعمالهم التقنية خلال فترة 24 ساعة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- col-4 form-->
        <div class="col-lg-4 m-0 p-0 align-self-center">
          <div class="row p-0 m-auto justify-content-center">
            <div class="col-md-10">
              <div class="mb-5">
                <h1 class="text-purple fw-bold900">مرحبا بك في منصة 24</h1>
                <p class="text-purple">
                  منصة الكترونية خليجية تعمل على تقديم الخدمات الالكترونية
                  المتنوعهللافراد واصحاب الاعمال والمشاريع الناشئة لتنفيذ
                  اعمالهم التقنية خلال فترة 24 ساعة
                </p>
              </div>
              <form class="form-inline" style="direction: rtl !important">
                <div class="row justify-content-center">
                  <div class="col-md-10 mt-lg-4 mb-lg-4">
                    <div class="row">
                      <!-- name -->
                      <!-- الاسم الاول -->
                      <div class="col-md-12 mb-3">
                        <label class="mb-1 text-purple" for="fname"
                          >الاسم الاول</label
                        >
                        <div class="input-group mb-2 mr-sm-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <FontAwesome icon="user" class="fe-16" />
                            </div>
                          </div>
                          <input type="text" class="form-control" id="fname" />
                        </div>
                      </div>
                      <!-- password -->
                      <!-- كلمة المرور -->
                      <div class="col-md-12 mb-3">
                        <label class="mb-1 text-purple" for="password"
                          >كلمة المرور</label
                        >
                        <div class="input-group mb-2 mr-sm-2">
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
                      <!-- انشاء حساب -->
                      <div class="d-flex justify-content-end">
                        <div
                          class="col-md-12 justify-content-center text-center"
                        >
                          <button style="width: 100%" class="btn text-white">
                            تسجيل دخول
                          </button>
                          <router-link
                            class="btn bg-white border-0 text-purple mt-2 mt-lg-3 fs-14 fw-bold cairo"
                            :to="{ name: 'register' }"
                          >
                            إنشاء حساب
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginCom",
};
</script>

<style scoped>
.login {
  direction: rtl;
  overflow: hidden;
}
/*col-5 bg-img text */
.containerr {
  position: relative;
  font-family: Arial;
}
.containerr img {
  object-fit: cover;
  opacity: 40%;
}
.text-block {
  position: absolute;
  bottom: 60px;
  /* background-color: black; */
  color: white;
  padding-left: 20px;
  padding-right: 20px;
}
/* col-8 input forms */
@media only screen and (max-width: 600px) {
  .containerr {
    display: none;
  }
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* icon */
.input-group-text {
  display: flex;
  align-items: center;
  padding: 0rem 0.75rem;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #433472;
  text-align: center;
  white-space: nowrap;
  background-color: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 0rem;
  border-bottom-right-radius: 7px !important;
  border-top-right-radius: 7px !important;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
