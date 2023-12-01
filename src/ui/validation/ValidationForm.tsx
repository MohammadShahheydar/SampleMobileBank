import {Validation} from "../../data/validation/Validation";
import {FormikValues} from "formik/dist/types";
import {useFormik} from "formik";
import {arrayToObject} from "../../utils/ArrayToObject";
import {ObjectSchema} from "yup";

export const ValidationForm = <ValidationType extends FormikValues = FormikValues , keys extends FormikValues = ValidationType>(props: {
    validation: Validation<ValidationType , keys>,
    validationSchema: ObjectSchema<any> | any,
    initialValues: ValidationType
    formId?: string
    emptyObjectOfValidationType: any
}) => {

    const {validation, validationSchema, initialValues, emptyObjectOfValidationType, formId} = props
    const {children, onSubmit, onSubmitFormData} = validation

    const formik = useFormik<ValidationType>({
        initialValues: initialValues,
        validationSchema: validationSchema,
        enableReinitialize: true,
        onSubmit: (values, formikHelpers) => {
            onSubmit?.(values, formikHelpers)
        },
    })

    return (
        <form
            id={formId}
            style={{height: "100%"}}
            onSubmit={event => {
                formik.handleSubmit(event)
            }}
        >
            {children(formik, arrayToObject<keys>(emptyObjectOfValidationType))}
        </form>
    )
}