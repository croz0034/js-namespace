var CROZ0034 = {
    init: function(ev){
        let pandora = document.getElementById("boxes");
        let cardBoard = document.createElement("div");
        cardBoard.className = "box";
        cardBoard.textContent= "croz0034";
        pandora.appendChild(cardBoard);
        cardBoard.addEventListener("click", curiosity);
        cardBoard.addEventListener("mouseover", highlight);
        cardBoard.addEventListener("mouseout", highlight);},
highlight: function (ev){
    currentTarget.classList.toggle("highlight");},
curiosity: function (ev){
    currentTarget.style.backgroundColor = "blue";
    currentTarget.style.borderColor = "orange";
}
};

//
//function init(ev){
//    let pandora = document.querySelector(".box");
//    pandora.addEventListener("click", curiosity);
//    pandora.addEventListener("mouseover", highlight);
//    pandora.addEventListener("mouseout", highlight);
//};

//function highlight(ev){
//    ev.currentTarget.classList.toggle("highlight");
//
//};
//function curiosity(ev){
//    ev.currentTarget.style.backgroundColor = "blue";
//    ev.currentTarget.style.borderColor = "orange"
//};
