const hidden = document.querySelector(".hidden");
const form = document.querySelector("#form");
const url = `http://localhost:8080/test/json`;

function login(event) {
    
    var result = fetch(url,{
        method :"POST",
        headers: {
            "Content-Type" : "application/json",
        },
    }).then((data)=> data.text())
    .then((result)=>{
        console.log(result);
        if(result === "success"){
            hidden.classList.remove("hidden");
        }
    });
}
login();