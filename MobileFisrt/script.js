function handleSubmit() {
    const form = document.querySelector(".Cadastro")
    const email = form.querySelector('input[name="email"]')
    const password = form.querySelector('input[name="password"]')
    const storageForm = {email:email.value,password:password.value}
    localStorage.setItem("form",JSON.stringify(storageForm))
    window.location.href="signinpage.html"
}

function getValidate(){

}