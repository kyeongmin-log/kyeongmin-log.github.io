// 스크롤 시 메뉴 배경 추가 및 Home안에 있는 요소 투명도 설정
function handleScroll() {
  const menu = document.querySelector("#menu");
  const home = document.querySelector("#home");

  if (menu.classList.value !== "active")
    menu.style.backgroundColor = window.scrollY != 0 ? "rgba(254, 145, 141, 0.9)" : "rgba(254, 145, 141, 0)";
  if (100 - window.scrollY / 7 > 0) home.style.opacity = `${100 - window.scrollY / 7}%`;
}

window.addEventListener("scroll", handleScroll);

// menu 클릭 시 해당 항목으로 이동
const menu = document.querySelector("#menu");

function handdleActiveRemove() {
  const menu = document.querySelector("#menu");
  const menuList = document.querySelector(".menu__list");

  menu.classList.remove("active");
  menuList.classList.remove("active");
  menu.style.backgroundColor =
    window.scrollY === 0 && menu.classList.value !== "active" ? "rgba(254, 145, 141, 0)" : "rgba(254, 145, 141, 0.9)";
}

function handleMenu(event) {
  const sections = document.querySelectorAll("section");
  const menuId = event.target.innerText.toLowerCase();

  if (menuId === "kyeongmin") {
    sections[0].scrollIntoView({ behavior: "smooth" });
    handdleActiveRemove();
  } else {
    sections.forEach((section) => {
      if (menuId === section.id) {
        section.scrollIntoView({ behavior: "smooth", block: "center" });
        handdleActiveRemove();
      }
    });
  }
}

menu.addEventListener("click", handleMenu);

// home에 있는 contact me 버튼 클릭 시 Contact 항목으로 이동
const homeBtn = document.querySelector(".home__btn");

function handleHomeBtn() {
  const contact = document.querySelector("#contact");
  contact.scrollIntoView({ behavior: "smooth", block: "center" });
}

homeBtn.addEventListener("click", handleHomeBtn);

// menu에 있는 toggle버튼 클릭 시 메뉴 보기
const toggleBtn = document.querySelector(".menu__toggle");

function handleActiveToggle() {
  const menu = document.querySelector("#menu");
  const menuList = document.querySelector(".menu__list");

  menu.classList.toggle("active");
  menuList.classList.toggle("active");
  menu.style.backgroundColor =
    window.scrollY === 0 && menu.classList.value !== "active" ? "rgba(254, 145, 141, 0)" : "rgba(254, 145, 141, 0.9)";
}

toggleBtn.addEventListener("click", handleActiveToggle);
