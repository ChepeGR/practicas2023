//Given this input: “3[asdf]” you have to generate an output string: “asdfasdfasdf”

function miMetodo(miString){
    
    nuevosStrings = miString.substring(0, miString.length-1) 
    nuevosStrings = nuevosStrings.split("[") 
    let resultado= "";
    for(i=0; i < nuevosStrings[0]; i++){
        resultado = resultado + nuevosStrings[1]
    }
    return resultado;
}



console.log(miMetodo("3[asdf]"))