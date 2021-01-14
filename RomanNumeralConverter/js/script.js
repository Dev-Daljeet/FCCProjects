//Calls the convertToRoman() function for conversion of number to roman numeral and display the returned string as output
function displayResult()
{
    let num = Number(document.getElementById("inputNum").value);
    if(num > 0)
    {
      document.getElementById("result").innerHTML = "Result: " + convertToRoman(num);
    }
    else
    {
      alert("Please enter a value (n>0) in textfield");
    }
}

//Takes a number as argument and returns an equivalent roman numeral 
function convertToRoman(num) {
    function getNumeral(digit, lowStr, midStr, nextStr) {
      switch (true) {
        case digit <= 3:
          return lowStr.repeat(digit);
        case digit === 4:
          return lowStr + midStr;
        case digit <= 8: // digits 5-8
          return midStr + lowStr.repeat(digit - 5);
        default: // digit 9
          return lowStr + nextStr
      }
    }
  
    let str = ""
  
    // Thousands
    str += "M".repeat(Math.floor(num/1000));
    num %= 1000;
  
    // Hundreds
    str += getNumeral(Math.floor(num/100), 'C', 'D', 'M')
    num %= 100;
  
    // Tens
    str += getNumeral(Math.floor(num/10), 'X', 'L', 'C')
    num %= 10;
  
    // Ones
    str += getNumeral(num, 'I', 'V', 'X')
  
    return str;
}