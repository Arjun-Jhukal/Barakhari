const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dateToday = new Date();
const weekDay = weekDays[dateToday.getDay()];
const day = dateToday.getDate();
const year = dateToday.getFullYear();
const month = monthNames[dateToday.getMonth()];
var displayDate = weekDay + ", " + month + " " + day + ", " + year;
document.getElementById("date").innerHTML = displayDate;

// Back To Top

let button = document.getElementById("backToTop");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Mobile Menu
function showMenu() {
  var mobileMenu = document.querySelector(".mobile-menu-wrapper");
  mobileMenu.classList.add("show-menu");
}
function closeMenu() {
  var mobileMenu = document.querySelector(".mobile-menu-wrapper");
  mobileMenu.classList.remove("show-menu");
}

// getting content from default menu and adding items to mobile menu

var menuItem = document.querySelector(".menu-items").innerHTML;
var mobileMenu = document.getElementById("mobile-menu-items");
mobileMenu.innerHTML = menuItem;
mobileMenu.style.color = "#fff";
mobileMenu.style.listStyle = "none";
mobileMenu.style.lineHeight = "2";

// Search
function showSearch() {
  var searchBox = document.querySelector(".search-wrapper");
  searchBox.classList.add("show-search");
}
function closeSearch() {
  var searchBox = document.querySelector(".search-wrapper");
  searchBox.classList.remove("show-search");
}

// Slider
$(".slider").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
