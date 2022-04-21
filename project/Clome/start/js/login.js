const loginForm = document.querySelector("#login-form");
const id = document.querySelector("#login-form #username-container input");
const password = document.querySelector("#login-form #password-container input");
const loginBtn = document.querySelector("#login-form #btn-content #login")


function login(event) {
    event.preventDefault();
    const url = loginForm.action;
    const requestMethod = loginForm.method;

    var result = fetch(url, {
        method: `${requestMethod}`,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: `${id.value}`,
            password: `${password.value}`,
        }),
    });

    result.then(Response => {

        if (Response.status.toString() === "200") {

            Response.text().then((data) => {
               localStorage.setItem("u_t",data);
            });
            window.location.href = "http://127.0.0.1:5501/";
        }
    }).catch((error) => {
        alert("서버 연결에 에러가 발생했습니다." + error);
    });
}
loginBtn.addEventListener("click", login);
