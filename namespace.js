var CROZ0034 = {
    init: function(){
        let pandora = document.getElementById("boxes");
        let cardBoard = document.createElement("div");
        cardBoard.className = "box";
        cardBoard.textContent= "croz0034";
        pandora.appendChild(cardBoard);
        cardBoard.addEventListener("click", curiosity);
        cardBoard.addEventListener("mouseover", highlight);
        cardBoard.addEventListener("mouseout", highlight); 
      
        function curiosity(ev){
            ev.currentTarget.style.backgroundColor = "blue";
            ev.currentTarget.style.borderColor = "orange";
        }
        
        function highlight(ev){
            ev.currentTarget.classList.toggle("highlight");
        }
    }
<<<<<<< HEAD
=======
};
>>>>>>> 505f89f2ebfa0487d96b0e82a1b63b8e25f29cad
