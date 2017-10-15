var CROZ0034 = {
    init: function(ev){
        let pandora = document.getElementById("boxes");
        let cardBoard = document.createElement("div");
        cardBoard.className = "box";
        cardBoard.textContent= "croz003879";
        pandora.appendChild(cardBoard);
        cardBoard.addEventListener("click", this.curiosity);
        cardBoard.addEventListener("mouseover", this.highlight);
        cardBoard.addEventListener("mouseout", this.highlight);},
    
highlight: function (ev){
    ev.currentTarget.classList.toggle("highlight");},

 curiosity: function (ev){
    ev.currentTarget.style.backgroundColor = "blue";
    ev.currentTarget.style.borderColor = "orange";
}
};
