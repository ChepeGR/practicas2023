function checkPangram(string){

    const abecedario= 'abcdefghijklmnñopqrstuvwxyz'.split('');
    const arrayDelString = string.split('');
    let isPanagram = true;

    for(i=0; i < abecedario.length; i++){
        estaEsta = false;
        for(j=0; j < arrayDelString.length; j++){
            if(abecedario[i] == arrayDelString[j]){
                estaEsta = true;
                break
            }
        }
        if(estaEsta == false){
            return false;
        }
    }
    return true;

    


}


function checkPangram2(string){
    stringChars = string.toLowerCase().split('');
    const abecedario= 'abcdefghijklmnñopqrstuvwxyz'.split('');
    return abecedario.every(element => stringChars.includes(element));

}

const string1 = 'the quick brown fox jumps over the lazy dogñ';
const string2= 'where is the money, pussy ass'
console.log(checkPangram2(string2));