const default_button = document.querySelector("#list-item-1 button");
const button_two = document.querySelector("#list-item-2 button");
const button_three = document.querySelector("#list-item-3 button");
const button_four = document.querySelector("#list-item-4 button");

var isDefaultClick = false;
var isButtonTwoClick = false;
var isButtonThreeClick = false;
var isButtonFourClick = false;

var prevContent;
var currContent;

function defaultBtn() {
    isDefaultClick = true;
    default_button.style.backgroundColor = "white";
    default_button.style.color = "black";
}
// 클릭 해제시
function changeBtnColorTransparentAndWhite(button) {
    button.style.backgroundColor = "transparent";
    button.style.color = "white";
}

function hidePrevContent(content) {
    
    content.style.visibility = "hidden";
}

// 클릭
function changeBtnColorWhiteAndBlack(button) {
    button.target.style.backgroundColor = "white";
    button.target.style.color = "black";
}

function showCurrDisplay(content) {
    content.style.visibility = "visible";
}

// 클릭을 해제할 버튼 체크
function hidePrevBtnAndDisplay() {

    if (isDefaultClick === true) {
        const content = document.querySelector("#content-item-1");
        isDefaultClick = false;
        changeBtnColorTransparentAndWhite(default_button);
        hidePrevContent(content);
        return;
    }
    if (isButtonTwoClick === true) {
        const content = document.querySelector("#content-item-2");
        isButtonTwoClick = false;
        changeBtnColorTransparentAndWhite(button_two);
        hidePrevContent(content);
        return;
    }
    if (isButtonThreeClick === true) {
        const content = document.querySelector("#content-item-3");
        isButtonThreeClick = false;
        changeBtnColorTransparentAndWhite(button_three);
        hidePrevContent(content);
        return;
    }
    if (isButtonFourClick === true) {
        const content = document.querySelector("#content-item-4");
        isButtonFourClick = false;
        changeBtnColorTransparentAndWhite(button_four);
        hidePrevContent(content);
        return;
    }
}

function showClickBtnAsContent(button) {

    const targetId = button.target.id;

    // 요청이 들어온 버튼 탐색
    if (targetId === "button-1") {
        const content = document.querySelector("#content-item-1");
        hidePrevBtnAndDisplay();
        changeBtnColorWhiteAndBlack(button);
        showCurrDisplay(content);
        isDefaultClick = true;
    }
    if (targetId === "button-2" ) {
        const content = document.querySelector("#content-item-2");
        hidePrevBtnAndDisplay();
        changeBtnColorWhiteAndBlack(button);
        showCurrDisplay(content);
        isButtonTwoClick = true;  
    }
    if (targetId === "button-3") {
        const content = document.querySelector("#content-item-3");
        hidePrevBtnAndDisplay();
        changeBtnColorWhiteAndBlack(button);
        showCurrDisplay(content);
        isButtonThreeClick = true;
        
    }
    if (targetId === "button-4" ) {
        const content = document.querySelector("#content-item-4");
        hidePrevBtnAndDisplay();
        changeBtnColorWhiteAndBlack(button);
        showCurrDisplay(content);
        isButtonFourClick = true;
        
    }
}

default_button.addEventListener("click", showClickBtnAsContent);
button_two.addEventListener("click", showClickBtnAsContent);
button_three.addEventListener("click", showClickBtnAsContent);
button_four.addEventListener("click", showClickBtnAsContent);

defaultBtn();