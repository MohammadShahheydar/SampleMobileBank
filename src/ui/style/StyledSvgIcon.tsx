import * as React from 'react';
import {styled} from '@mui/material/styles';
import {SvgIcon, SvgIconProps} from "@mui/material";

interface StyledSvgIconProps extends SvgIconProps {
    width?: number;
    height?: number;
}

export const StyledSvgIcon = styled(SvgIcon, {
    shouldForwardProp: (prop) => prop !== 'success',
})<StyledSvgIconProps>(({width, height, theme}) => ({
    ...(width && {width: width}),
    ...(height && {height: height}),
}));