const id = document.querySelector("#login-form #username");
const password =document.querySelector("#login-form #userpassword");
const loginBtn = document.querySelector("#login-form")
const url = `http://localhost:8080/account/login`;

function login(event) {
    event.preventDefault();
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
}

loginBtn.addEventListener("submit",login);

