import React from 'react';
import {Typography} from "@mui/material";
import {FormikTextField} from "../../../../ui/formik/FormikTextField";
import {StyledStack} from "../../../../ui/style/StyledStack";

function InputItem({label, formikKey, formik}: { label: string, formikKey?: string, formik: any }) {

    return (
        <StyledStack width={'100%'} flexDirection={'row'} gap={2} alignItems={'center'}>
            <Typography whiteSpace={'nowrap'}>
                {label}
            </Typography>
            <FormikTextField minHeight={0} size={'small'} formikKey={formikKey} formik={formik}
                             variant={'standard'} fullWidth/>
        </StyledStack>
    );
}

export default InputItem;