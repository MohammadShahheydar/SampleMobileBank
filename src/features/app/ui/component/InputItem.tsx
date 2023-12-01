import React from 'react';
import {Typography} from "@mui/material";
import {FormikTextField} from "../../../../ui/formik/FormikTextField";
import {StyledStack} from "../../../../ui/style/StyledStack";

function InputItem({label , key , formik}: {label: string , formik: any , key?: string}) {
    return (
        <StyledStack width={'100%'} flexDirection={'row'} gap={2} alignItems={'center'}>
            <Typography whiteSpace={'nowrap'}>
                {label}
            </Typography>
            <FormikTextField minHeight={0} size={'small'} formikKey={key} formik={formik}
                             variant={'standard'} fullWidth/>
        </StyledStack>
    );
}

export default InputItem;