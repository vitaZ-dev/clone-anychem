window.addEventListener("load", function () {
  this.window.addEventListener("scroll", function () {
    AOS.init();
  });

  // 모달창 처리
  const bodyTag = document.querySelector("body");
  bodyTag.classList.add("modal-active");
  const modal = document.querySelector(".modal");
  const modalCont = document.querySelector(".modal-cont");
  modalCont.onclick = function () {
    bodyTag.classList.remove("modal-active");
    modal.style.display = "none";
  };
});
