window.addEventListener("load", function () {
  // Swiper 변수
  let swGoods;
  // const SLIDECOUNT = 4;

  // fetch 버전
  // fetch("./data/gooddata.json")
  //   .then((res) => res.json())
  //   .then((result) => console.log(result))
  //   .catch((err) => console.error(err));

  // async/await 버전
  const getData = async function () {
    try {
      let res = await fetch("./data/gooddata.json");
      let result = await res.json();
      makeSlide(result);
      makeSlideShow();
      makeMenu(result);
    } catch (err) {
      console.error(err);
    }
  };

  function makeSlide(_result) {
    let html = ``;
    let copyArr = [..._result.goods];
    // Swiper 버전에 따른 문제 발생
    // 강제 목록 추가 제거
    // if (copyArr.length <= 4) {
    //   copyArr = [..._result.goods, ..._result.goods];
    // }

    copyArr.forEach((item) => {
      let tag = `
      <div class="swiper-slide">
        <a href="${item.link}" class="good-link">
          <div class="good-item">
            <div class="good-item-img" style="background-image:url(images/${item.image});">
              
            </div>
            <div class="good-item-txt">
              <p>${item.title}</p>
              <span>${item.desc}</span>
            </div>
          </div>
        </a>
      </div>
      `;
      html += tag;
    });
    document.querySelector(".sw-goods .swiper-wrapper").innerHTML = html;
  }

  function makeSlideShow() {
    // Swiper
    swGoods = new Swiper(".sw-goods", {
      loop: true,
      speed: 1000,
      slidesPerView: 3 /* */,
      spaceBetween: 20,
      navigation: {
        prevEl: ".sw-goods-prev",
        nextEl: ".sw-goods-next",
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });
    swGoods.on("slideChange", function () {
      // let count = this.realIndex % SLIDECOUNT;
      // console.log("slide changed : " + count);
      focusMenu(this.realIndex);
    });

    focusMenu(0);
  }

  function focusMenu(_index) {
    let lis = document.querySelectorAll(".goods-list li");
    lis.forEach((item, index) => {
      // 순서번호랑 슬라이드 번호가 같다면 add
      if (index === _index) {
        item.classList.add("focus");
      } else {
        item.classList.remove("focus");
      }
    });
  }

  function makeMenu(_result) {
    let html = ``;
    _result.goods.forEach((item) => {
      let tag = `<li><a href="#">${item.title}</a></li>`;
      html += tag;
    });
    document.querySelector(".goods-list").innerHTML = html;

    // li 의 태그를 클릭하는 경우 해당 슬라이드로 이동
    let lis = document.querySelectorAll(".goods-list li a");
    lis.forEach((item, index) => {
      item.onclick = function (event) {
        // a 태그 href 막기
        event.preventDefault();
        console.log(index);

        swGoods.slideToLoop(index);
      };
    });
  }

  getData();

  // 슬라이드 멈추기/재생하기
  const btn = document.querySelector(".sw-goods-pause");
  const icon = btn.querySelector(".fa-pause");
  let swGoodsState = "play";
  btn.onclick = () => {
    /*
    // 가장 짧게 최적화
    const isPlaying = swGoodsState === "play";
    swGoods.autoplay[isPlaying ? "stop" : "start"]();
    swGoodsState = isPlaying ? "stop" : "play";
    icon.classList.toggle("fa-play");
    */
    if (swGoodsState === "play") {
      // 슬라이드 멈춰
      swGoods.autoplay.stop();
      swGoodsState = "stop";
      icon.classList.add("fa-play");
    } else {
      // 슬라이드 재실행
      swGoods.autoplay.start();
      swGoodsState = "play";
      icon.classList.remove("fa-play");
    }
  };
});
