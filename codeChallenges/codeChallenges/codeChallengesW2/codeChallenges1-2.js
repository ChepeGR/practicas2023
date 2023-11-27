//You are going to be given a word. 
//Your job is to return the middle character of the word. 
//If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle 2 characters.

function getMiddle(string){

    const arrayDeChar = string.toLowerCase().split('')
    if(arrayDeChar.length % 2 == 0){
        console.log(arrayDeChar[arrayDeChar.length/2 - 1]);
        console.log(arrayDeChar[arrayDeChar.length/2]);

    }else{
        console.log(arrayDeChar[Math.floor(arrayDeChar.length/2)]);
    }
}

function getMiddle(string){
    const arrayDeChar = string.toLowerCase().split('')
    if(arrayDeChar.length % 2 ==0){
        arrayDeChar
    }


}

getMiddle('test');
getMiddle('testing');
getMiddle('middle');
getMiddle('A');
