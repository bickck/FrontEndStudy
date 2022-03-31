const title = document.querySelector(".hello h1");
/*
function handleTitleClick() {
    const click = "active";
    if(title.classList.contains(click)) {
        title.classList.remove(click);
    } else{
        title.classList.add(click);
    }
    
}*/
function handleTitleClick() {
    const click = "active";
    title.classList.toggle(click);
    
}


title.addEventListener("click", handleTitleClick);