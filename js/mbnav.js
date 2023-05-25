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
    // reset 하겠다
    resetSubMenu();
    // 펼침 기록 변수 초기화
    sidOpenNumber = undefined;

    //화면의 리사이즈를 체크해서 처리
    window.addEventListener("resize", function () {
      // 화면의 너비 + 버튼 이벤트도 원래대로
      let windowWIdth = window.innerWidth;
      if (windowWIdth > mbWidth) {
        mbWrap.classList.remove(mbNavWrap);
        mbNav.classList.remove(mbNavActive);
        // reset 하겠다
        resetSubMenu();
        // 펼침 기록 변수 초기화
        sidOpenNumber = undefined;
      }
    });

    /*
		// mbWrap에 조건문을 안 줬을 땐 이 코드를 넣으면 됨
		const mbGnb = document.querySelector("mb-gnb");
    mbGnb.addEventListener("click", (event) => {
      // 이벤트 전달 막음
      event.stopPropagation();
    });
		*/
    // dim 영역 클릭 시 내비게이션 닫기
    mbWrap.addEventListener("click", function (event) {
      if (event.target === event.currentTarget) {
        mbNav.classList.remove(mbNavActive);
        mbWrap.classList.remove(mbNavWrap);
        // reset 하겠다
        resetSubMenu();
        // 펼침 기록 변수 초기화
        sidOpenNumber = undefined;
      }
    });
  });

  // 아코디언 메뉴
  const sideLis = document.querySelectorAll(".side-menu > li");
  const sideMenuA = document.querySelectorAll(".side-menu > li > a");
  const sideSubMenu = document.querySelectorAll(".side-menu > li > .submenu");
  const sideMenuOffset = 53;
  // 펼쳐질 높이값을 담아둔다
  const sideOpenHeightArr = [];
  let sidOpenNumber;

  // 각 서브 메뉴의 높이
  sideSubMenu.forEach((item, index) => {
    // sideOpenHeightArr.push(item.scrollHeight);
    sideOpenHeightArr[index] = item.scrollHeight + sideMenuOffset;
  });

  // 클릭 처리
  sideMenuA.forEach((item, index) => {
    item.addEventListener("click", function (event) {
      // 기본동작 href 막기
      event.preventDefault();
      showSubMenu(index);
    });
  });

  function resetSubMenu() {
    sideLis.forEach((item) => {
      // item.style.height = sideMenuOffset + "px";
      anime({
        targets: item,
        height: 53,
        easing: "easeInOutQuad",
        duration: 300,
      });
    });
  }
  function showSubMenu(_showNumber) {
    // 모든 li 의 높이를 53으로 하겠다
    // reset 하겠다
    resetSubMenu();

    // 펼친 번호와 같은 값이 인자로 전달되면
    // 펼침 코드를 실행하지 않는다.
    if (_showNumber === sidOpenNumber) {
      // 펼침 기록 변수 초기화
      sidOpenNumber = undefined;
      // 함수중단
      return;
    }

    // li 의 높이를 변경하겠다
    sideLis.forEach((item, index) => {
      if (_showNumber === index) {
        // item.style.height = `${sideOpenHeightArr[_showNumber]}px`;
        anime({
          targets: item,
          height: sideOpenHeightArr[_showNumber],
          easing: "easeInOutQuad",
          duration: 300,
        });
      }
    });

    // 페이지 저장
    sidOpenNumber = _showNumber;
  }
});
