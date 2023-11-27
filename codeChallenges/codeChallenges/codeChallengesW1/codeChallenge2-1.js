//Create a function that receives a String as a parameter and 
//return True or False if the String is a Pangram. (“The quick brown fox jumps over the lazy dog”).

function checkPangram(string){

    const abecedario= 'abcdefghijklmnñopqrstuvwxyz'.split('');
    const arrayDelString = string.toLowerCase().split('');
    let isPanagram = true;

    for(i=0; i < abecedario.length; i++){
        wordLoop = false;
        for(j=0; j < arrayDelString.length; j++){
            if(abecedario[i] == arrayDelString[j]){
                estaEsta = true;
                break
            }
        }
        if(wordLoop == false){
            return false;
        }
    }
    return true;
}
const string1 = 'The quick brown fox jumps over the lazy dogñ';
console.log(checkPangram(string1));