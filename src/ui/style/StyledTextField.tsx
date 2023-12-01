import * as React from 'react';
import {styled} from '@mui/material/styles';
import {TextField, TextFieldProps, Theme} from "@mui/material";
import {important} from "../../utils/ImportantStyled";

export type StyledTextFieldProps = {
    border?: {
        borderColor: (theme: Theme) => string;
        borderSize?: number | string
    },
    minHeight?: string|number,
    textAlign?: string
}

export const StyledTextField = styled(TextField, {
    shouldForwardProp: (prop) => prop !== 'success',
})<StyledTextFieldProps & TextFieldProps>(({border,minHeight, textAlign, theme}) => ({
    "& .MuiInputBase-root": {
        minHeight: minHeight ?? "56px",

    },
    "& .MuiInputBase-input": {
        ...(textAlign && {textAlign: important(textAlign)})
    },
    "fieldset": {
        ...(border && {
            border: important(`${border.borderSize ?? "1px"} solid ${border.borderColor(theme)}`),
        }),
    }
}));