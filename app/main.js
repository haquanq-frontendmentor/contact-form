const errorMessages = {
    EMPTY: "This field is required",
    EMAIL: "Please enter a valid email address",
    QUERY_TYPE: "Please select a query type",
    AGREE_TERM: "To submit this form, please consent to being contacted",
};

const firstNameInput = document.querySelector(".textbox.first-name input");
const lastNameInput = document.querySelector(".textbox.last-name input");
const emailInput = document.querySelector(".textbox.email input");
const messageInput = document.querySelector(".textbox.message textarea");
const agreementInput = document.querySelector(".checkbox.agreement input");
const queryTypeInputs = document.querySelectorAll(".query-type-wrapper .radiobox input");

const firstNameInputErrorMessage = document.querySelector(".textbox.first-name .error-message");
const lastNameInputErrorMessage = document.querySelector(".textbox.last-name .error-message");
const emailInputErrorMessage = document.querySelector(".textbox.email .error-message");
const messageInputErrorMessage = document.querySelector(".textbox.message .error-message");
const agreementInputErrorMessage = document.querySelector(".checkbox.agreement .error-message");
const queryTypeInputErrorMessage = document.querySelector(".query-type-wrapper .error-message");

document.querySelector("#contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector(".toast").classList.add("show");
});
document.addEventListener("click", () => {
    document.querySelector(".toast").classList.remove("show");
});

firstNameInput.addEventListener("invalid", (e) => {
    e.preventDefault();
    firstNameInput.blur;
    firstNameInputErrorMessage.textContent = errorMessages.EMPTY;
    firstNameInputErrorMessage.classList.add("show");
    showingError = true;
});
firstNameInput.addEventListener("focus", () => {
    firstNameInputErrorMessage.classList.remove("show");
    firstNameInputErrorMessage.textContent = "";
});

lastNameInput.addEventListener("invalid", (e) => {
    e.preventDefault();
    lastNameInput.blur();
    lastNameInputErrorMessage.textContent = errorMessages.EMPTY;
    lastNameInputErrorMessage.classList.add("show");
});
lastNameInput.addEventListener("focus", () => {
    lastNameInputErrorMessage.classList.remove("show");
    lastNameInputErrorMessage.textContent = "";
});

emailInput.addEventListener("invalid", (e) => {
    e.preventDefault();
    emailInput.blur();
    emailInputErrorMessage.textContent = errorMessages.EMAIL;
    emailInputErrorMessage.classList.add("show");
});
emailInput.addEventListener("focus", () => {
    emailInputErrorMessage.classList.remove("show");
    emailInputErrorMessage.textContent = "";
});

messageInput.addEventListener("invalid", (e) => {
    e.preventDefault();
    messageInput.blur();
    messageInputErrorMessage.textContent = errorMessages.EMPTY;
    messageInputErrorMessage.classList.add("show");
});
messageInput.addEventListener("focus", () => {
    messageInputErrorMessage.classList.remove("show");
    messageInputErrorMessage.textContent = "";
});

agreementInput.addEventListener("invalid", (e) => {
    e.preventDefault();
    agreementInput.blur();
    agreementInputErrorMessage.textContent = errorMessages.AGREE_TERM;
    agreementInputErrorMessage.classList.add("show");
});
document.querySelector(".checkbox.agreement").addEventListener("click", () => {
    agreementInputErrorMessage.classList.remove("show");
    agreementInputErrorMessage.textContent = "";
});

queryTypeInputs.forEach((element) => {
    element.addEventListener("invalid", (e) => {
        e.preventDefault();
        element.blur();
        queryTypeInputErrorMessage.textContent = errorMessages.QUERY_TYPE;
        queryTypeInputErrorMessage.classList.add("show");
    });
});

document.querySelector(".query-type-wrapper").addEventListener("click", () => {
    queryTypeInputErrorMessage.classList.remove("show");
    queryTypeInputErrorMessage.textContent = "";
});
