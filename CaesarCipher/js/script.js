//Calls the rot13() function for calculation and display the decoded string as a result
function displayResult()
{
    let str = document.getElementById("inputText").value;
    if(str != "")
    {
        document.getElementById("result").innerHTML = "Decoded String: " + decodeRot13(str);
    }
    else
    {
        alert("Please enter a value in textfield");
    }
}

//Takes encoded string (cipher text) as input (argument) and returns decoded string
function decodeRot13(str) 
{
    return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}