import {StyledTextField, StyledTextFieldProps} from "../style/StyledTextField";
import {TextFieldProps} from "@mui/material";
import {FormikValue} from "../../data/validation/Validation";
import {InputHTMLAttributes, useEffect} from "react";
import {getIn} from "formik";

type FormikTextFieldProps = {
    formikKey: string | undefined
    formik: FormikValue | undefined
    newValue?: string
}

const typeToInputMode = (type: InputHTMLAttributes<unknown>['type']): 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined => {
    switch (type) {
        case "number":
            return "numeric"
        case "email":
            return "email"
        default:
            return "text"
    }
}

export const FormikTextField = (props: FormikTextFieldProps & StyledTextFieldProps & TextFieldProps) => {
    const {formikKey, formik, newValue, ...rest} = props

    return (
        <StyledTextField
            {...rest}
            name={formikKey}
            value={newValue ?? formik?.values[formikKey ?? ""]}
            type={props.type}
            inputProps={{inputMode: typeToInputMode(props.type), pattern: props.type == "number" && '[0-9]*'}}
            InputLabelProps={{shrink: formik?.values[formikKey ?? ""]}}
            onChange={formik?.handleChange}
            onBlur={formik?.handleBlur}
            // InputProps={props.type == "number" ? {inputComponent: NumberSeparator as any} : {}}
            error={getIn(formik?.touched, String(formikKey)) && Boolean(getIn(formik?.errors, String(formikKey)))}
            // @ts-ignore
            helperText={getIn(formik?.touched, String(formikKey)) && getIn(formik?.errors, String(formikKey))}
        />

    )
}