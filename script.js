const navBar = document.querySelector(".nav-bar");
const menu = document.querySelector(".nav-menu");
const bar = '<i class="fa-solid fa-bars"></i>';
const cross = '<i class="fa-solid fa-xmark fa-2xl"></i>';
const menuBar = document.querySelector(".menu-bar");

let isBar = true;

function menuBartoggle() {
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
}

menu.addEventListener("click", () => {
  menuBartoggle();
});

// Navigator button

const btn = document.querySelectorAll("#menu-btn");
btn.forEach((e) => {
  e.addEventListener("click", () => {
    menuBartoggle();
  });
});

// Form Validation

const form = document.querySelector(".form");

const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const subjectInput = document.querySelector(".subject");
const messageInput = document.querySelector(".message");

const error = document.querySelectorAll(".error");
const nameErr = document.querySelector(".nameErr");
const emailErr = document.querySelector(".emailErr");
const subjectErr = document.querySelector(".subjectErr");
const messageErr = document.querySelector(".messageErr");
const finalErr = document.querySelector(".finalErr");

error.forEach((e) => {
  e.textContent = "";
});

nameInput.addEventListener("input", (e) => {
  const name = nameInput.value.trim();
  if (!name) {
    nameErr.textContent = "Please enter your name!";
  } else if (name.length < 3) {
    nameErr.textContent = "Name must contain at least 3 characters!";
  } else {
    nameErr.textContent = "";
  }
});

emailInput.addEventListener("input", (e) => {
  const email = emailInput.value.trim();
  const pattern = /^\S+@\S+\.\S+$/;
  if (!email) {
    emailErr.textContent = "Please enter your email!";
  } else if (!pattern.test(email)) {
    emailErr.textContent = "Invalid email format!";
  } else {
    emailErr.textContent = "";
  }
});

subjectInput.addEventListener("input", (e) => {
  const subject = subjectInput.value.trim();
  if (!subject) {
    subjectErr.textContent = "This field is required";
  } else {
    subjectErr.textContent = "";
  }
});

messageInput.addEventListener("input", (e) => {
  const message = messageInput.value.trim();
  if (!message) {
    messageErr.textContent = "Write your message";
  } else {
    messageErr.textContent = "";
  }
});

form.addEventListener("submit", (e) => {
  nameInput.dispatchEvent(new Event("input"));
  emailInput.dispatchEvent(new Event("input"));
  subjectInput.dispatchEvent(new Event("input"));
  messageInput.dispatchEvent(new Event("input"));

  if (
    nameErr.textContent ||
    emailErr.textContent ||
    subjectErr.textContent ||
    messageErr.textContent
  ) {
    e.preventDefault();
    finalErr.textContent = "Please fix the errors before submitting!";
  } else {
    finalErr.textContent = "";
  }
});

// send mail feature
(function () {
  emailjs.init("OllNTO72X5lwUHnq1");
})();
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = form.querySelector(".name").value.trim();
  const email = form.querySelector(".email").value.trim();
  const subject = form.querySelector(".subject").value.trim();
  const message = form.querySelector(".message").value.trim();
  if (!name || !email || !subject || !message) {
    form.querySelector(".finalErr").textContent = "Please fill in all fields.";
    return;
  } else {
    form.querySelector(".finalErr").textContent = "";
  }
  emailjs
    .send("service_vd0cust", "template_p5cl6f1", {
      name: name,
      email: email,
      subject: subject,
      message: message,
    })
    .then(
      function (response) {
        alert("Message sent successfully!");
        form.reset();
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.log(error);
      }
    );
});

// Project

const portfolio = document.querySelector(".portfolio");

portfolio.addEventListener("click", () => {
  alert("You are already watching it!!!");
});

const left = document.querySelector(".fa-caret-left");
const right = document.querySelector(".fa-caret-right");
const projectImg = document.querySelector(".project-image");

let n = 1;

function imageSlide(n) {
  switch (n) {
    case 1:
      projectImg.innerHTML = `<img src="educare/homepage.png">`;
      break;
    case 2:
      projectImg.innerHTML = `<img src="educare/whyeducare.png">`;
      break;
    case 3:
      projectImg.innerHTML = `<img src="educare/homefeature.png">`;
      break;
    case 4:
      projectImg.innerHTML = `<img src="educare/contactus.png">`;
      break;
    case 5:
      projectImg.innerHTML = `<img src="educare/login.png">`;
      break;
    case 6:
      projectImg.innerHTML = `<img src="educare/registration.png">`;
      break;
    case 7:
      projectImg.innerHTML = `<img src="educare/userhome.png">`;
      break;
    case 8:
      projectImg.innerHTML = `<img src="educare/userfeature.png">`;
      break;
    case 9:
      projectImg.innerHTML = `<img src="educare/dashboard.png">`;
      break;
    case 10:
      projectImg.innerHTML = `<img src="educare/taskmanager.png">`;
      break;
    case 11:
      projectImg.innerHTML = `<img src="educare/budgetplanner.png">`;
      break;
    case 12:
      projectImg.innerHTML = `<img src="educare/gpacalculator.png">`;
      break;
  }
}

right.addEventListener("click", () => {
  n++;
  if (n > 12) {
    n = 12;
  }
  imageSlide(n);
});

left.addEventListener("click", () => {
  n--;
  if (n < 1) {
    n = 1;
  }
  imageSlide(n);
});

// Theme Changer - need to improve more

const light = '<i class="fas fa-sun"></i>';
const dark = '<i class="fa-solid fa-moon"></i>';
const themeChanger = document.querySelectorAll(".theme-changer");
const bgColor = document.querySelectorAll(".bgColor");
const fontColor = document.querySelectorAll(".fontColor");
const iconColor = document.querySelectorAll(".fa-brands");
const nav = document.querySelector(".nav-bar");
const titleColor = document.querySelectorAll(".titleColor");
const input = document.querySelectorAll(".input");
const navCont = document.querySelector(".nav-container");
const bring_to_top = document.querySelector(".bring-to-top");
const formBtn = document.querySelector(".form-btn");

let width = window.innerWidth;

function toggleTheme() {
  document.body.classList.toggle("black");
  bgColor.forEach((e) => {
    e.classList.toggle("black");
  });
  
  if(width<=728) {
    navCont.classList.toggle("shadow");
  } else {
    nav.classList.toggle("shadow");
  }
}

function light_to_dark() {
  fontColor.forEach((e) => {
    e.style.color = "white";
  });

  iconColor.forEach((e) => {
    e.style.color = "white";
  });

  titleColor.forEach((e) => {
    e.style.color = "white";
  });

  form.style.border = "0.5px solid white";

  input.forEach((e)=>{
    e.style.backgroundColor = "black";
    e.style.color = "white";
  })

  messageInput.style.backgroundColor = "black";
  messageInput.style.color = "white";

  bring_to_top.style.border = "0.5px solid white";

  formBtn.style.backgroundColor = "black";
  formBtn.style.color = "white";
  formBtn.style.border = "0.5px solid white";
}

function dark_to_light() {
  fontColor.forEach((e) => {
    e.style.color = "black";
  });

  iconColor.forEach((e) => {
    e.style.color = "black";
  });

  titleColor.forEach((e) => {
    e.style.color = "rgba(0,0,0,0.6)";
  });

  form.style.border = "none";

  input.forEach((e)=>{
    e.style.backgroundColor = "white";
    e.style.color = "black";
  })

  messageInput.style.backgroundColor = "white";
  messageInput.style.color = "black";

  bring_to_top.style.border = "none";

  formBtn.style.backgroundColor = "#55b4f8";
  formBtn.style.color = "black";
  formBtn.style.border = "none";
}

let isLight = true;

themeChanger.forEach((e) => {
  e.addEventListener("click", () => {
    if (isLight) {
      // function to execute
      toggleTheme();
      light_to_dark();
      e.innerHTML = dark;
    } else {
      // function to execute
      toggleTheme();
      dark_to_light();
      e.innerHTML = light;
    }
    isLight = !isLight;
  });
});


