console.log("script");


function validar(input, regExp){
        
        console.log("entra");
        
        if(regExp.test(input.value)) {
            
            input.classList.add("correcto");
            input.classList.remove("incorrecto");
            
        } else if(!regExp.test(input.value)){
            input.classList.add("incorrecto");
            input.classList.remove("correcto");
            
        }  else (alert ("no funciona"));
}
