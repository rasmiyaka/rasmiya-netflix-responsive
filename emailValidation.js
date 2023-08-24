document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateEmail();
});

function validateEmail() {
    const emailInput = document.getElementById("email");
    const resultMessage = document.getElementById("result");
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (emailPattern.test(emailInput.value)) {
        resultMessage.innerText = "Email is valid!";
        resultMessage.className = "text-success";
    } else {
        resultMessage.innerText = "Email is not valid!";
        resultMessage.className = "text-danger";
    }
}
