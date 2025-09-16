export const setupCheckbox = (id: string) => {
    const wrapper = document.querySelector(id) as HTMLElement;
    const input = wrapper.querySelector(".checkbox__input") as HTMLInputElement;
    const hint = wrapper.querySelector(".checkbox__hint") as HTMLElement;

    const validate = () => {
        if (input.checked === false) {
            hint.textContent = "To submit this form, please consent to being contacted";
            input.setAttribute("aria-invalid", "true");
            return false;
        }

        hint.textContent = "";
        input.setAttribute("aria-invalid", "false");
        return true;
    };

    const getName = () => {
        return input.name;
    };

    const focus = () => {
        input.focus();
    };

    const reset = () => {
        input.checked = false;
        hint.textContent = "";
        wrapper.setAttribute("aria-invalid", "false");
    };

    const handleBlurEvent = () => {
        validate();
    };

    input.addEventListener("blur", handleBlurEvent);
    return { validate, getName, focus, reset };
};
