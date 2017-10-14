//var CROZ0034 = {
//    init: function(i){
//   let pandora = document.createElement("div");
//pandora.className("box");
//    pandora.appendChild("#boxes")
//    let test = document.createElement("p");
//    test.textContent = "croz0034";
//    test.appendChild("#boxes")}
//};


document.addEventListener('DOMContentLoaded', init);

function init(ev){
    let pandora = document.querySelector("#boxes");
    pandora.addEventListener("click", curiosity);
    pandora.addEventListener("mouseover", highlight);
    pandora.addEventListener("mouseout", highlight);
};

function klack(ev){
   ev.currentTarget.classList.toggle("active");
    let img = document.createElement("img");
    ev.currentTarget.appendChild(img);
    img.addEventListener('load', function(){window.alert('Bill has arrived')})
    img.src = "http://fillmurray.com/300/300";
};
function highlight(ev){
    ev.currentTarget.classList.toggle("highlight");

};
function curiosity(ev){
    ev.currentTarget.style.backgroundColor = "blue";
    ev.currentTarget.style.borderColor = "orange";
};