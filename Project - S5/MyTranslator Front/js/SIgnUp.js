function enabel(){
    document.querySelector('button').disabled=false;
}

function coPassword(){
    let nsp = document.getElementById("pass1").value;
    let rpt = document.getElementById("confirm_pass").value;
    if(nsp !==rpt){
        document.querySelector('button').disabled=true;
        document.getElementById("normal").removeAttribute("class");
        document.getElementById("normal").setAttribute("class","error");
    }
    if((nsp ===rpt)&&(nsp.length !==0 || rpt.length!==0)){
        document.getElementById("normal2").removeAttribute("class");
        document.getElementById("normal2").setAttribute("class","noterror");
    }
}
let name = document.querySelector("#name");
let Email = document.querySelector("#email");
let Password = document.querySelector("#pass1");
let CPassword = document.querySelector("#confirm_pass");

//Storing users email and password
function store()
{
    localStorage.setItem('name',name.value)
    localStorage.setItem('email',Email.value)
    localStorage.setItem('password', Password.value)
    localStorage.setItem('confirm password', CPassword.value)
}