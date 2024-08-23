const currentDate = new Date();
const ThisYear = currentDate.getFullYear();
const copyrightLog = String.fromCharCode(169);

document.querySelector(".last .copyrightLogo").textContent = copyrightLog;
document.querySelector(".last .date").textContent = ThisYear;



const Menu = document.querySelector("header .head .menuoptions"),
      MenuBtn = document.querySelector("header nav h3"),
      CloseBtn = document.querySelector("header .head .menuoptions .closebtn");  

MenuBtn.addEventListener("click", () =>{
Menu.classList.add("active");
})

CloseBtn.addEventListener("click", () =>{
Menu.classList.remove("active");
})

const Navs = document.querySelectorAll("header .head .menuoptions a");
Navs.forEach(Btn =>{
    Btn.addEventListener("click", () => Menu.classList.remove("active"))
} )