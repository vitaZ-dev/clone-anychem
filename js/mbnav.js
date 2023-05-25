window.addEventListener("load", function () {
  // 모바일 버튼 기능
  const mbNav = document.querySelector(".mb-nav");
  const mbWrap = document.querySelector(".mb-wrap");
  // 클래스 이름
  const mbNavActive = "mb-nav-active";
  const mbNavWrap = "mb-wrap-active";
  // 반응형 변수
  const mbWidth = 1000;

  mbNav.addEventListener("click", function () {
    let checkActive = mbNav.classList.contains(mbNavActive);
    if (checkActive === false) {
      mbNav.classList.add(mbNavActive);
      mbWrap.classList.add(mbNavWrap);
    } else {
      mbNav.classList.remove(mbNavActive);
      mbWrap.classList.remove(mbNavWrap);
    }

    //화면의 리사이즈를 체크해서 처리
    window.addEventListener("resize", function () {
      // 화면의 너비 + 버튼 이벤트도 원래대로
      let windowWIdth = window.innerWidth;
      if (windowWIdth > mbWidth) {
        mbWrap.classList.remove(mbNavWrap);
        mbNav.classList.remove(mbNavActive);
      }
    });
  });

  // 아코디언 메뉴
  const sideMenuA = document.querySelectorAll(".side-menu > li > a");
  const sideSubMenu = document.querySelectorAll(".side-menu > li > .submenu");

  sideMenuA.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      event.preventDefault(); // a태그 기본동작 막음
      changeSubmenu(index);
    });
  });

  function changeSubmenu(_index) {
    sideSubMenu.forEach((item, index) => {
      if (_index === index) {
        if (item.style.display === "block") {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
      } else {
        item.style.display = "none";
      }
    });
  }
});
