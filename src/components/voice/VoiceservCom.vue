<template>
  <NavebarCom />
  <div class="bacgroundimage">
    <div class="content">
      <header>
        <strong>
          <h1 class="text-end">منصة تك 24</h1>
        </strong>
        <p class="text-end fs-5 fw-bold">
          منصة إلكترونية خليجية تعمل على تقديم الخدمات الإلكترونية المتنوعة
          للأفراد وأصحاب الأعمال والمشاريع الناشئة لتنفيذ أعمالهم التقنية خلال
          فترة 24 ساعة.
        </p>
      </header>
      <button type="button" class="btn text-white d-block m-2 cairo">
        تسجيل كمقدم خدمة
      </button>
      <button type="button" class="btn text-white d-block m-2 cairo">
        تسجيل كمستفيد
      </button>
    </div>
  </div>
  <div class="container-fluid mt-lg-5 mt-sm-2">
    <!-- التعليم عن بعد -->
    <div class="row justify-content-center mt-lg-5">
      <div class="col-md-11">
        <div>
          <span class="mt-1">
            <router-link :to="{ name: 'home' }">الرئيسية</router-link>
          </span>
          <p class="fs-4 fw-bold900 cairo">صوتيات</p>
          <p>اشبع شغفك بالتعلم وتدرب في اهم المجالات عبر الانترنت</p>
        </div>
        <div class="row justify-content-center">
          <!-- col4 -->
          <div class="col-md-4">
            <input
              type="text"
              placeholder="ابحث هنا"
              class="form-control mb-5"
              v-model="search"
            />
            <!-- title -->
            <div class="row categories">
              <strong>الاقسام</strong>
              <router-link :to="{ name: 'Bussines' }">
                <span>اعمال</span>
              </router-link>
              <router-link :to="{ name: 'programming' }">
                <span>برمجة و تطوير</span>
              </router-link>
              <router-link :to="{ name: 'marketing' }">
                <span> تسويق اليكتروني</span>
              </router-link>

              <router-link :to="{ name: 'learning' }">
                <span>تدريب عن بعد</span>
              </router-link>

              <router-link :to="{ name: 'creativity' }">
                <span>خدمات ابداعية واحترافية</span>
              </router-link>

              <router-link :to="{ name: 'video' }">
                <span>تصميم فيديو</span>
              </router-link>

              <router-link :to="{ name: 'design' }">
                <span>تصميم</span>
              </router-link>

              <router-link :to="{ name: 'voice' }">
                <span>صوتيات</span>
              </router-link>
            </div>
            <!-- categories -->
            <div class="card-body">
              <div class="list-group list-group-flush my-n3">
                <div class="list-group-item">
                  <div
                    class="row align-items-center mt-2 text-gray"
                    v-for="categorie in filtercategories"
                    :key="categorie.id"
                  >
                    <div class="col">
                      <span>{{ categorie.title }}</span>
                      <!-- <div class="my-0 text-muted small">Gear, Bags</div> -->
                    </div>
                    <div class="col-auto bg-secondary text-white rounded-2">
                      <strong>85</strong>
                    </div>
                  </div>
                </div>
              </div>
              <!-- / .list-group -->
            </div>
            <!-- مستوي البائع -->
            <div class="card-body mt-lg-3">
              <div class="list-group list-group-flush my-n3">
                <div class="list-group-item">
                  <div class="row">
                    <div class="card-body">
                      <p class="mb-2 text-gray cairo">مستوي البائع</p>
                      <!-- بائع موثوق -->
                      <div class="custom-control custom-checkbox text-gray">
                        <input
                          class="form-check-input m-1"
                          type="checkbox"
                          value="1"
                          id="customCheck1"
                        />
                        <label class="form-check-label" for="flexCheckDefault"
                          >بائع موثوق/ مميز</label
                        >
                      </div>
                      <!-- بائع نشيط -->
                      <div class="custom-control custom-checkbox text-gray">
                        <input
                          class="form-check-input m-1"
                          type="checkbox"
                          value="1"
                          id="customCheck1"
                        />
                        <label class="form-check-label" for="flexCheckDefault"
                          >بائع نشيط</label
                        >
                      </div>
                      <!-- بائع جيد -->
                      <div class="custom-control custom-checkbox text-gray">
                        <input
                          class="form-check-input m-1"
                          type="checkbox"
                          value="1"
                          id="customCheck1"
                        />
                        <label class="form-check-label" for="flexCheckDefault"
                          >بائع جديد</label
                        >
                      </div>
                    </div>
                    <!-- / .card-body -->
                  </div>
                </div>
              </div>
            </div>
            <!-- مستوي البائع -->
            <div class="card-body mt-lg-3">
              <div class="list-group list-group-flush my-n3">
                <div class="list-group-item">
                  <div class="row">
                    <div class="card-body">
                      <p class="mb-2 text-gray cairo">حالة البائع</p>
                      <!-- متواجد حاليا-->
                      <div class="custom-control custom-checkbox text-gray">
                        <input
                          class="form-check-input m-1"
                          type="checkbox"
                          value="1"
                          id="customCheck1"
                        />
                        <label class="form-check-label" for="flexCheckDefault"
                          >متواجد حاليا</label
                        >
                      </div>
                      <!-- هوية موثقة-->
                      <div class="custom-control custom-checkbox text-gray">
                        <input
                          class="form-check-input m-1"
                          type="checkbox"
                          value="1"
                          id="customCheck1"
                        />
                        <label class="form-check-label" for="flexCheckDefault"
                          >هوية موثقة</label
                        >
                      </div>
                    </div>
                    <!-- / .card-body -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- col-8 -->
          <div class="col-md-8 card-section">
            <div class="row">
              <div
                class="col-md-6 col-xl-4 mb-2 pt-1 pb-2"
                v-for="program in Programming"
                :key="program"
              >
                <div class="card border-0 cards" style="width: 100%">
                  <img
                    src="@/assets/images/voice.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p
                      class="card-text cairo fw-bold mb-3"
                      style="font-size: 12px"
                    >
                      مقترح للعمل على اعداد الخطط الاستراتيجيه للمتاجر والشركات.
                    </p>
                    <h5
                      class="card-title cairo text-secondary"
                      style="font-size: 16px"
                    >
                      أعمال/استشارات اعمال
                    </h5>
                    <span class="text-secondary"
                      >تبدأ من <span class="text-dark fw-bold">$5.00</span>
                    </span>
                  </div>
                </div>
                <!-- .card -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FAQ -->
    <div class="row justify-content-center mt-lg-5">
      <div class="col-md-10 cairo">
        <h3 class="text-center fw-bold">
          احصل على افضل الخدمات الصوتية على يد خبراء صوتيات محترفين
        </h3>
        <h5 class="text-center text-gray lh-base">
          شهدت صناعة الصوتيات تطورا كبيرا بسبب التقدم التقني السريع وهو ما جعل
          الصوت مكونا أساسيا في انتاج اشكال مختلفة من المحتوى وعبر مئات الخدمات
          الصوتية التي يقدمها خبراء الصوت المحترفون هنا ستحصل على المحتوى الص
        </h5>
        <div class="container-fluid mt-3" style="cursor: pointer">
          <div class="accordion">
            <div class="accordion-item" v-for="faq in faqs" :key="faq">
              <div class="accordion-item-header">
                {{ faq.question }}
              </div>
              <div class="accordion-item-body">
                <div class="accordion-item-body-content">
                  {{ faq.desc }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterCom />
</template>

<script>
import NavebarCom from "@/components/navbar/NabarCom.vue";
import FooterCom from "@/components/footer/FooterCom.vue";
export default {
  name: "VoiceservCom",
  components: { NavebarCom, FooterCom },
  data() {
    return {
      Programming: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
      ],
      search: "",
      categories: [
        { id: 1, title: "استشارات شخصية" },
        { id: 2, title: "الصحة واللياقة البدنية" },
        { id: 3, title: "تعلم اللغة الانجليزية" },
        { id: 4, title: "فنون وحرف" },
        { id: 5, title: "التسويق بالمحتوى" },
        { id: 17, title: "نصائح سياحة وسفر" },
        { id: 18, title: "مساعدة لحل الواجبات" },
        { id: 19, title: "التسويق الالكتروني" },
        { id: 20, title: "تدريب عن بعد" },
        { id: 21, title: "تصميم فيديو" },
        { id: 22, title: "تصميم" },
        { id: 23, title: "صوتيات" },
        { id: 24, title: "كتابة وترجمة" },
        { id: 25, title: "تدريب عن بعد" },
        { id: 26, title: "خدمات متنوعه" },
      ],
      faqs: [
        {
          id: 1,
          question:
            "ما المجالات التي استطيع الحصول فيها على خدمات تدريب عن بعد؟",
          desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى",
        },
        {
          id: 2,
          question: "ما المقصود بخدمات الصوتيات؟",
          desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى",
        },
        {
          id: 3,
          question: "ما هي أنواع الخدمات الصوتية؟",
          desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى",
        },
        {
          id: 4,
          question: "كيف احصل على محتوى صوتي بجودة احترافية؟",
          desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى",
        },
      ],
    };
  },
  computed: {
    filtercategories() {
      return this.categories.filter((categorie) =>
        categorie.title
          .toLowerCase()
          .replace(/أ/gi, "ا")
          .replace(/إ/gi, "ا")
          .includes(this.search.toLowerCase())
      );
    },
  },
  mounted() {
    this.faq();
  },
  methods: {
    faq() {
      const accordionItemHeaders = document.querySelectorAll(
        ".accordion-item-header"
      );
      accordionItemHeaders.forEach((accordionItemHeader) => {
        accordionItemHeader.addEventListener("click", () => {
          accordionItemHeader.classList.toggle("active");
          const accordionItemBody = accordionItemHeader.nextElementSibling;
          if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight =
              accordionItemBody.scrollHeight + "px";
          } else {
            accordionItemBody.style.maxHeight = 0;
          }
        });
      });
    },
  },
};
</script>

<style scoped>
* {
  direction: rtl;
  overflow: hidden;
}
.bacgroundimage {
  background-image: url("@/assets/images/bg-image.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
.content {
  align-items: center;
  bottom: 0;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.514);
  flex-wrap: wrap;
  font-family: sans-serif;
  justify-content: center;
  left: 0;
  padding: 20vw;
  right: 0;
  text-align: center;
  top: 0;
}

h1 {
  font-weight: 900;
  font-size: 30pt;
}

/* cards */
.cards {
  margin: 0 auto;
  /* text-align: center; */
  /* display: -webkit-flex;
              display: flex;
              border-radius: 10px;
              -webkit-justify-content: center;
              justify-content: center;
              -webkit-flex-wrap: wrap;
              flex-wrap: wrap;
              margin-top: 15px;
              padding: 1.5%;
              -webkit-box-sizing: border-box;
              -moz-box-sizing: border-box;
              box-sizing: border-box; */
  border: 1px solid #d3d3d349 !important;
  box-shadow: 0 3px 6px rgba(180, 180, 180, 0.082),
    0 3px 6px rgba(116, 116, 116, 0.123);
  transition: all 0.5s ease-in-out;
}

.cards:hover {
  box-shadow: 0 4px 10px rgba(145, 145, 145, 0.16),
    0 4px 10px rgba(139, 139, 139, 0.23);
}

@media only screen and (min-width: 992px) {
  .content {
    /* height: 580px; */
  }
  .btn {
    width: 30%;
  }
}
</style>
