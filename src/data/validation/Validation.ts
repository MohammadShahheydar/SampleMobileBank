import {
    FieldHelperProps,
    FieldInputProps,
    FieldMetaProps,
    FormikErrors,
    FormikState,
    FormikTouched,
    FormikValues
} from "formik/dist/types";
import {FormikHelpers} from "formik";
import React from "react";
import {schema} from "normalizr";
import Object = schema.Object;

export enum FormElements {
    LABEL = "label",
    BUTTON = "button",
    INPUT = "input",
    SELECT_BOX = "select-box",
    DATE_PICKER = "date-picker",
    TEXT_AREA = "text-area",
    RADIO_GROUP = "radio-group",
    CHECKBOX_GROUP = "checkbox-group",
    FILE = "file"
}

export type Dependencies = {
    logicalOperator: "and" | "or"
    conditions: Array<{
        name: string;
        values: Array<string>
    }> | undefined
} | undefined
export class FormElementCoreProps {
    id?: string
    formFieldId?: number
    useWidth?: boolean
    element?: FormElements
    permission?: string
    title?: string
    readonly?: Array<number>
    name?: string
    width?: number | string
    showInExcelForm?: boolean
    dependencies?: Dependencies
    validation?: Array<{
        type: string | undefined,
        params: Array<string>
    }>
    grid?: {
        xs?: number,
        sm?: number,
        md?: number,
        lg?: number,
        xl?: number,
    }
    multiple?: boolean
    label?: string
    value?: string | Array<string>
    showLabel?: boolean
    validations?: Array<string>
    formik?: FormikValue
}


export type FormikValue<Values extends FormikValues = FormikValues> = {
    initialValues: Values;
    initialErrors: FormikErrors<unknown>;
    initialTouched: FormikTouched<unknown>;
    initialStatus: any;
    handleBlur: {
        (e: React.FocusEvent<any>): void;
        <T = any>(fieldOrEvent: T): T extends string ? ((e: any) => void) : void
    };
    handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : ((e: (string | React.ChangeEvent<any>)) => void)
    };
    handleReset: (e: any) => void;
    handleSubmit: (e?: (React.FormEvent<HTMLFormElement> | undefined)) => void;
    resetForm: (nextState?: (Partial<FormikState<Values>> | undefined)) => void;
    setErrors: (errors: FormikErrors<Values>) => void;
    setFormikState: (stateOrCb: (FormikState<Values> | ((state: FormikState<Values>) => FormikState<Values>))) => void;
    setFieldTouched: (field: string, touched?: boolean, shouldValidate?: (boolean | undefined)) => (Promise<FormikErrors<Values>> | Promise<void>);
    setFieldValue: (field: string | undefined | null, value: any, shouldValidate?: (boolean | undefined)) => (Promise<FormikErrors<Values>> | Promise<void>);
    setFieldError: (field: string, value: (string | undefined)) => void;
    setStatus: (status: any) => void;
    setSubmitting: (isSubmitting: boolean) => void;
    setTouched: (touched: FormikTouched<Values>, shouldValidate?: (boolean | undefined)) => (Promise<FormikErrors<Values>> | Promise<void>);
    setValues: (values: React.SetStateAction<Values>, shouldValidate?: (boolean | undefined)) => (Promise<FormikErrors<Values>> | Promise<void>);
    submitForm: () => Promise<any>;
    validateForm: (values?: Values) => Promise<FormikErrors<Values>>;
    validateField: (name: string) => (Promise<void> | Promise<string | undefined>);
    isValid: boolean;
    dirty: boolean;
    unregisterField: (name: string) => void;
    registerField: (name: string, {validate}: any) => void;
    getFieldProps: (nameOrOptions: any) => FieldInputProps<any>;
    getFieldMeta: (name: string) => FieldMetaProps<any>;
    getFieldHelpers: (name: string) => FieldHelperProps<any>;
    validateOnBlur: boolean; validateOnChange: boolean;
    validateOnMount: boolean; values: Values;
    errors: FormikErrors<Values>; touched: FormikTouched<Values>;
    isSubmitting: boolean;
    isValidating: boolean;
    status?: any;
    submitCount: number
}

export interface Validation<Values extends FormikValues = FormikValues , keys extends FormikValues = Values> {
    children: (
        formik: FormikValue | any,
        keys?: keys
    ) => React.ReactNode,
    onSubmit?: (values: Values, formikHelpers: FormikHelpers<Values>) => void
    onSubmitFormData?: (event?: React.FormEvent<HTMLFormElement> | undefined) => void
    initialValue?: Values,
    formSchema?: Array<FormElementCoreProps>
    formId?: string
    object?: Object,
}