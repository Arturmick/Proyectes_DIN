window.onload = empezar;


function empezar() {        

    let botones = document.querySelectorAll("a");

    botones.forEach(element => {
        element.addEventListener("mouseover", anyadirUnderline);
       
    });
}

function anyadirUnderline() {
    this.classList.add("underline");    
}
