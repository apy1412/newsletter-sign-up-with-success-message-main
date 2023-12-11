const form = document.querySelector("form")
const submit = form.querySelector(".btn")
const card = document.querySelector(".card")
const success = document.querySelector(".success")
const dismiss = success.querySelector(".dismiss")
const input = form.querySelector("#email")
const label = form.querySelector(".error")

submit.addEventListener("click", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    if(input.checkValidity()===false) {
        label.removeAttribute("hidden")
    } else {
        success.classList.remove("hide")
        card.classList.add("hide")
    }
}


dismiss.addEventListener("click", handleDismiss) 

function handleDismiss() {
    success.classList.add("hide")
    card.classList.remove("hide")
}

