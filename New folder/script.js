let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-solid');
        navbar.classList.toggle('active');
}

//toggle button
$(".theme-switch").on("click", () => {
        $("body").toggleClass("light-theme");
      });