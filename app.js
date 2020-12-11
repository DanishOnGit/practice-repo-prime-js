var userInput=document.querySelector("#inputDate")
var clickBtn=document.querySelector("#btnCheck")
var ouput=document.querySelector("#result")


function checkInputValid(){

var split=userInput.split("/")
var date=split[0];
var month=split[1];
var year=split[2];
if(isNaN(date)||isNaN(month)||isNaN(year)){

    alert("Please enter a valid DOB.")
    checkInputValid()
}else if(date<0||date>31||month<0||month>12||year<1000||year>9999){
    alert("please enter valid DOB.")
}






}
clickBtn.addEventListener("click",checkInputValid)
