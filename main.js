const menu = document.querySelector("#menu");
const home = document.querySelector("#home");

// 스크롤 시 메뉴 배경 추가 및 Home안에 있는 요소 투명도 설정
function handleScroll() {
  menu.style.backgroundColor = window.scrollY != 0 ? "rgba(73, 74, 68, 0.9)" : "rgba(73, 74, 68, 0)";
  home.style.opacity = `${100 - window.scrollY / 7}%`;
}

window.addEventListener("scroll", handleScroll);
