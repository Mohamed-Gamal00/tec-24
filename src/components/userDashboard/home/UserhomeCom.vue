<template>
  <div>
    <div class="wrapper">
      <main role="main" class="main-content p-0">
        <div class="container-fluid">
          <!-- dash -->
          <HeaderCom />
          <div class="row justify-content-center">
            <div class="col-12">
              <!-- <h2>Section title</h2> -->
              <h2 class="h5 page-title">Infod Widgets</h2>
              <p class="text-muted">
                This primitive is meant to make it easy to display both
                user-centric or activity-centric actions in your app. Sometimes
                it makes sense to even blend both in a single timeline, which
                works perfectly.
              </p>
              <div class="row">
                <div class="col-md-6 col-xl-3 mb-4">
                  <div class="card shadow bg-primary text-white">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col-3 text-center">
                          <span class="circle circle-sm bg-primary-light">
                            <i
                              class="fe fe-16 fe-shopping-bag text-white mb-0"
                            ></i>
                          </span>
                        </div>
                        <div class="col pr-0">
                          <p class="small text-light mb-0">Monthly Sales</p>
                          <span class="h3 mb-0 text-white">$1250</span>
                          <span class="small text-muted">+5.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-3 mb-4">
                  <div class="card shadow">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col-3 text-center">
                          <span class="circle circle-sm bg-primary">
                            <i
                              class="fe fe-16 fe-shopping-cart text-white mb-0"
                            ></i>
                          </span>
                        </div>
                        <div class="col pr-0">
                          <p class="small text-muted mb-0">Orders</p>
                          <span class="h3 mb-0">1,869</span>
                          <span class="small text-success">+16.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-3 mb-4">
                  <div class="card shadow">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col-3 text-center">
                          <span class="circle circle-sm bg-primary">
                            <i class="fe fe-16 fe-filter text-white mb-0"></i>
                          </span>
                        </div>
                        <div class="col">
                          <p class="small text-muted mb-0">Conversion</p>
                          <div class="row align-items-center no-gutters">
                            <div class="col-auto">
                              <span class="h3 mr-2 mb-0"> 86.6% </span>
                            </div>
                            <div class="col-md-12 col-lg">
                              <div
                                class="progress progress-sm mt-2"
                                style="height: 3px"
                              >
                                <div
                                  class="progress-bar bg-success"
                                  role="progressbar"
                                  style="width: 87%"
                                  aria-valuenow="87"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-3 mb-4">
                  <div class="card shadow">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col-3 text-center">
                          <span class="circle circle-sm bg-primary">
                            <i class="fe fe-16 fe-activity text-white mb-0"></i>
                          </span>
                        </div>
                        <div class="col">
                          <p class="small text-muted mb-0">AVG Orders</p>
                          <span class="h3 mb-0">$80</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end section -->
            </div>
          </div>
          <!-- .row -->
        </div>
        <!-- .container-fluid -->
      </main>
      <!-- main -->
    </div>
    <!-- .wrapper -->
  </div>
</template>

<script>
import HeaderCom from "../nav/HeaderCom.vue";
export default {
  components: { HeaderCom },
  name: "UserhomeCom",
};
</script>

<style lang="scss" scoped></style>
