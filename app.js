var userInput=document.querySelector("#inputDate")
var clickBtn=document.querySelector("#btnCheck")
var output=document.querySelector("#result")

var text1="Date is neither prime nor composite"
var text2="Date of birth is not prime number."
var text3="Date of birth is prime number."
 var monthDays=[31,29,31,30,31,30,31,31,30,31,30,31]


function checkInputValid(){
    flag=false;
    var inputDob=userInput.value;
    // console.log(inputDob)
var split=inputDob.split("/")
console.log(split[0])
  var date=split[0];
  var month=split[1];
  var year=split[2];
if(isNaN(date)||isNaN(month)||isNaN(year)){

   console.log("enter sumthing valid")
   invalidInput()
   
    
}
   else if(date<=0||date>31||month<=0||month>12||year<1000||year>9999){

    console.log("enter sumthing valid")
    invalidInput()
   
}
else if(date>monthDays[month-1]){
    console.log("enter sumthing valid")
    invalidInput()
}
   
// else if(!Number.isInteger(Number(`${date}`)) || !Number.isInteger(Number(`${month}`))||!Number.isInteger(Number(`${year}`))){

//     console.log("enter sumthing valid")
//     invalidInput()

//    return
    

// }
    if(date==1){
    output.innerText=text1;
    
}    else{
    for(var i=2;i<date;i++){
        if(date%i==0){
            output.innerText=text2;
            break;

        }else{
            output.innerText=text3;
        }
    }

}

}


clickBtn.addEventListener("click",checkInputValid)

function invalidInput(){
    alert("Invalid Input")
}