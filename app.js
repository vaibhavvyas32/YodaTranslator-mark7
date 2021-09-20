var btnInput = document.querySelector("#btn-input"); //button
var textInput = document.querySelector("#txt-input"); //input
var textOutput = document.querySelector("#txt-output"); //output
var textInputValue = textInput.value;

var linkAPI = "https://api.funtranslations.com/translate/yoda.json";

function errorHandler(error) {
  //Error Handling Function
  console.log("error", error);
  alert("error has occured, Please try again later");
}

function translator(text) {
  return linkAPI + "?" + "text=" + text;
}

function clickEventHandler() {}

btnInput.addEventListener("click", clickEventHandler); //Button for translation processing
