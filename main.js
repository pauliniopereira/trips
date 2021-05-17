function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
}

var arrow = document.querySelector(".arrow");
var firstpage = document.querySelector(".directions");
var aboutbutton = document.querySelector(".buttond");
var aboutpage = document.querySelector(".aboutus");
var tripsbutton = document.querySelector(".buttond1");
var formpage = document.querySelector(".formpage");

arrow.addEventListener("click", () => {
  scrollTo(firstpage);
});

aboutbutton.addEventListener("click", () => {
  scrollTo(aboutpage);
});

tripsbutton.addEventListener("click", () => {
  scrollTo(formpage);
});
