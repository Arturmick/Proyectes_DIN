console.log("script");
function validarNombre(input){
    this.input = input;
        console.log("entra");
        let regExpIp = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;

        if(regExpIp.exec(input)) {
            alert("ok");
        } else if(!regExpIp.exec(input)){
            alert("NO");
        }  else (alert ("no funciona"));
}