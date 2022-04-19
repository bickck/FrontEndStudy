
function randomInt(){
    return Math.floor(Math.random() * 9) + 1;
}

let quiz = randomInt() + "*" + randomInt();

var user = prompt(quiz + "값을 입력하세요?");

let answer = eval(quiz);

if(answer == user){
    document.write("정답!^^ <br>");
}else{
    document.write("틀렸습니다.")
}

document.write()


