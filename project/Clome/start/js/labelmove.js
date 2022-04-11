// const label_id_location = document.querySelector("#username-container label");
// const label_password_location = document.querySelector("#password-container label");

const id_focus = document.querySelector("#username-container input");
const password_focus = document.querySelector("#password-container input");

function label_path(label){
    const label_path = label.path[1].id;
    let label_id = document.querySelector(`#${label_path} label`);
    return label_id;
}

function translate(labelId,locate,size){

    labelId.style.transform = `translateY(${locate}px)`;
    labelId.style.fontSize = `${size}px`;
}

function move_label(label,input) {
    let label_id = label_path(label);
    translate(label_id,-20,15);
   // validCheckStart();
}

function stop(label){
    let label_id = label_path(label);    
    if(label.target.value === ""){
        translate(label_id,0,17);
    }
    //validCheckStop();
}


id_focus.addEventListener("focus", move_label);
password_focus.addEventListener("focus", move_label);


id_focus.addEventListener("blur", stop);
password_focus.addEventListener("blur", stop);

