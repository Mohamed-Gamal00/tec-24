<template>
  <div>
    <div class="wrapper">
      <main role="main" class="main-content p-0">
        <div class="container-fluid ps-0 pe-0">
          <div class="col-md-12 p-0">
            <div class="card border-0">
              <div
                class="card-header pt-3 pb-3 mb-lg-3 border-0 bg-purple"
                style="border-radius: 0"
              >
                <div class="btn float-left">
                  <strong class="card-title mb-0 text-white">اضافة قسم </strong>
                </div>
                <button class="btn float-right click">
                  <strong class="float-right m-0 p-0">اضافة</strong>
                </button>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-10">
                  <div class="card shadows border-0 pt-3">
                    <div class="card-body">
                      <span>
                        <p class="text-purple mb-5 mt-lg-2">
                          <strong>أضف قسم جديد</strong>
                        </p>
                      </span>

                      <form>
                        <div class="form-row">
                          <div class="form-group col-md-12">
                            <label for="text">اسم القسم</label>
                            <input type="text" class="form-control" id="text" />
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="exampleFormControlTextarea1">الوصف</label>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                          ></textarea>
                        </div>
                        <!-- مرئي / غير مرئي -->
                        <div
                          class="form-row mr-5 my-4"
                          style="position: relative; right: 17px"
                        >
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios1"
                              value="option1"
                              checked
                            />
                            <label
                              class="form-check-label p-0"
                              for="exampleRadios1"
                            >
                              مرئي
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios2"
                              value="option2"
                            />
                            <label
                              class="form-check-label p-0"
                              for="exampleRadios2"
                            >
                              غير مرئي
                            </label>
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
                        <button type="submit" class="btn text-white">
                          أضف
                        </button>
                      </form>
                    </div>
                    <!-- /. card-body -->
                  </div>
                  <!-- /. card -->
                </div>
                <!-- /. col -->
              </div>
              <!-- /. end-section -->
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddcatCom",
  data() {
    return {};
  },
};
</script>

<style scoped>
.shadows {
  box-shadow: 0 0rem -1rem rgba(0, 0, 0, 0.15) !important;
}
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
