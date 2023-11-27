// Dado el string [][[[][]]] (valido) y [[][]]] (no valido) y []][[] (no valido) 


function esValido(string){
    const arrayDeChar = string.slice('')
    contador = 0;

    for(i=0; i < arrayDeChar.length; i++){
        if(arrayDeChar[i]== '['){
            contador += 1;
        } else if(arrayDeChar[i]== ']'){
            contador -= 1;

            if(contador < 0){
                return false
            } 
        }
    
    }
    if(contador== 0){
        return true;
    }else return false
   
}

console.log(esValido('[][[[][]]]'))
console.log(esValido('[[][]]]'))
console.log(esValido('[]][]['))