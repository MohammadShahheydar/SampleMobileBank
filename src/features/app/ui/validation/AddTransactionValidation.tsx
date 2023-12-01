import {Validation} from "../../../../data/validation/Validation";
import {ValidationForm} from "../../../../ui/validation/ValidationForm";
import * as yup from "yup";

export class KeysType {
    constructor(readonly date?: string, readonly price?: string, readonly category?: string, readonly note?: string) {
    }
}

export interface ValuesType {
    date?: string
    price?: string
    category?: string
    note?: string
}

export const AddTransactionValidation = (props: Validation<ValuesType, KeysType>) => {
    return ValidationForm<ValuesType, KeysType>({
        validation: props,
        validationSchema: yup.object({
        }),
        initialValues: {
            date: undefined,
            price: undefined,
            category: undefined,
            note: undefined,
        },
        emptyObjectOfValidationType: new KeysType()
    })
}

export default AddTransactionValidation;