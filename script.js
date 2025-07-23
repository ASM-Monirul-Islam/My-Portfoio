const navBar = document.querySelector(".nav-bar");
const menu = document.querySelector(".nav-menu");
const bar = '<i class="fa-solid fa-bars"></i>';
const cross = '<i class="fa-solid fa-xmark fa-2xl"></i>';
const menuBar = document.querySelector(".menu-bar");

let isBar = true;

menu.addEventListener("click", () => {
  if (isBar) {
    menu.innerHTML = cross;
    navBar.classList.add("nav-bar-hidden");
    menuBar.classList.remove("hidden-menu-bar");
  } else {
    menu.innerHTML = bar;
    navBar.classList.remove("nav-bar-hidden");
    menuBar.classList.add("hidden-menu-bar");
  }
  isBar = !isBar;
});

// Theme Changer - need to improve more

const light = '<i class="fas fa-sun"></i>';
const dark = '<i class="fa-solid fa-moon"></i>';
const themeChanger = document.querySelectorAll(".theme-changer");
const blackColor = document.querySelectorAll(".black-color");
const navBtn = document.querySelectorAll(".nav-btn-theme");

function Light_to_dark() {
  //	Light to dark function
  themeChanger.innerHTML = dark;
  blackColor.forEach((e) => {
    e.style.backgroundColor = "black";
    e.style.color = "white";
  });
  navBtn.forEach((e) => {
    e.style.color = "white";
  });
}

function Dark_to_light() {
  //   Dark to Light Function

  blackColor.forEach((e) => {
    e.style.backgroundColor = "#cce7fc";
    e.style.color = "black";
  });
  navBtn.forEach((e) => {
    e.style.color = "black";
  });
}

let isLight = true;

themeChanger.forEach((e) => {
  e.addEventListener("click", () => {
    if (isLight) {
      Light_to_dark();
      e.innerHTML = dark;
    } else {
      e.innerHTML = light;
      Dark_to_light();
    }
    isLight = !isLight;
  });
});

// Theme changer ends here...
