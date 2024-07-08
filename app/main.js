const errorMessages = {
    REQUIRED_FIELD: "This field is required",
    EMAIL: "Please enter a valid email address",
    QUERY_TYPE: "Please select a query type",
    AGREE_TERM: "To submit this form, please consent to being contacted",
};

const firstNameTextbox = {
    inputElement: document.querySelector(".textbox.first-name input"),
    errorText: document.querySelector(".textbox.first-name .error-message"),
    checkValid() {
        if (this.inputElement.value == "") {
            this.showError(errorMessages.REQUIRED_FIELD);
            return false;
        }
        return true;
    },
    showError(message) {
        this.inputElement.blur();
        this.errorText.textContent = message;
        this.errorText.classList.add("show");
        this.inputElement.style.borderColor = "var(--clr-red)";
    },
    clearError() {
        this.errorText.classList.remove("show");
        this.errorText.textContent = "";
        this.inputElement.style.borderColor = null;
    },
    init() {
        this.inputElement.addEventListener("focus", () => this.clearError());
    },
};

const lastNameTextbox = {
    inputElement: document.querySelector(".textbox.last-name input"),
    errorText: document.querySelector(".textbox.last-name .error-message"),
    checkValid() {
        if (this.inputElement.value == "") {
            this.showError(errorMessages.REQUIRED_FIELD);
            return false;
        }
        return true;
    },
    showError(message) {
        this.inputElement.blur();
        this.errorText.textContent = message;
        this.errorText.classList.add("show");
        this.inputElement.style.borderColor = "var(--clr-red)";
    },
    clearError() {
        this.errorText.classList.remove("show");
        this.errorText.textContent = "";
        this.inputElement.style.borderColor = null;
    },
    init() {
        this.inputElement.addEventListener("focus", () => this.clearError());
    },
};

const emailTextbox = {
    inputElement: document.querySelector(".textbox.email input"),
    errorText: document.querySelector(".textbox.email .error-message"),
    checkValid() {
        if (this.inputElement.checkValidity()) {
            this.showError(errorMessages.EMAIL);
            return false;
        }
        return true;
    },
    showError(message) {
        this.inputElement.blur();
        this.inputElement.style.borderColor = "var(--clr-red)";
        this.errorText.textContent = message;
        this.errorText.classList.add("show");
    },
    clearError() {
        this.inputElement.style.borderColor = null;
        this.errorText.classList.remove("show");
        this.errorText.textContent = "";
    },
    init() {
        this.inputElement.addEventListener("focus", () => this.clearError());
    },
};

const messageTextbox = {
    inputElement: document.querySelector(".textbox.message textarea"),
    errorText: document.querySelector(".textbox.message .error-message"),
    checkValid() {
        if (this.inputElement.value == "") {
            this.showError(errorMessages.REQUIRED_FIELD);
            return false;
        }
        return true;
    },
    showError(message) {
        this.inputElement.blur();
        this.errorText.textContent = message;
        this.errorText.classList.add("show");
        this.inputElement.style.borderColor = "var(--clr-red)";
    },
    clearError() {
        this.errorText.classList.remove("show");
        this.errorText.textContent = "";
        this.inputElement.style.borderColor = null;
    },
    init() {
        this.inputElement.addEventListener("focus", () => this.clearError());
    },
};

const queryTypeSelect = {
    optionElements: document.querySelectorAll(".query-type__wrapper .radiobox input"),
    errorText: document.querySelector(".query-type__wrapper .error-message"),
    checkSelected() {
        const noneSelected = Array.from(this.optionElements).every((el) => !el.checked);
        if (noneSelected) {
            this.showError(errorMessages.QUERY_TYPE);
            return false;
        }
        return true;
    },
    showError(message) {
        this.errorText.textContent = message;
        this.errorText.classList.add("show");
    },
    clearError() {
        this.errorText.classList.remove("show");
        this.errorText.textContent = "";
    },
    init() {
        this.optionElements.forEach((el) => el.addEventListener("focus", () => this.clearError()));
    },
};

const agreementCheckbox = {
    inputElement: document.querySelector(".checkbox.agreement input"),
    errorText: document.querySelector(".checkbox.agreement .error-message"),
    checkSelected() {
        if (this.inputElement.checked == false) {
            this.showError(errorMessages.AGREE_TERM);
            return false;
        }
        return true;
    },
    showError(message) {
        this.inputElement.blur();
        this.errorText.textContent = message;
        this.errorText.classList.add("show");
    },
    clearError() {
        this.errorText.classList.remove("show");
        this.errorText.textContent = "";
    },
    init() {
        this.inputElement.addEventListener("focus", () => this.clearError());
    },
};

const contactForm = {
    formElement: document.querySelector("#contact-form"),
    bootstrap() {
        firstNameTextbox.init();
        lastNameTextbox.init();
        emailTextbox.init();
        queryTypeSelect.init();
        messageTextbox.init();
        agreementCheckbox.init();
    },
    init() {
        this.bootstrap();

        this.formElement.addEventListener("submit", (e) => {
            e.preventDefault();

            const valid = [
                firstNameTextbox.checkValid(),
                lastNameTextbox.checkValid(),
                emailTextbox.checkValid(),
                queryTypeSelect.checkSelected(),
                messageTextbox.checkValid(),
                agreementCheckbox.checkSelected(),
            ].every((v) => v);

            if (!valid) return;
        });

        window.addEventListener("click", () => {
            document.querySelector(".toast").classList.remove("show");
        });
    },
};

contactForm.init();

console.log(window.devicePixelRatio);
