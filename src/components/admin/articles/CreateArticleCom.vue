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
                <strong class="card-title mb-0 text-white">انشاء مقالة </strong>
                <!-- <strong class="float-right m-0 p-0 text-white">اضافة</strong> -->
              </div>
              <div class="card-body pt-3 pb-3 ps-0 pe-0">
                <div class="list-group list-group-flush my-n3 p-0">
                  <div class="list-group-item">
                    <div class="row card-body my-1 pb-1" style="direction: ltr">
                      <form class="p-0">
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label"
                            >العنوان</label
                          >
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                      </form>
                      <label for="exampleInputEmail1" class="form-label"
                        >المحتوي</label
                      >
                      <QuillEditor theme="snow" toolbar="full" />
                      <div class="p-0 my-3">
                        <label for="formFile" class="form-label">الصورة</label>
                        <input class="form-control" type="file" id="formFile" />
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
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
export default {
  components: {
    QuillEditor,
  },
  name: "ArticlesCom",
  data() {
    return {};
  },
};
</script>

<style scoped>
button {
  background-color: transparent !important;
}
.btn {
  transition: all 0.3s ease-in-out;
}
.btn:hover .fe-16 {
  font-size: 14px;
}
</style>
