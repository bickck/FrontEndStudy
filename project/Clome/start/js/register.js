const id = document.querySelector("#register-form #username");
const password = document.querySelector("#register-form #userpassword");
const registerBtn = document.querySelector("#btn-container button");
const url = `http://localhost:8080/account/register`;

function register(event) {
    event.preventDefault();
   
    var result = fetch(url,{
        method :'POST',
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            username : `${id.value}`,
            password : `${password.value}`,
        }),
    });
    result.then(Response => {
       
        if(Response.status.toString() === "200"){
            alert("저장 성공");
            window.location.href = "http://127.0.0.1:5501/";
        }
    }).catch((error)=>{
        console.log("서버 연결에 에러가 발생했습니다.");
    });
}


registerBtn.addEventListener("click",register);

