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

      <router-link class="text-white" :to="{ name: 'register' }">
        <button type="button" class="btn cairo text-white d-block m-2">
          تسجيل كمقدم خدمة
        </button>
      </router-link>
      <router-link class="text-white" :to="{ name: 'register' }">
        <button type="button" class="btn cairo text-white d-block m-2">
          تسجيل كمستفيد
        </button>
      </router-link>
    </div>
  </div>
  <div class="container-fluid mt-lg-5 mt-sm-2">
    <p class="text-center fw-bold fs-3 mt-3">كيف يعمل الموقع</p>
    <!-- كيف يعما الموقع -->
    <div class="row justify-content-center cairo">
      <div class="col-md-10">
        <div class="row justify-content-center">
          <div
            class="col-md-6 col-xl-4 mb-4"
            v-for="service in services"
            :key="service"
          >
            <div class="card border-0">
              <div class="card-body">
                <div class="pt-3 pb-3">
                  <span>
                    <img :src="service.img" width="60" alt="" />
                  </span>
                  <span>
                    <span class="card-title h5 fw-bold">{{
                      service.title
                    }}</span>
                  </span>
                </div>
                <p class="card-text small fw-bold">
                  {{ service.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- خدمة الااعمال -->
    <div class="row justify-content-center mt-lg-5">
      <div class="col-md-10">
        <div class="cairo mb-4">
          <span class="float-end fw-bold fs-4"> خدمة اعمال </span>
          <router-link :to="{ name: 'Bussines' }">
            <span class="float-start mt-1"><a>مشاهدة المزيد</a></span>
          </router-link>
        </div>
        <div class="row justify-content-center">
          <div
            class="col-md-6 col-xl-3 mb-4"
            v-for="Business in Business"
            :key="Business"
          >
            <div class="card border-0 cardImg" style="width: 100%">
              <img
                src="@/assets/images/testimg.webp"
                class="card-img-top"
                alt="..."
              />
            </div>

            <!-- .card -->
          </div>
        </div>
      </div>
    </div>
    <!-- خدمة برمجة وتطوير -->
    <div class="row justify-content-center mt-lg-5">
      <div class="col-md-10">
        <div class="cairo mb-4">
          <span class="float-end fw-bold fs-4">خدمات البرمجة والتطوير</span>
          <span class="float-start mt-1">
            <router-link :to="{ name: 'programming' }"
              >مشاهدة المزيد</router-link
            >
          </span>
        </div>
        <div class="row justify-content-center">
          <div
            class="col-md-6 col-xl-3 mb-4"
            v-for="program in Programming"
            :key="program"
          >
            <div class="card border-0 cardImg" style="width: 100%">
              <img
                src="@/assets/images/web1.webp"
                class="card-img-top"
                alt="..."
              />
            </div>

            <!-- .card -->
          </div>
        </div>
      </div>
    </div>
    <!-- خدمات التسويق الاليكتروني -->
    <div class="row justify-content-center mt-lg-5">
      <div class="col-md-10">
        <div class="cairo mb-4">
          <span class="float-end fw-bold fs-4">خدمات التسويق الاليكتروني</span>
          <router-link :to="{ name: 'marketing' }">
            <span class="float-start mt-1"><a>مشاهدة المزيد</a></span>
          </router-link>
        </div>
        <div class="row justify-content-center">
          <div
            class="col-md-6 col-xl-3 mb-4"
            v-for="market in marketing"
            :key="market"
          >
            <div class="card border-0 cardImg" style="width: 100%">
              <img
                src="@/assets/images/marketing.webp"
                class="card-img-top"
                alt="..."
              />
            </div>

            <!-- .card -->
          </div>
        </div>
      </div>
    </div>
    <!-- خدمات تدريب عن بعد -->
    <div class="row justify-content-center mt-lg-5">
      <div class="col-md-10">
        <div class="cairo mb-4">
          <span class="float-end fw-bold fs-4">خدمات تدريب عن بعد</span>
          <RouterLink :to="{ name: 'learning' }">
            <span class="float-start mt-1"><a>مشاهدة المزيد</a></span>
          </RouterLink>
        </div>
        <div class="row justify-content-center">
          <div
            class="col-md-6 col-xl-3 mb-4"
            v-for="train in training"
            :key="train"
          >
            <div class="card border-0 cardImg" style="width: 100%">
              <img
                src="@/assets/images/learning.webp"
                class="card-img-top"
                alt="..."
              />
            </div>

            <!-- .card -->
          </div>
        </div>
      </div>
    </div>
    <!-- كافة الخدمات الإبداعية والاحترافية-->
    <div class="row justify-content-center mt-lg-5">
      <div class="col-md-10">
        <div class="cairo mb-4">
          <span class="float-end fw-bold fs-4"
            >كافة الخدمات الإبداعية والاحترافية</span
          >
          <router-link :to="{ name: 'creativity' }">
            <span class="float-start mt-1"><a>مشاهدة المزيد</a></span>
          </router-link>
        </div>
        <div class="row justify-content-center">
          <div
            class="col-md-6 col-xl-3 mb-4"
            v-for="creative in creativity"
            :key="creative"
          >
            <div class="card border-0 cardImg" style="width: 100%">
              <img
                src="@/assets/images/creative.webp"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- خدمات تصميم فيديو-->
    <div class="row justify-content-center mt-lg-5">
      <div class="col-md-10">
        <div class="cairo mb-4">
          <span class="float-end fw-bold fs-4">خدمات تصميم فيديو</span>
          <router-link :to="{ name: 'video' }">
            <span class="float-start mt-1"><a>مشاهدة المزيد</a></span>
          </router-link>
        </div>
        <div class="row justify-content-center">
          <div
            class="col-md-6 col-xl-3 mb-4"
            v-for="video in videos"
            :key="video"
          >
            <div class="card border-0 cardImg" style="width: 100%">
              <img
                src="@/assets/images/video.png"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- خدمات تصميم -->
    <div class="row justify-content-center mt-lg-5">
      <div class="col-md-10">
        <div class="cairo mb-4">
          <span class="float-end fw-bold fs-4">خدمات تصميم </span>
          <router-link :to="{ name: 'design' }">
            <span class="float-start mt-1"><a>مشاهدة المزيد</a></span>
          </router-link>
        </div>
        <div class="row justify-content-center">
          <div
            class="col-md-6 col-xl-3 mb-4"
            v-for="design in designs"
            :key="design"
          >
            <div class="card border-0 cardImg" style="width: 100%">
              <img
                src="@/assets/images/design.webp"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- خدمات صوتيات -->
    <div class="row justify-content-center mt-lg-5">
      <div class="col-md-10">
        <div class="cairo mb-4">
          <span class="float-end fw-bold fs-4">خدمات صوتيات </span>
          <router-link :to="{ name: 'voice' }">
            <span class="float-start mt-1"><a>مشاهدة المزيد</a></span>
          </router-link>
        </div>
        <div class="row justify-content-center">
          <div
            class="col-md-6 col-xl-3 mb-4"
            v-for="voice in voices"
            :key="voice"
          >
            <div class="card border-0 cardImg" style="width: 100%">
              <img
                src="@/assets/images/voice.webp"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- FAQ -->
    <div class="row justify-content-center mt-lg-5">
      <div class="col-md-10 cairo">
        <h3 class="text-center fw-bold">الأسئلة الشائعة</h3>
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
  name: "HomeCom",
  components: { NavebarCom, FooterCom },
  data() {
    return {
      services: [
        {
          id: "1",
          img: require("@/assets/images/24-hours.gif"),
          title: "استعراض الخدمة",
          desc: "ابحث عن الخدمة التي تحتاجها باستخدام مربع البحث في الأعلى او عبر التصنيفات",
        },
        {
          id: "2",
          img: require("@/assets/images/service.gif"),
          title: "اطلب الخدمة",
          desc: "راجع وصف الخدمة وتقييمات المشتريين ثم اطلبها لفتح تواصل مع البائع",
        },
        {
          id: "3",
          img: require("@/assets/images/shipping.gif"),
          title: "استلم خدمتك",
          desc: "تواصل مع البائع مباشرة داخل الموقع حتى استلام طلبك كاملا",
        },
      ],
      Business: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      Programming: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      marketing: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      training: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      creativity: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      videos: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      designs: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      voices: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      faqs: [
        {
          id: 1,
          question: "ما هي منصة 24؟",
          desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى",
        },
        {
          id: 2,
          question: "كيف يمكن ان استفيد من منصة 24؟",
          desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى",
        },
        {
          id: 3,
          question: "كيف تضمن منصة 24 حقوقي؟",
          desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى",
        },
        {
          id: 4,
          question: "ماذا سيحدث بعد شرائي لاحد الخدمات المعروضة في منصة 24؟",
          desc: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى",
        },
      ],
    };
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
  background-image: url("@/assets/images/bg-image.webp");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
.content {
  align-items: center;
  bottom: 0;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.514);
  /* height: 580px; */
  /* display: flex; */
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
@media only screen and (min-width: 992px) {
  .content {
    /* height: 580px; */
  }
  .btn {
    width: 30%;
  }
  .cardImg {
    height: 200px;
  }
  .cardImg img {
    height: 200px;
  }
}
</style>
