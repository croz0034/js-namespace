var CROZ0034 = {
    init: function(){
        let pandora = document.getElementById("boxes");
        let cardBoard = document.createElement("div");
        cardBoard.className = "box";
        cardBoard.textContent= "croz0034y";
        pandora.appendChild(cardBoard);
        cardBoard.addEventListener("click", c);
        cardBoard.addEventListener("mouseover", this.highlight);
        cardBoard.addEventListener("mouseout", this.highlight); 
      function c(ev){
    ev.currentTarget.style.backgroundColor = "blue";
    ev.currentTarget.style.borderColor = "orange";
}

        
    },
    
highlight: function (ev){
    ev.currentTarget.classList.toggle("highlight");},

 curiosity: function (ev){
    ev.currentTarget.style.backgroundColor = "blue";
    ev.currentTarget.style.borderColor = "orange";
}
};
