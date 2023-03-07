<template>
  <NavebarCom />
  <div class="container-fluid bg-light p-0">
    <div class="row justify-content-center mt-lg-5">
      <div class="row">
        <div class="col-md-12 col-lg-8 bg-light pt-lg-3 mb-lg-3">
          <!-- slider -->
          <div class="bg-white ps-lg-4 pe-lg-4 pt-lg-4">
            <SliderCom />
          </div>
          <!-- text -->
          <div class="bg-white ps-lg-4 pe-lg-4 p-2">
            <div class="row mt-lg-3">
              <span class="fw-bold text-purple cairo fs-4">تصميم صفحة ويب</span>
            </div>
            <!-- التفاصيل -->
            <div class="row mt-lg-3" style="width: 90%">
              <strong class="fw-bold fs-5">التفاصيل</strong>
              <p class="text-gray fs-14 fw-bold">
                من خلال هذه الخدمة تستطيع الحصول على باكلينك قوى ومفيد من موقع
                قوى ومحترم فى محر سأقوم بنشر مقال ترويجى لموقعك او تطبيقك او
                قناتك او متجرك الاليكترونى مع ضمان اسبوع لبق-
              </p>
            </div>
            <!-- شروط الخدمة -->
            <div class="row mt-lg-3" style="width: 90%">
              <strong class="fw-bold fs-5">شروط الخدمة</strong>
              <p class="text-gray fs-14 fw-bold">
                https://sanews.pythonanywhere.com شروط الخدمة -انت من تقوم
                بارسال المقال المراد نشره اذا اردت ان اكتب لك المقال (راجع
                التطويرات)
              </p>
            </div>
            <!-- ملحوظة -->
            <div class="row mt-lg-3" style="width: 90%">
              <strong class="fw-bold fs-5">ملحوظة</strong>
              <p class="text-gray fs-14 fw-bold">
                لا نقبل المواقع التي تروج للاباحية و الغناء و كل ما يسيء بالاداب
                أو له علاقة بالمحرمات، أو تنتهك القوانين . - لايمكن تغيير الكلمة
                الدلالية بعد تنفيذ الطلب وعرض الاعلان على الموقع
              </p>
            </div>
          </div>
          <!-- تطويرات متوفرة لهذه الخدمة -->
          <div class="card-body mt-lg-3 bg-white mb-lg-3">
            <div class="list-group list-group-flush my-n3">
              <div class="list-group-item ps-lg-4 pe-lg-4">
                <div class="row">
                  <div class="card-body p-sm-2">
                    <!-- 1 check-box -->
                    <p class="mb-2 fw-bold p-2">تطويرات متوفرة لهذه الاخدمة</p>
                    <div class="custom-control custom-checkbox text-gray">
                      <input
                        class="form-check-input m-1"
                        type="checkbox"
                        value="1"
                        id="customCheck1"
                      />
                      <label
                        class="form-check-label fw-bold fs-14"
                        for="flexCheckDefault"
                        >سأقوم بكتابة المقال 500 كلمة بدلا منك مقابل 5.00$
                        إضافية على سعر الخدمة. سيزيد مدة التنفيذ يوم
                        إضافي.</label
                      >
                      <span class="float-start text-purple">$5</span>
                    </div>
                    <!-- 2 check-box -->
                    <div
                      class="custom-control mt-lg-3 mt-sm-2 custom-checkbox text-gray"
                    >
                      <input
                        class="form-check-input m-1"
                        type="checkbox"
                        value="1"
                        id="customCheck1"
                      />
                      <label
                        class="form-check-label fw-bold fs-14"
                        for="flexCheckDefault"
                        >سأقوم بكتابة المقال 500 كلمة بدلا منك مقابل 5.00$
                        إضافية على سعر الخدمة. سيزيد مدة التنفيذ يوم
                        إضافي.</label
                      >
                      <span class="float-start text-purple">$5</span>
                    </div>
                  </div>
                  <!-- / .card-body -->
                </div>
              </div>
            </div>
          </div>
          <!-- تطويرات متوفرة لهذه الخدمة -->
          <div class="card-body mt-lg-3 bg-white mb-lg-3">
            <div class="list-group list-group-flush my-n3">
              <div class="list-group-item ps-lg-4 pe-lg-4">
                <div class="row">
                  <div class="card-body">
                    <!-- 1 -->
                    <p class="mb-2 fw-bold">اشتري الخدمة</p>
                    <div class="custom-control custom-checkbox text-gray">
                      <input
                        class="form-check-input m-1"
                        type="checkbox"
                        value="1"
                        id="customCheck1"
                      />
                      <label
                        class="form-check-label fw-bold fs-14"
                        for="flexCheckDefault"
                        >سأقوم بكتابة المقال 500 كلمة بدلا منك</label
                      >
                      <span class="float-start text-purple">$5</span>
                    </div>
                    <!-- 2 -->
                    <div
                      class="custom-control mt-lg-3 mt-sm-2 custom-checkbox text-gray"
                    >
                      <input
                        class="form-check-input m-1"
                        type="checkbox"
                        value="1"
                        id="customCheck1"
                      />
                      <label
                        class="form-check-label fw-bold fs-14"
                        for="flexCheckDefault"
                        >مدة التسليم</label
                      >
                      <span class="float-start text-purple">١٥ -٢٠ يوم</span>
                    </div>
                  </div>
                  <hr class="mt-3" />
                  <!-- صفحة الدفع -->
                  <div class="row mb-3">
                    <div
                      class="col-md-12 col-lg-6 mt-3 col-sm-12 text-center text-lg-end"
                    >
                      <span class="text-purple fw-bolder ps-lg-2"
                        >مرات الطلب</span
                      >
                      <span>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="3">4</option>
                          <option value="3">5</option>
                        </select>
                      </span>
                    </div>
                    <div
                      class="col-md-12 col-lg-6 col-sm-12 mt-3 text-center text-lg-start d-flex justify-content-center float-start align-self-center"
                    >
                      <span
                        class="float-start mt-1 ps-1 text-purple ms-lg-2 fw-bolder"
                        >اجمالي السعر: 155$</span
                      >
                      <span class="float-start">
                        <button
                          class="btn text-white ps-4 pe-4"
                          style="background-color: #377b32 !important"
                        >
                          الي صفحة الدفع
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- تعليقات -->
          <div class="row">
            <div class="col-md-12">
              <div class="card shadow border-0 mb-4">
                <div class="card-body">
                  <div class="row align-items-center">
                    <!-- img & name-->
                    <div class="col-md-10">
                      <span class="ps-3">
                        <img
                          src="@/assets/images/bg-image.webp"
                          alt="img"
                          width="60"
                          height="60"
                          class="avatar-img rounded-circle"
                        />
                      </span>
                      <span>
                        <strong class="mb-1">mohamed gamal</strong
                        ><span class="dot dot-lg bg-success ml-1"></span>
                        <p class="small d-inline-flex me-2 text-muted mb-1">
                          منذ 3 ايام
                        </p>
                      </span>
                    </div>
                    <!--  تقييم -->
                    <div
                      class="col-sm-12 col-md-2 text-lg-center col-md-auto offset-4 offset-md-0 my-2"
                    >
                      <a href="#!" class="btn btn-sm btn-secondary">تقييم</a>
                    </div>
                  </div>
                  <div>
                    <p class="small me-2 mt-2 text-muted">
                      هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى)
                      ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                      ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما
                      قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها
                      من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.
                      خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار
                      مستخدماً وبشكله الأصلي في الطباعة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end section -->
        </div>
        <div class="col-md-12 col-lg-4 bg-light pt-lg-3 mb-lg-3">
          <!-- مزود الخدمة -->
          <div class="row">
            <div
              class="col-md-12 p-0 d-flex justify-content-center justify-content-lg-start"
            >
              <div
                class="card border-0 shadow bg-white eq-card mb-4"
                style="width: 80%"
              >
                <div class="card-body mb-n3">
                  <div class="row items-align-baseline h-100">
                    <!-- name -->
                    <div class="col-md-12 my-3">
                      <p class="small fw-bold text-purple">مزود الخدمة</p>
                      <span class="ps-3">
                        <img
                          src="@/assets/images/bg-image.webp"
                          alt="img"
                          width="60"
                          height="60"
                          class="avatar-img rounded-circle"
                        />
                      </span>
                      <span>
                        <strong class="mb-1 text-purple">mohamed gamal</strong>
                        <span class="dot dot-lg bg-success ml-1"></span>
                        <p
                          class="small fw-bolder d-inline-flex me-2 text-muted mb-1"
                        >
                          مصمم مواقع
                        </p>
                      </span>
                    </div>
                    <div class="d-flex justify-content-center">
                      <hr style="width: 80%" />
                    </div>
                    <!-- سرعة الاستجابة -->
                    <div class="row align-items-center my-2">
                      <p class="small fw-bolder text-purple">من الخدمة</p>
                      <div class="col">
                        <p class="mb-0 small text-purple fw-bolder">
                          سرعة الاستجابة
                        </p>
                      </div>
                      <div class="col-auto small text-right fw-bolder">
                        <span>3 ساعات</span><br />
                      </div>
                    </div>
                    <!-- مدة التسليم -->
                    <div class="row align-items-center my-2">
                      <div class="col">
                        <p class="mb-0 small text-purple fw-bolder">
                          مدة التسليم
                        </p>
                      </div>
                      <div class="col-auto small text-right fw-bolder">
                        <span>24 ساعة</span><br />
                      </div>
                    </div>
                    <!-- المشترين -->
                    <div class="row align-items-center my-2">
                      <div class="col">
                        <p class="mb-0 small text-purple fw-bolder">المشترين</p>
                      </div>
                      <div class="col-auto small text-right fw-bolder">
                        <span>25</span><br />
                      </div>
                    </div>
                    <!-- يبدأ من -->
                    <div class="row align-items-center my-2">
                      <div class="col">
                        <p class="mb-0 small text-purple fw-bolder">يبدأ من</p>
                      </div>
                      <div class="col-auto small text-right fw-bolder">
                        <span>150 $</span><br />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- .card-body -->
              </div>
              <!-- .card -->
            </div>
            <!-- .col -->
          </div>
          <!-- خدمات ممثالة -->
          <div class="row">
            <div
              class="col-md-12 p-0 d-flex justify-content-center justify-content-lg-start"
            >
              <div
                class="card border-0 shadow bg-white eq-card mb-4"
                style="width: 80%"
              >
                <div class="card-body mb-n3">
                  <div class="row mb-2 fw-bold text-purple">خدمات ممثالة</div>
                  <!-- خدمة ممثالة -->
                  <div
                    class="row mt-2 mt-lg-3"
                    v-for="work in works"
                    :key="work.id"
                  >
                    <div class="col-md-5">
                      <img
                        src="@/assets/images/learning.webp"
                        class="img-thumbnail"
                        alt="img"
                      />
                    </div>
                    <div class="col-md-7">
                      <p class="m-0 p-0 text-purple">تطبيق مطاعم</p>
                      <div>
                        <span class="text-end small">25 client</span>
                        <span class="float-start small">3-5 ايام</span>
                      </div>
                      <div class="m-0 p-0">
                        <span class="text-end small text-purple"
                          >يبدأ من 50 $</span
                        >
                        <span class="float-start">
                          <button class="btn pt-0 text-white small">عرض</button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- .card-body -->
              </div>
              <!-- .card -->
            </div>
            <!-- .col -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <FooterCom />
</template>

<script>
import NavebarCom from "@/components/navbar/NabarCom.vue";
import SliderCom from "@/components/bussines/SliderCom.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "SubbussinesCom",
  components: { NavebarCom, SliderCom, FooterCom },
  data() {
    return {
      works: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    };
  },
};
</script>

<style scoped>
* {
  direction: rtl;
  overflow: hidden;
}
@media only screen and (max-width: 600px) {
  label {
    width: 80%;
  }
  .bg-light {
    background-color: white !important;
  }
}
@media only screen and (min-width: 992px) {
  label {
    width: 80%;
  }
}
select {
  display: inherit;
  border: 1px solid rebeccapurple;
  width: 70px;
  min-height: 30px;
}
.form-select:focus {
  border-color: hwb(270 20% 40%);
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(143, 143, 143, 0);
}
.avatar-img {
  object-fit: cover;
}
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.04) !important;
}
</style>
