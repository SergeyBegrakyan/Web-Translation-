let email = document.querySelector("#Email");
let Password = document.querySelector("#password");

//Storing users email and password
function store()
{
    localStorage.setItem('email',Email.value)
    localStorage.setItem('password', Password.value)
}




















// async function postInfo() {
//     const email = document.querySelector("#Email").innerText;
//     const password = document.querySelector("#password").innerText;
//
//     const response = await fetch("%URL%", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             email, password
//         }),
//     });
//     console.log(response.headers.get("token"));
//     const token = response.headers.get("token");
//     localStorage.setItem("token", token);
//
// }
//
// function ocPostInfo() {
//
//     postInfo()
//         .then(response => {
//             location.href = '../HTML/index.html'
//             console.log(response)
//         })
//         .catch(error => {
//             alert("Username or Password is incorrect")
//             console.log(error);
//         });
// }



// function checkLogin()
// {
//     //get set stored data
//     let emailStored = localStorage.getItem('Email')
//     let passwordStored = localStorage.getItem('password')
//
//     //data entered from login-form
//     let emailInput = document.querySelector('#Email').value
//     let passwordInput = document.querySelector('#password').value
//
//     if(emailInput != emailStored)
//     {
//         let eError = document.querySelector(".email-error-message")
//         eError.innerHTML = "Please enter valid email address"
//     }
//
//     if(passwordInput != passwordStored)
//     {
//         let pError = document.querySelector(".password-error-message")
//         pError.innerHTML = "Please enter password associated with email address"
//     }
//
// }