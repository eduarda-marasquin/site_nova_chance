const favoritos = document.querySelectorAll(".icone-favorito");

favoritos.forEach(favorito => {
    favorito.style.transition = "transform 0.3s"; // animação suave de 0.3s

    favorito.addEventListener("click", function() {
    if(this.getAttribute("fill")==="#F25050"){
        this.setAttribute("fill", "none");
        this.style.transition = "transform 0.2s"; // animação suave
        this.style.transform = "scale(1.15)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 200);
    }
    else{
        this.style.transition = "transform 0.2s"; // animação suave
        this.style.transform = "scale(1.15)";
        this.setAttribute("fill", "#F25050");

        // Depois de 200ms, volta ao normal
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 200);
    };
});

});

