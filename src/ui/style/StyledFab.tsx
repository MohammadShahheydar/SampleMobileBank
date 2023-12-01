import * as React from 'react';
import {styled} from '@mui/material/styles';
import {Fab, FabProps, Theme} from "@mui/material";

interface StyledFabProps extends FabProps {
    borderRadius?: number
    rotate?: number
    zIndex?: number
    m?: number | "auto" | string
    inset?: number | string
    top?: number | string
    left?: number | string
    right?: number | string
    bottom?: number | string
    width?: number | string | "fit-content"
    height?: number | string | "fit-content"
    position?: "absolute" | "relative" | "fixed" | "sticky"
    backgroundColor?: (theme: Theme) => string
    boxShadow?: (theme: Theme) => string
    border?: {
        borderColor: (theme: Theme) => string;
        borderSize?: number
    }
}

export const StyledFab = styled(Fab, {
    shouldForwardProp: (prop) => prop !== 'success',
})<StyledFabProps>(({zIndex, m, inset, top, bottom, border, right, left, position, rotate, width, height, borderRadius, boxShadow, backgroundColor, theme}) => ({
    ...(zIndex && {zIndex: zIndex}),
    ...(top && {top: top}),
    ...(m && {margin: m}),
    ...(inset && {inset: inset}),
    ...(bottom && {bottom: bottom}),
    ...(right && {right: right}),
    ...(left && {left: left}),
    ...(borderRadius && {borderRadius: borderRadius}),
    ...(position && {position: position}),
    ...(backgroundColor && {
        backgroundColor: backgroundColor(theme),
        "&:hover": {
            backgroundColor: backgroundColor(theme)
        }
    }),
    ...(border && {border: `${border.borderSize == undefined ? "1px" : border.borderSize + "px"} solid ${border.borderColor(theme)}`}),
    ...(boxShadow && {boxShadow: boxShadow(theme)}),
    ...(width && {width: width}),
    ...(height && {
        height: height,
        minHeight: height,
    }),
    ...(rotate && {
        transition: "all 1s",
        transform: `rotate(${rotate}deg)`,
        "& svg": {
            transform: `rotate(-${rotate}deg)`
        }
    }),
}));