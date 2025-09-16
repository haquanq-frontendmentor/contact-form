export const setupRedioField = (id: string) => {
    const wrapper = document.querySelector(id) as HTMLElement;
    const hint = wrapper.querySelector(".radio-field__hint") as HTMLElement;

    const options = Array.from(wrapper.querySelectorAll(".radio-field__input") as NodeListOf<HTMLInputElement>);

    const helpers = {
        validate: () => {
            const notSelected: boolean = options.every((v) => v.checked === false);
            if (notSelected) {
                helpers.showError("Please select one.");
                return false;
            }

            helpers.clearError();
            return true;
        },
        showError: (message: string) => {
            hint.textContent = message;
            wrapper.setAttribute("aria-invalid", "true");
            options.forEach((input) => {
                input.setAttribute("aria-invalid", "true");
            });
        },

        clearError: () => {
            hint.textContent = "";
            wrapper.setAttribute("aria-invalid", "false");
            options.forEach((input) => {
                input.setAttribute("aria-invalid", "false");
            });
        },

        getName: () => {
            return options[0].name;
        },

        focus: () => {
            options.at(0)?.focus();
        },

        reset: () => {
            options.forEach((input) => (input.checked = false));
            helpers.clearError();
        },
    };

    const eventHandlers = {
        blurEvent: () => {
            helpers.validate();
        },
    };

    options.forEach((input) => {
        input.addEventListener("blur", eventHandlers.blurEvent);
    });

    return { ...helpers };
};
