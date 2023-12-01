export const arrayToObject = <ValidationType>(object: any) => {
    if (object == undefined) return {} as ValidationType
    type MyTablePropsArray = Array<keyof ValidationType>
    return (Object.keys(object) as MyTablePropsArray).reduce((a, v) => ({...a, [v]: v}), {} as ValidationType)
}