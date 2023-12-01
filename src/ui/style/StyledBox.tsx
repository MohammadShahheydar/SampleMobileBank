import * as React from 'react';
import {styled} from '@mui/material/styles';
import {Box, BoxProps, Theme} from "@mui/material";

type Overflow = "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible"

interface StyledBoxProps extends BoxProps {
    overflowY?: Overflow
    overflowX?: Overflow
    aspectRatio?: string
    blurBackDrop?: string
    blurFilter?: string
    opacity?: string | number
    cursor?: "auto" | "default" | "none" | "context-menu" | "help" | "pointer" | "progress" | "wait" | "cell" | "crosshair" | "text" | "vertical-text" | "alias" | "copy" | "move" | "no-drop" | "not-allowed" | "grab" | "grabbing" | "e-resize" | "n-resize" | "ne-resize" | "nw-resize" | "s-resize" | "se-resize" | "sw-resize" | "w-resize" | "ew-resize" | "ns-resize" | "nesw-resize" | "nwse-resize" | "col-resize" | "row-resize" | "all-scroll" | "zoom-in" | "zoom-out"
    inset?: number | string
    backgroundColor?: (theme: Theme) => string,
    styledScroll?: boolean
}

export const StyledBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'success',
})<StyledBoxProps>(({backgroundColor, blurFilter,aspectRatio, opacity, cursor, inset, blurBackDrop, overflowY, overflowX,styledScroll, theme}) => ({
    ...(overflowY && {overflowY: overflowY}),
    ...(overflowX && {overflowX: overflowX}),
    ...(aspectRatio && {aspectRatio: aspectRatio}),
    ...(cursor && {cursor: cursor}),
    ...(inset && {inset: inset}),
    ...(opacity && {opacity: opacity}),
    ...(blurBackDrop && {backdropFilter: `blur(${blurBackDrop})`}),
    ...(blurFilter && {filter: `blur(${blurFilter})`}),
    ...(backgroundColor && {backgroundColor: backgroundColor?.(theme)}),
    ...(styledScroll && {
        '&::-webkit-scrollbar': {
            width: '3px',
            backgroundColor: '#F5F5F5',
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '3px',
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,.3)',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }
    }),
}))