/**
 * 작성자 : 황지현
 * 작성일 : 2023.05.26
 * 기능 업데이트 : json 데이터를 이용한 html 구조 생성 적용
 */
window.addEventListener("load", function (event) {
  const swVisualWrap = document.querySelector(".sw-visual .swiper-wrapper");
  // XMLHttpRequest
  // const xhr = new XMLHttpRequest();
  // xhr.addEventListener("readystatechange", function (event) {
  //   let req = event.target;
  //   if (req.readyState === XMLHttpRequest.DONE) {
  //     let data = JSON.parse(req.response);
  //     makeVisualHtml(data);
  //   }
  // });
  // xhr.open("GET", "data/visualdata.json");
  // xhr.send();

  fetch("data/visualdata.json")
    .then((res) => res.json())
    .then((result) => makeVisualHtml(result))
    .catch((err) => console.error(err));

  function makeVisualHtml(_data) {
    let html = ``;
    _data.img.forEach((item) => {
      let temp = `
        <div class="swiper-slide" style="background-image: url(images/${item})"></div>
      `;
      html += temp;
    });

    swVisualWrap.innerHTML = html;

    // Swiper
    const swVisual = new Swiper(".sw-visual", {
      loop: true,
      effect: "fade",
      speed: 800,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".sw-visual-pg",
        clickable: true,
      },
    });

    /*
      위 구문을 통해 slide 완료되면
      .sw-visual-pg 에는 span.sw-pagination-bullet 이 생성됨
      innerHTML 을 이용해서 내용을 넣어보자
    */
    const swVisualBullets = document.querySelectorAll(
      ".sw-visual-pg .swiper-pagination-bullet"
    );
    swVisualBullets.forEach((item, index) => {
      if (index < 9) {
        item.innerHTML = `<em>0${index + 1}</em>`;
      } else {
        item.innerHTML = `<em>${index + 1}</em>`;
      }
      // item.innerHTML = `<em>${index < 9 ? "0" : ""}${index + 1}</em>`;
    });
  }
});
