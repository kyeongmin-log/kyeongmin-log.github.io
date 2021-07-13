// 스크롤 시 메뉴 배경 추가 및 Home안에 있는 요소 투명도 설정
function handleScroll() {
  const menu = document.querySelector("#menu");
  const home = document.querySelector("#home");

  menu.style.backgroundColor = window.scrollY != 0 ? "rgba(73, 74, 68, 0.9)" : "rgba(73, 74, 68, 0)";
  home.style.opacity = `${100 - window.scrollY / 7}%`;
}

window.addEventListener("scroll", handleScroll);

// menu 클릭 시 해당 항목으로 이동
const menu = document.querySelector("#menu");

function handleMenu(event) {
  const sections = document.querySelectorAll("section");
  const menuId = event.target.innerText.toLowerCase();

  if (menuId === "kyeongmin") sections[0].scrollIntoView({ behavior: "smooth", block: "center" });
  sections.forEach((section) => {
    if (menuId === section.id) section.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

menu.addEventListener("click", handleMenu);

// home에 있는 contact me 버튼 클릭 시 Contact 항목으로 이동
const homeBtn = document.querySelector(".home__btn");

function handleHomeBtn() {
  const contact = document.querySelector("#contact");
  contact.scrollIntoView({ behavior: "smooth", block: "center" });
}

homeBtn.addEventListener("click", handleHomeBtn);
