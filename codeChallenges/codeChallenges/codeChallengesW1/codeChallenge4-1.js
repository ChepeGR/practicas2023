//Create a class Person and create 3 objects with name, age and address 
//(Names: John, Anna, Rocky, Aviva). Assign those 3 objects into an array and sort them by descending age. 
//Then create a function that will receive the array of objects as argument and return an array of boolean depending on 
//if the name is a palindrome or not (Expected result: [John: false, Anna: true, Rocky: false, Aviva: true]).

function checkPalindrome1(persona){
    const personaMinus= persona.name.toLowerCase()
    arrayPersona = personaMinus.split('');
    arrayPersonaOriginal = arrayPersona.slice();
    arrayPersona.reverse();

    for(i=0; i< arrayPersona.length ; i++){
        if(arrayPersona[i] != arrayPersonaOriginal[i]){
            console.log(personaMinus)
            return false;
        }
        else{

        }
    }

    return true;
}


class Persona{
    constructor(age, name, adress){
        this.age=age;
        this.name= name;
        this.adress;
    }
}

const persona1= new Persona(16, 'Jhon', 'salta784')
const persona2 = new Persona(65, 'Anna', 'cba342')
const persona3= new Persona(32, 'Rocky', 'apollo4')
const persona4= new Persona(23, 'Aviva', 'madrid4132')

console.log(checkPalindrome1(persona2))





