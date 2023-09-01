
function fnRevealPassword(id) {
    const inputPassword = document.getElementById(id)
    if(inputPassword.getAttribute("type") === "password"){
        inputPassword.setAttribute("type", "text");
    } else {
        inputPassword.setAttribute("type", "password");
    }
}