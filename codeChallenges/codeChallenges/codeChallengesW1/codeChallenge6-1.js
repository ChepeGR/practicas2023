//Given this input: “3[as2[df]]2[gh]” you have to generate an output string: “asdfdfasdfdfasdfdfghgh”

function traductor(string){
    myString = string.toLowerCase();
    console.log('INICIO')
    for(i=0; i< myString.length; i++){
        if(myString[i] ===']'){
            cierre = i;
            j=i;
            while(myString[j] !== '['){
                j--;
            }
            apertura = j;
            multiplicador = myString[j-1];

            substring='';
            originalSubstring = myString.slice(apertura-1, cierre+1)
            for(k=0; k < multiplicador; k++){
                substring += myString.slice(apertura+1, cierre)
            }   
            myString = myString.replace(originalSubstring, substring)
            console.log(myString);
            traductor(myString);
        }   
        
    }
}



 
string1 = '3[as2[df]]2[gh]';
traductor(string1)