export const validationMessage = {
    require: () => `این فیلد اجباریست`,
    regex: () => 'فرمت شماره همراه وارد شده صحیح نیست',
    min: (val: string | number) => `مقدار ورودی باید از ${val} بیشتر باشد`
}