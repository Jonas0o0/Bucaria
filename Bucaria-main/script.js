
document.getElementById('btn_d').addEventListener("click",btn_droite)
document.getElementById('btn_g').addEventListener("click",btn_gauche)

let nbr = 1

function btn_droite(){
    let img = document.getElementById("img_carou")
    if (nbr == 10){
        img.src = "img/1.png"
        nbr = 1
    }
    else  {
        nbr = nbr + 1
        img.src = "img/" + nbr + ".png"
    }
    console.log(nbr)
}

function btn_gauche(){
    let img = document.getElementById("img_carou")
    if (nbr == 1){
        img.src = "img/10.png"
        nbr = 10
    }
    else  {
        nbr = nbr - 1
        img.src = "img/" + nbr + ".png"
    }
    console.log(nbr)
}