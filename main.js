const star = document.getElementById("stars");
const moon = document.getElementById("moon");
const text = document.getElementById("text");
const explore = document.getElementById("explore");
const mb = document.getElementById("mountains_behind");
const mf = document.getElementById("mountains_front");


window.addEventListener("scroll",function(){
    const value = window.scrollY;
    star.style.left = value + "px";
    moon.style.top = value + "px";
    text.style.marginRight = value * 3 + "px";
    text.style.marginTop = value * 2.5 + "px";
    explore.style.marginTop = value * 2.5 + "px";
    mb.style.top = value * .5 + "px";
    mf.style.top = value * 1.1 + "px";
    
    
})