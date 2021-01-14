//Calls the isPalindrome() function to check if string is palindrome or not and displays the validation result
function displayResult()
{
    let str = document.getElementById("inputText").value;
    let result =  document.getElementById("result");
    if(str == "")
    {
        alert("Please enter a value in textfield");
    }
    else
    {
        if(isPalindrome(str))
        {
            result.innerHTML = "Result: The given text is palindrome."
        }
        else
        {
            result.innerHTML = "Result: The given text is not palindrome.";
        }
    }
}

//Takes a string as input (argument) and return boolean (true/false) depending upon whether string is palindrome or not 
function isPalindrome(str)
{
    return (str.replace(/[\W_]/g, "").toLowerCase() === str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join(""));
}