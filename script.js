"use strict";

var burger = document.getElementById("burger");
var sideNav = document.getElementsByClassName("side-nav")[0];
var links = document.getElementsByClassName('link');

burger.addEventListener("click", function(){
  sideNav.classList.toggle("width");
  this.classList.toggle("rotateZ");
});

window.addEventListener("resize", function(){
  if(window.innerWidth > 700){
    sideNav.classList.remove("width");
    burger.classList.remove("rotateZ");
  }
});

for (var x of links){
  x.addEventListener("click", function(){
    for(var x of links){
      x.classList.remove("active-button");
    }
    this.classList.add("active-button");
  });
}

//SwiperJS
var buttons = document.getElementsByTagName("button");
for (var x of buttons){
  x.addEventListener("click", function(){
    for(var y of buttons){
      y.classList.remove("active");
    }
    this.classList.add("active");
    var index = this.getAttribute("index");
    // var index = document.querySelector(".active").getAttribute("index");
    swiper.slideTo(index, 1000);
  });
}
