var userInput=document.querySelector("#inputDate")
var clickBtn=document.querySelector("#btnCheck")
var output=document.querySelector("#result")

var text1="Date is neither prime nor composite"
var text2="Date of birth is not prime number."
var text3="Date of birth is prime number."



function checkInputValid(){
    var inputDob=userInput.value;
    console.log(inputDob)
var split=inputDob.split("/")
console.log(split[0])
  var date=split[0];
  var month=split[1];
  var year=split[2];
if(isNaN(date)||isNaN(month)||isNaN(year)){

   
    console.log("enter sumthing valid")
    
}else if(date<0||date>31||month<0||month>12||year<1000||year>9999){
    
    
    console.log("enter sumthing valid")
}else if(!Number.isInteger(date) || !Number.isInteger(month)||!Number.isInteger(year)){
   
    console.log("enter sumthing valid")

}
   else if(date===1){
    output.innerText=text1;
    
}    else{
    for(var i=2;i<=date;i++){
        if(date%i===0){
            output.innerText=text2;

        }else{
            output.innerText=text3;
        }
    }

}

}


clickBtn.addEventListener("click",checkInputValid)
