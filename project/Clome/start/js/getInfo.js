const url = `http://localhost:8080/get/user`;
const loginLink = document.querySelector(".account-container .header-content");
const userManagemnetLink = document.querySelector(".account-container .user-page");
const token = localStorage.getItem("u_t");

function getuser() {
    var userId;
    var username;
    var result = fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization":`${token}`,
        },
    });
    result.then(Response => {
        Response.then((data)=>{
            console.log(data);
            
        });
    }).catch((error) => {
        console.log("서버 연결에 에러가 발생했습니다.");
    });
}

if (token !== null) {
    loginLink.style.display = "none";
    userManagemnetLink.style.display = "flex"
    getuser();
}else{
    loginLink.style.display = "flex";
    userManagemnetLink.style.display = "none"
}
