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
                  <strong class="card-title mb-0 text-white">اضافة قسم </strong>
                </div>
                <button class="btn float-right click">
                  <strong class="float-right m-0 p-0">اضافة</strong>
                </button>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-10">
                  <div class="card mb-4">
                    <div class="card-header">
                      <strong class="card-title">Form row</strong>
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input
                              type="email"
                              class="form-control"
                              id="inputEmail5"
                            />
                          </div>
                          <div class="form-group col-md-6">
                            <label for="inputPassword4">Password</label>
                            <input
                              type="password"
                              class="form-control"
                              id="inputPassword5"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="inputAddress">Address</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress5"
                            placeholder="1234 Main St"
                          />
                        </div>
                        <div class="form-group">
                          <label for="inputAddress2">Address 2</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputAddress6"
                            placeholder="Apartment, studio, or floor"
                          />
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputCity5"
                            />
                          </div>
                          <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState5" class="form-control">
                              <option selected>Choose...</option>
                              <option>...</option>
                            </select>
                          </div>
                          <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input
                              type="text"
                              class="form-control"
                              id="inputZip5"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="gridCheck5"
                            />
                            <label class="form-check-label" for="gridCheck5">
                              Check me out
                            </label>
                          </div>
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Sign in
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
