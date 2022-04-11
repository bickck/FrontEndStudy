const valid_id = document.querySelector("#username-container input");
const valid_password = document.querySelector("#password-container input");
const btn = document.querySelector("#btn-container button");

var isValidId = false;
var isValidPassword = false;
var stopInterval;

function validUsername(id) {
    console.log("isValidUsername(id)")
    if(id === ""){
        return false;
    }
    return true;
}

function validPassword(password) {
    console.log("isValidPassword(password)")
    if(id === ""){
        return false;
    }
    return true;
}

function isInputValidCheck(input){
    
    console.log("데이터가 들어오는지 확인중....")
}

function validCheckStart() {
    stopInterval = setInterval(isInputValidCheck,1000);
}

function validCheckStop() {
    clearInterval(stopInterval);
}

function btnListener() {
    console.log("버튼 활성화~")
    if(valid_id !== ""){
        isValidId = true;
    }
    if(valid_password !== ""){
        isValidPassword = true;
    }
    if(isValidId === true && isValidPassword === true){
        btn.disabled = true;
    }
}

//setInterval(btnListener,1000);