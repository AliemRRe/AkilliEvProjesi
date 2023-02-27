window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("active", window.scrollY > 0);
})

const loginPage=document.querySelector(".container-2");
const loginPageBtn=document.querySelector(".login-btn");

loginPageBtn.addEventListener("click",()=>{
    loginPage.classList.add("active");
})

const loginPageClose=document.querySelector("#login-close-btn");

loginPageClose.addEventListener("click",()=>{
    loginPage.classList.remove("active");
})

const signupPage=document.querySelector(".container-3");
const signupPagebtn=document.querySelector(".signup-btn");

signupPagebtn.addEventListener("click" ,function (){
    signupPage.classList.add("active")
})

const signupPageClose=document.querySelector("#signup-close-btn");

signupPageClose.addEventListener("click",()=>{
    signupPage.classList.remove("active");
})