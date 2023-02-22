<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="container-fluid mt-3" style="cursor: pointer">
      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-item-header">
            هذا النص هو مثال لنص يمكن أن يستبدل ؟
          </div>
          <div class="accordion-item-body">
            <div class="accordion-item-body-content">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى ...
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-item-header">
            هذا النص هو مثال لنص يمكن أن يستبدل ؟
          </div>
          <div class="accordion-item-body">
            <div class="accordion-item-body-content">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى ...
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-item-header">
            هذا النص هو مثال لنص يمكن أن يستبدل ؟
          </div>
          <div class="accordion-item-body">
            <div class="accordion-item-body-content">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى ...
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-item-header">
            هذا النص هو مثال لنص يمكن أن يستبدل ؟
          </div>
          <div class="accordion-item-body">
            <div class="accordion-item-body-content">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى ...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
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
};
</script>
<style scoped>
.accordion {
  width: 90%;
  max-width: 1000px;
  margin: 2rem auto;
}
.accordion-item {
  background-color: #fff;
  color: #111;
  margin: 1rem 0;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
}
.accordion-item-header {
  padding: 0.5rem 3rem 0.5rem 3rem;
  min-height: 3.5rem;
  line-height: 1.25rem;
  font-weight: bold;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  position: relative;
  cursor: pointer;
}
.accordion-item-header::after {
  content: "\002B";
  font-size: 1rem;
  position: absolute;
  left: 1rem;
}
.accordion-item-header.active::after {
  content: "\2212";
}
.accordion-item-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
.accordion-item-body-content {
  padding: 1rem;
  line-height: 1.5rem;
  border-top: 1px solid;
  border-image: linear-gradient(to left, transparent, #34495e, transparent) 1;
}

@media (max-width: 767px) {
  html {
    font-size: 14px;
  }
}
</style>
