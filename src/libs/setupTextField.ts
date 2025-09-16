type TextFieldPresets = { minLength: number; maxLength: number; required: boolean };

export const setupTextField = (id: `#${string}`, preset: TextFieldPresets) => {
    const wrapper = document.querySelector(id) as HTMLElement;
    const input = wrapper.querySelector(".text-field__input") as HTMLInputElement;
    const hint = wrapper.querySelector(".text-field__hint") as HTMLParagraphElement;

    input.required = preset.required;
    input.minLength = preset.minLength;
    input.maxLength = preset.maxLength;

    const helpers = {
        validate: () => {
            let errorMessage = "";
            if (input.validity.valueMissing) {
                errorMessage = "PLease fill out this field.";
            } else if (input.validity.tooShort || input.validity.tooLong) {
                errorMessage = `Must be beetween ${input.minLength} and ${input.maxLength} characters.`;
            }

            if (errorMessage !== "") {
                helpers.showError(errorMessage);
                return false;
            }

            helpers.clearError();
            return true;
        },
        showError: (message: string) => {
            wrapper.setAttribute("aria-invalid", "true");
            input.setAttribute("aria-invalid", "true");
            hint.textContent = message;
        },

        clearError: () => {
            wrapper.setAttribute("aria-invalid", "false");
            input.setAttribute("aria-invalid", "false");
            hint.textContent = "";
        },

        getName: () => {
            return input.name;
        },

        getValue: () => {
            return input.value;
        },

        focus: () => {
            input.focus();
        },

        reset: () => {
            input.value = "";
            helpers.clearError();
        },
    };

    const eventHandlers = {
        blurEvent: () => {
            helpers.validate();
        },
    };

    input.addEventListener("blur", eventHandlers.blurEvent);
    return { ...helpers };
};
