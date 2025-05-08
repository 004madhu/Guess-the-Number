// select element

var inputBox=document.getElementById("inputBox")
var result=document.getElementById("result")
var guesscount=document.getElementById("guesscount")
var noofguess=3

// generate random number from 1to 5

var randomNumber=Math.floor(Math.random()*10)+1 // 1 to 10
if(randomNumber>5)
{
    randomNumber=randomNumber-5
}

// event header function

function checkthenumber()
{
    if(inputBox.value==randomNumber){
        alert("You Got it Right, Congratulation")
        result.textContent="You are Right"
    }
    else{
        noofguess=noofguess-1
        if(noofguess==0){
            alert("You Lost, Generated Random Number is : "+randomNumber)
        }

        guesscount.textContent="Available Guess :"+noofguess
        result.textContent="You are wrong"
    }
}