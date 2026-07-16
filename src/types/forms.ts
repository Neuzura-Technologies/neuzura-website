export interface FormData {
    name: string;
    email: string;
    organization: string;
    service_interest: string;
    message: string;
}

export const emptyForm = (): FormData => ({
    name: "",
    email: "",
    organization: "",
    service_interest: "",
    message: "",
});