/**
 * 작성자 : 황지현
 * 작성일 : 2023.05.26
 * 기능 업데이트 : json 데이터를 이용한 html 구조 생성 적용
 */
window.addEventListener("load", function (event) {
  const swVisualWrap = document.querySelector(".sw-visual .swiper-wrapper");
  // XMLHttpRequest
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function (event) {
    let req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      let data = JSON.parse(req.response);
      makeVisualHtml(data);
    }
  });
  xhr.open("GET", "data/visualdata.json");
  xhr.send();

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
    });
  }
});
