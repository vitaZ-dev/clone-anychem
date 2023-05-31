window.addEventListener("load", function () {
  const header = document.querySelector(".header");
  let nav = document.querySelector(".nav");
  nav.addEventListener("mouseenter", function () {
    header.classList.add("header-active");
  });
  nav.addEventListener("mouseleave", function () {
    header.classList.remove("header-active");
  });

  let gnbA = document.querySelectorAll(".gnb >li");
  let navBlueBar = document.querySelector(".nav-blue-bar");
  gnbA.forEach((item) => {
    // 최초 위치 및 너비
    let posX = gnbA[0].getBoundingClientRect().left;
    let widthX = gnbA[0].getBoundingClientRect().width;
    navBlueBar.style.left = posX + "px";
    navBlueBar.style.width = widthX + "px";

    item.addEventListener("mouseenter", () => {
      let posX = item.getBoundingClientRect().left;
      let widthX = item.getBoundingClientRect().width;
      // navBlueBar.style.left = posX + "px";
      // navBlueBar.style.width = widthX + "px";
      anime({
        targets: navBlueBar,
        left: posX,
        width: widthX,
        easing: "easeInOutQuad",
        duration: 500,
      });
    });
  });

  // 스크롤에 의한 position:fixed, relative 교체
  const visual = document.querySelector(".visual");
  window.addEventListener("scroll", function () {
    // 스크롤 위치값을 파악
    let scY = window.scrollY;
    // classList.add() 와 class.remove() 활용
    if (scY > 0) {
      // 스크롤바가 아래로 조금이라도 이동
      // position: fixed;
      header.classList.add("header-fixed");
      visual.classList.add("visuial-fixed");
    } else {
      // 스크롤바가 최상단에 위치
      // position: relative;
      header.classList.remove("header-fixed");
      visual.classList.remove("visual-fixed");
    }
    //
  });
});
