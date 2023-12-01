import React from 'react';
import {StyledBox} from "../ui/style/StyledBox";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import {StyledIconButton} from "../ui/style/StyledIconButton";
import {useNavigate} from "react-router-dom";
import {StyledStack} from "../ui/style/StyledStack";
import {StyledButton} from "../ui/style/StyledButton";
import {Typography} from "@mui/material";
import AddTransactionValidation from "../features/app/ui/validation/AddTransactionValidation";
import InputItem from "../features/app/ui/component/InputItem";
import {FormikValue} from "../data/validation/Validation";

function Insert() {
    let navigate = useNavigate();

    function handleTypeChange(value: string, formik: FormikValue) {
        formik.setFieldValue('type', 'incom')

    }

    return (
        <StyledBox>
            <StyledBox width={'100%'}>
                <StyledIconButton sx={{transform: 'rotate(180deg)'}} onClick={() => navigate(-1)}>
                    <KeyboardBackspaceRoundedIcon fontSize={'large'} color={'info'}/>
                </StyledIconButton>
            </StyledBox>
            <AddTransactionValidation
                onSubmit={values => {
                    console.log(values)
                }}
            >
                {(formik, keys) => (
                    <StyledBox>
                        <StyledStack flexDirection={'row'} justifyContent={'center'} gap={2}>
                            <StyledButton
                                variant={'contained'} py={1} px={4}
                                color={formik.values.type == 'income' ? 'primary' : 'secondary'}
                                onClick={() => formik.setFieldValue(keys?.type, 'income')}
                            >
                                <Typography variant={'body1'}>
                                    واریزی ها
                                </Typography>
                            </StyledButton>
                            <StyledButton
                                variant={'contained'} py={1} px={4}
                                onClick={() => formik.setFieldValue(keys?.type, 'expense')}
                                color={formik.values.type == 'expense' ? 'primary' : 'secondary'}
                            >
                                <Typography variant={'body1'} color={theme => theme.palette.primary.contrastText}>
                                    برداشت ها
                                </Typography>
                            </StyledButton>
                        </StyledStack>
                        <StyledStack mt={5} gap={3} justifyContent={'center'} alignItems={'center'}>
                            <InputItem label={'تاریخ'} formik={formik} formikKey={keys?.date}/>
                            <InputItem label={'مبلغ'} formik={formik} formikKey={keys?.price}/>
                            <InputItem label={'دسته بندی'} formik={formik} formikKey={keys?.category}/>
                            <InputItem label={'یادداشت'} formik={formik} formikKey={keys?.note}/>
                            <StyledButton variant={'contained'} width={'70%'} sx={{marginTop: '35px'}}
                                          type={'submit'}>
                                <Typography whiteSpace={'nowrap'}>
                                    ذخیر
                                </Typography>
                            </StyledButton>
                        </StyledStack>
                    </StyledBox>
                )}
            </AddTransactionValidation>
        </StyledBox>
    );
}

export default Insert;