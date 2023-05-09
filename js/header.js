// 웹브라우저에 html, css, js, image를 모두 불러들이고
//렌더링 준비가 끝나면 그 때 function의 블럭 안쪽을 실행
window.onload = function () {
  // nav 에 마우스 hover하면 header 높이 260px로 변화주기
  // nav 에 마우스 out  하면 header 높이 100px로 변화주기

  // header 를 js로 저장해 보자(변수 정의해 보자)
  const header = document.querySelector(".header");

  // nav    를 js로 저장해 보자(변수 정의해 보자)
  let nav = document.querySelector(".nav");

  // undefined 만 아니면 된다
  // console.log(header);
  // console.log(nav);
  // + null = 값이 없음. 그냥 없음.

  // nav 에 마우스 hover 처리
  // html 요소에 마우스 hover 처리하는 법
  nav.addEventListener("mouseenter", function () {
    // header의 높이를 260px로 변경하고 싶다
    // header.style.height = "260px";

    // 260px 로 변경되는 class를 작성해두었다
    header.classList.add("header-active");
  });
  // nav 에 마우스 out 처리
  // html 요소에 마우스 out 처리하는 법
  nav.addEventListener("mouseleave", function () {
    // header의 높이를 100px로 변경하고 싶다
    // header.style.height = "100px";

    // 260px 로 변경되는 class를 제거한다
    header.classList.remove("header-active");
  });
  // 지금처럼 숫자로 css 변경이 가능하다
  // 하지만 비추천하는 방법이었다!!!

  // 클래스를 추가했다가 제거했다가 하는 방법이 더 좋다!
  // js를 안 고치고 css만 고치면 되니까 더 좋다!
};
