<template>
  <div>
    <div class="wrapper">
      <main role="main" class="main-content">
        <div class="container-fluid">
          <HeaderCom />
          <div class="row justify-content-center">
            <div class="col-12">
              <h2 class="h5 page-titl text-dark">orders compnent</h2>
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
  components: { HeaderCom },
  name: "UserhomeCom",
};
</script>

<style lang="scss" scoped></style>
