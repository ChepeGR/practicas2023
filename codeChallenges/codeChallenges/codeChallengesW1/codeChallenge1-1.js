//Write a function that receives a number as a parameter (123456) and returns a String (“1+2+3+4+5+6”) as output.

function challenge1(numbers) {
    
    const numStr = numbers.toString();
  
    const numArray = numStr.split('');
   
    const formattedString = numArray.join('+');
  
    return formattedString;
  }

    const result = challenge1(123456);
    console.log(result);