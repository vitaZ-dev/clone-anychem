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
});
