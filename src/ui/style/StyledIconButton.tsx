import * as React from 'react';
import {styled} from '@mui/material/styles';
import {IconButton, IconButtonProps, Theme} from "@mui/material";

interface StyledIconButtonProps extends IconButtonProps {
    backgroundColor?: (theme: Theme) => string,
    transform?: string,
    transition?: string
}

export const StyledIconButton = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== 'success',
})<StyledIconButtonProps>(({backgroundColor, transform, transition, theme}) => ({
    ...(backgroundColor && {backgroundColor: backgroundColor?.(theme)}),
    ...(transform && {transform: transform}),
    ...(transition && {transition: transition}),
}));