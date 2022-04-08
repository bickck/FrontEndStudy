const id = document.querySelector("#login-form #username");
const password = document.querySelector("#register-form #userpassword")
const registerBtn = document.querySelector("#btn-continger button")
const url = `http://localhost:8080/account/register`;

function register(event) {
    event.preventDefault();
    var result = fetch(url,{
        method :"POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            username : `${id.value}`,
            password : `${password.value}`,
        }),
    });
    console.log(result)
}
registerBtn.addEventListener("submit",register);

