import * as React from 'react';
import {styled} from '@mui/material/styles';
import {Stack, StackProps, Theme} from "@mui/material";
import {ResponsiveStyleValue} from "@mui/system";

type Overflow = "-moz-initial" | "inherit" | "initial" | "revert" | "revert-layer" | "unset" | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible"

export interface StyledStackProps extends StackProps {
    overflowY?: ResponsiveStyleValue<Overflow>
    overflowX?: ResponsiveStyleValue<Overflow>
    blurBackDrop?: string
    aspectRatio?: string
    blurFilter?: string
    opacity?: string | number
    center?: boolean
    cursor?: "auto" | "default" | "none" | "context-menu" | "help" | "pointer" | "progress" | "wait" | "cell" | "crosshair" | "text" | "vertical-text" | "alias" | "copy" | "move" | "no-drop" | "not-allowed" | "grab" | "grabbing" | "e-resize" | "n-resize" | "ne-resize" | "nw-resize" | "s-resize" | "se-resize" | "sw-resize" | "w-resize" | "ew-resize" | "ns-resize" | "nesw-resize" | "nwse-resize" | "col-resize" | "row-resize" | "all-scroll" | "zoom-in" | "zoom-out"
    inset?: number | string
    backgroundColor?: (theme: Theme) => ResponsiveStyleValue<string>,
    styledScroll?: boolean
}

export const StyledStack = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'success',
})<StyledStackProps>(({backgroundColor, aspectRatio, cursor, blurFilter, opacity, inset, center, blurBackDrop, overflowY, overflowX,styledScroll, theme}) => ({
    ...(overflowY && {overflowY: overflowY as any}),
    ...(overflowX && {overflowX: overflowX as any}),
    ...(inset && {inset: inset}),
    ...(cursor && {cursor: cursor}),
    ...(aspectRatio && {aspectRatio: aspectRatio}),
    ...(opacity && {opacity: opacity}),
    ...(center && {justifyContent: "center", alignItems: "center"}),
    ...(blurBackDrop && {backdropFilter: `blur(${blurBackDrop})`}),
    ...(blurFilter && {filter: `blur(${blurFilter})`}),
    ...(backgroundColor && {backgroundColor: backgroundColor?.(theme) as any}),
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