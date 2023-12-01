import React from 'react';
import {StyledBox} from "../ui/style/StyledBox";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import {StyledIconButton} from "../ui/style/StyledIconButton";
import {useNavigate} from "react-router-dom";
import {StyledStack} from "../ui/style/StyledStack";
import {StyledButton} from "../ui/style/StyledButton";
import {Typography} from "@mui/material";
import AddTransactionValidation from "../features/app/ui/validation/AddTransactionValidation";
import {FormikTextField} from "../ui/formik/FormikTextField";
import InputItem from "../features/app/ui/component/InputItem";

function Insert() {
    let navigate = useNavigate();
    return (
        <StyledBox>
            <StyledBox width={'100%'}>
                <StyledIconButton sx={{transform: 'rotate(180deg)'}} onClick={() => navigate(-1)}>
                    <KeyboardBackspaceRoundedIcon fontSize={'large'} color={'info'}/>
                </StyledIconButton>
            </StyledBox>
            <StyledStack flexDirection={'row'} justifyContent={'center'} gap={2}>
                <StyledButton variant={'contained'} py={1} px={4}>
                    <Typography variant={'body1'}>
                        واریزی ها
                    </Typography>
                </StyledButton>
                <StyledButton variant={'contained'} py={1} px={4} color={'secondary'}>
                    <Typography variant={'body1'} color={theme => theme.palette.primary.contrastText}>
                        برداشت ها
                    </Typography>
                </StyledButton>
            </StyledStack>
            <AddTransactionValidation>
                {(formik, keys) => (
                    <StyledStack mt={5} gap={3} justifyContent={'center'} alignItems={'center'}>
                        <InputItem label={'تاریخ'} formik={formik} key={keys?.date}/>
                        <InputItem label={'مبلغ'} formik={formik} key={keys?.price}/>
                        <InputItem label={'دسته بندی'} formik={formik} key={keys?.category}/>
                        <InputItem label={'یادداشت'} formik={formik} key={keys?.note}/>
                        <StyledButton variant={'contained'} width={'70%'} sx={{marginTop: '30px'}}>
                            <Typography whiteSpace={'nowrap'}>
                                ذخیر
                            </Typography>
                        </StyledButton>
                    </StyledStack>
                )}
            </AddTransactionValidation>
        </StyledBox>
    );
}

export default Insert;