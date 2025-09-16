export type FormControl = {
    getName: () => string;
    focus: () => void;
    reset: () => void;
    validate: () => void;
};
