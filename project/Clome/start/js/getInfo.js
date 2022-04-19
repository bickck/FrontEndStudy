const url = `http://localhost:8080/get/user`;

function getuser() {
    
   
    var result = fetch(url,{
        method :'POST',
        headers: {
            "Content-Type" : "application/json",
        },
    });
    result.then(Response => {
       console.log(Response);
    }).catch((error)=>{
        console.log("서버 연결에 에러가 발생했습니다.");
    });
}

getuser();
