const menuBtn = document.querySelector(".menu-btn");
const menuLinks = document.querySelectorAll(".menu__list-item");
const menuList = document.querySelector(".menu__list");

menuBtn.addEventListener("click", function () {
    menuList.classList.toggle("menu__list--active");
    menuBtn.classList.toggle("active");
});

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menuList.classList.remove("menu__list--active");
        menuBtn.classList.remove("active");
    });
});
