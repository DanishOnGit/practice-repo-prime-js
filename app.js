const userInput=document.querySelector("#inputDate")
const clickBtn=document.querySelector("#btnCheck")
const output=document.querySelector("#result")

const text1="Date is neither prime nor composite"
const text2="Date of birth is not prime number."
const text3="Date of birth is prime number."
const monthDays=[31,29,31,30,31,30,31,31,30,31,30,31]


function checkInputValid(){
    flag=false;
    let inputDob=userInput.value;
    // console.log(inputDob)
let split=inputDob.split("/")
console.log(split[0])
  let date=split[0];
  let month=split[1];
  let year=split[2];
if(isNaN(date)||isNaN(month)||isNaN(year)){

   
   invalidInput()
   
    
}
   else if(date<=0||date>31||month<=0||month>12||year<1000||year>9999){

    
    invalidInput()
   
}
else if(date>monthDays[month-1]){
    
    invalidInput()
}
   
else if(!Number.isInteger(Number(date)) || !Number.isInteger(Number(month))||!Number.isInteger(Number(year))){

    
    invalidInput()
    
}
    if(date==1){
    output.innerText=text1;
    
}  
if(date==2){
    output.innerText=text3;
}  else{
    for(let i=2;i<date;i++){
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
    output.innerText=""
    
}
