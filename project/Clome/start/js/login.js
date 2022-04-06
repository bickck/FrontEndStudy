const id = document.querySelector("#login-form #userId");
const loginBtn = document.querySelector("#login-form")
const url = `http://localhost:8080/account/login`;

function account(event) {
    event.preventDefault();
    var result = fetch(url,{
        method :"POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            username : `${id.value}`,
        }),
    });
    console.log(result);
    
}

loginBtn.addEventListener("submit",account);

