import * as React from 'react';
import {styled} from '@mui/material/styles';
import {Theme} from "@mui/material";

interface StyledPathProps {
    strokeColor?: (theme: Theme) => string | undefined
    fillColor?: (theme: Theme) => string
}

export const StyledPath = styled("path", {
    shouldForwardProp: (prop) => prop !== 'success',
})<StyledPathProps>(({strokeColor, fillColor, theme}) => ({
    stroke: strokeColor?.(theme) ?? theme.palette.primary.main,
    ...(fillColor && {fill: fillColor?.(theme)}),
}));