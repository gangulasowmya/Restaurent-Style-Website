const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen ? "bx bx-window-close" : "bx bx-menu");

});
navLinks.addEventListener("click",(e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","bx bx-menu");
});

const scrollRevealOption ={
    distance:"50px",
    origin:"bottom",
    duration:1000,
};
ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    orgin:"right",
});
ScrollReveal().reveal(".header_content h2",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".order_card",{
    ...scrollRevealOption,
    interval:500,
});
ScrollReveal().reveal(".event_content",{
    
    duration:1000,
});
