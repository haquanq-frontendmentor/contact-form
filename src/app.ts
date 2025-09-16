import { setupCheckbox } from "./libs/setupCheckbox";
import { setupRedioField } from "./libs/setupRadioField";
import { setupTextField } from "./libs/setupTextField";
import { FormControl } from "./types/FormControls";

const errorMessages = {
    REQUIRED_FIELD: "This field is required",
    EMAIL: "Please enter a valid email address",
    QUERY_TYPE: "Please select a query type",
    AGREE_TERM: "",
};

const firstNameTextField = setupTextField("#first-name-text-field", {
    maxLength: 50,
    minLength: 2,
    required: true,
});

const lastNameTextField = setupTextField("#last-name-text-field", {
    maxLength: 50,
    minLength: 2,
    required: true,
});

const emailTextField = setupTextField("#email-text-field", {
    maxLength: 999,
    minLength: 0,
    required: true,
});

const messageTextField = setupTextField("#message-text-field", {
    maxLength: 999,
    minLength: 0,
    required: true,
});

const queryTypeRadioField = setupRedioField("#query-type-radio-field");

const consentCheckbox = setupCheckbox("#consent-checkbox");

const contactForm = document.querySelector("#contact-form") as HTMLFormElement;
const contactFormHint = document.querySelector(".contact__form-hint") as HTMLElement;

const successToast = document.querySelector(".toast") as HTMLElement;

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const invalidFields: FormControl[] = [];

    if (firstNameTextField.validate() === false) {
        invalidFields.push(firstNameTextField);
    }
    if (lastNameTextField.validate() === false) {
        invalidFields.push(lastNameTextField);
    }
    if (emailTextField.validate() === false) {
        invalidFields.push(emailTextField);
    }
    if (messageTextField.validate() === false) {
        invalidFields.push(messageTextField);
    }
    if (queryTypeRadioField.validate() === false) {
        invalidFields.push(queryTypeRadioField);
    }
    if (consentCheckbox.validate() === false) {
        invalidFields.push(consentCheckbox);
    }

    if (invalidFields.length !== 0) {
        contactFormHint.textContent = `Submission failed, ${
            invalidFields.length
        } errors, please check these fields: ${invalidFields.map((x) => x.getName().replaceAll("-", " ")).join(", ")}`;

        invalidFields[0].focus();
    } else {
        successToast.style.display = "block";

        setTimeout(() => {
            successToast.style.display = "";
            contactForm.reset();
        }, 3000);
    }
});
