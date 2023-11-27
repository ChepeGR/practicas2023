//Write a function that checks if two Strings are Anagrams. (“Thomas Edison”, “notes said ‘Ohm’“)

function areAnagram(str1, str2){
    const newStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const newStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const str1 = 'Thomas Edison';
    const str2 = "notes said 'Ohm'";

    if(newStr1.length !== newStr2.length){
        return false;
    }

    for(let char of newStr1){
        if(!newStr2.includes(char)){
            return false;

        }
    }
    return true;
    
   

}