const fileUpload = document.querySelector("");
const url = `http://localhost:8080/save/backGroundImage`;

function register(event) {
    event.preventDefault();
    var result = fetch(url,{
        method :"POST",
        headers: {
            "Content-Type" : "multipart/form-data",
        },
        body: JSON.stringify({
            username : `${id.value}`,
            password : `${password.value}`,
        }),
    });
    console.log(result)
}
registerBtn.addEventListener("submit",register);

