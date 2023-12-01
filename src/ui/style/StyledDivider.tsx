import * as React from 'react';
import {styled} from '@mui/material/styles';
import {Divider, DividerProps, Theme} from "@mui/material";

interface StyledDividerProps extends DividerProps {
    borderColor?: (theme: Theme) => string
    borderWidth?: number | string | "fit-content"
    borderHeight?: number | string | "fit-content"
}

export const StyledDivider = styled(Divider, {
    shouldForwardProp: (prop) => prop !== 'success',
})<StyledDividerProps>(({borderColor, borderWidth, borderHeight, theme}) => ({
    ...(borderColor && {borderColor: borderColor(theme)}),
    ...(borderHeight && {borderHeight: borderHeight}),
    ...(borderWidth && {borderWidth: borderWidth}),
}));