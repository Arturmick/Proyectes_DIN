console.log("script");


function validar(input, regExp){
        
        console.log("entra");
        
        if(regExp.test(input.value)) {
            alert("ok");
        } else if(!regExp.test(input.value)){
            alert("NO");
        }  else (alert ("no funciona"));
}
