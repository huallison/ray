const coracao = document.querySelectorAll(".coracao");
var clique = 0


coracao.forEach(coracao => {
    coracao.addEventListener("click", function() {
        var clique = 1
        if(clique == 1) {
            const red = document.querySelector(".red")
            red.classList.add("selecionado")
        }
    })
})
