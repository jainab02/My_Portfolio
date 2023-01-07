const emailinput = document.getElementById("email");
const passwordinput = document.getElementById("password");
const submitbutton = document.getElementById("submit");

submitbutton.addEventListener("mouseover", (button) => {
    // alert(1);
    let email = emailinput.value;
    let password = passwordinput.value;

    let validate = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)?/.test(email) && /[a-zA-Z0-9]{8}/.test(password)


    if (!validate) {
        button.target.classList.toggle("move");
        submitbutton.style.background = "red";
    } else {
        button.target.classList.add("stop");
        submitbutton.style.background = "green";
    }
})