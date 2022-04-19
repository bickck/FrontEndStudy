const valid_id = document.querySelector("#username-container input");
const valid_password = document.querySelector("#password-container input");
const btn = document.querySelector("#btn-container button");

const user_err_msg = document.querySelector("#username-error-meg");
const pw_err_msg = document.querySelector("#password-error-msg");

var isValidId = false;
var isValidPassword = false;
var stopInterval;

function validUsername() {
    fetch("http://localhost:8080/validation/username",{
        method : "POST",
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body : `username=${valid_id.value}`
    })
    .then((response)=> response.text())
    .then((data)=>{
        if(data === "unvalid"){
            user_err_msg.classList.remove("user-hidden");
        }else{
            user_err_msg.innerText = "사용 가능한 아이디입니다.";
            user_err_msg.classList.remove("user-hidden");
        }
    });
}

function validPassword(password) {
    fetch("http://localhost:8080/validation/password",{
        method : "POST",
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        body : `password=${valid_password.value}`
    })
    .then((response)=> response.text())
    .then((data)=>{
        if(data === "unvalid"){
            user_err_msg.classList.remove("password-hidden");
        }
    });
}

valid_id.addEventListener("blur",validUsername);
valid_id.addEventListener("blur",validPassword);
