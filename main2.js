
//Q1 get sum of digits
// -----------first-solution------------------------------------------------------------------------
function sumOfDigits(num){
     num= num.toString();
     var sum = 0;

     for(var i = 0 ;  i < num.length; i++){
        sum += Number(num[i]);
     }
     console.log(sum);
   }
sumOfDigits(123);

// Q2 reverse number---------------------------------------------------------------------------------
// function reverseInput(){
//     var number = 345 ;
//     number=number.toString();
    
//     var arr = [];
//     var res = "";
//     for(var i = number.length-1 ; i >= 0 ; i--){
//         arr.push(number[i]);
//         var res = res + number[i];
//         var convertToNumber = Number(res);
//     }
     

//     console.log(res);
//     console.log(typeof(convertToNumber));
// }
// reverseInput();
//Q3-------------------------------------------------------------------------------------------------
function checkPalindrome(){
    var userInput = prompt("Enter pattern to check it is pailndrome or not");
    var arr = [];
    var resOfReversedInput = "";

    for(var i = 0 ; i < userInput.length ; i++){
        arr.push(userInput[i]);
    }

  var reversedArr =   arr.reverse();
  console.log(reversedArr);

  for(var i = 0 ; i < reversedArr.length ; i++){
       resOfReversedInput += reversedArr[i];
  }

  console.log(resOfReversedInput);
  if(userInput == resOfReversedInput){
    console.log("yes it is a pailindrome ");
  }
  else{
    console.log("No , it is not");
  }
}
checkPalindrome();

// ----------onother solution for q3-------------------------------------------------------------
//  function checkPalindroom(){
//     var userInput = prompt("enter a pattern");
//    for(var i = 0 ; i < userInput.length ; i++){
//     if(userInput[i] == userInput.length-1-i ){
//         console.log("yes its a palindrome pattern ");
//         break;
//     }
// }
// console.log("No it is not a pailndrome pattern");
//  }
// checkPalindroom();
// ----------------------------------------------------------------------------------------------
//Q4
var userList = [];
function getNumOnList(){
    var userArrLen = Number(prompt("enter your list length"));

    for(var i = 0 ; i < userArrLen ; i++ ){
         var userNum =Number( prompt("enter number to put it in a list"));
          userList.push(userNum);
        }

        console.log(userList)
        ;
    var isMatchedNum = Number(prompt("please enter a num to check if exist on list or not"));

    if(userList.includes(isMatchedNum)){
        alert("yes it exist");
        console.log(isMatchedNum);
        console.log(userList.indexOf(isMatchedNum));
    }
    else{
        alert("no , not found on list");
    }
}
getNumOnList();
// ------------------onother solution for Q4--------------------------------------------------------
// function getNumOnList(){
//     var num = 50;
//     var numList = [1 , 3 , 6, 70 , 50 , 27 , 10];

//     for(var i = 0 ; i < numList.length; i++){
//         if(num === numList[i]){
//             console.log(numList[i]);
//             console.log(i);
//         }
//     }
// }
// getNumOnList();
//--------------------------------------------------------------------------------------------------------
//Q5
function removeElement(){
    var list = [1 ,2 , 3 ,4];
    list.splice(2 , 1);
    console.log(list);
}
removeElement();

//Q6
function makeNewString(){
    var str = prompt("Enter your string");
    var newString;
    if(str.length < 4){
      console.log("length of string less than four");
    }
   else{
    var firstTwoChars = str.substring(0 , 2);
    var lastTwoChars = str.substring(str.length-2 , str.length);
    var newString = firstTwoChars + lastTwoChars;
    console.log(newString);
   }
}
makeNewString();

//Q7
function zoWord(){
    var userWord = prompt("enter your word");
    var zCount = userWord.lastIndexOf("z")+1;
    var oCount = userWord.length - zCount;

    if(oCount == 2* zCount){
        console.log("yes , number of o = 2* number of z");
    }
    else{
        console.log("No , number of o != 2* number of z");
    }
}
zoWord();
//bounce question
function solvePuzzle(){
    var a = 1;
    var b = 10;
    var c = 1;
    var expectedRes = 10;
    var operation1 = a + b - c;
    var operation2 = a + b * c;
    var operation3 = a - b + c;
    var operation4 = a - b * c;
    var operation5 = a * b + c;
    var operation6 = a * b - c;

    
    if(operation1 == expectedRes){
        console.log(" operation = a + b - c  get the exepected res");
    }
    else if(operation2 == expectedRes){
        console.log(" operation = a + b * c  get the exepected res");
    }
    else if(operation3 == expectedRes){
        console.log(" operation = a - b + c  get the exepected res");
    }
    else if(operation4 == expectedRes){
        console.log(" operation = a - b * c  get the exepected res");
    }
    else if(operation5 == expectedRes){
        console.log(" operation = a * b - c  get the exepected res");
    }
    else if(operation6 == expectedRes){
        console.log(" operation = a * b - c  get the exepected res");
    }
    else{
        console.log("the operation not matched the expected result");
    }

}
solvePuzzle();