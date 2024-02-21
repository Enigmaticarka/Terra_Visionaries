const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// var a = document.querySelector("#elem1");
// var image = a.getAttribute("data-image");
// console.log(image);

var elemc = document.querySelector("#elem-container");
var fix = document.querySelector("#fixed-image");
elemc.addEventListener("mouseenter", function () {
  fix.style.display = "block";
});

elemc.addEventListener("mouseleave", function () {
  fix.style.display = "none";
});

var elems = document.querySelectorAll(".elem");
// console.log(elems);
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fix.style.backgroundImage = `url(${image})`;
  });
});
