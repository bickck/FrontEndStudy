const id = document.querySelector("#form-content #username-content input");
const password =document.querySelector("#form-content #password-content input");
const loginBtn = document.querySelector("#form-content #btn-content button")
const url = `http://localhost:8080/account/login`;

function login(event) {
    event.preventDefault();
    console.log(id);
    console.log(password);
    var result = fetch(url,{
        method :"POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            username : `${id.value}`,
            password : `${password.value}`
        }),
    });
    console.log(result);
}
//loginBtn.addEventListener("click",login);
//login_test();