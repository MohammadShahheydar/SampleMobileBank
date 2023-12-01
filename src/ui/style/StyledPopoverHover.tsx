import * as React from 'react';
import {styled} from '@mui/material/styles';
import {Popover, PopoverProps, Theme} from "@mui/material";
import {important} from "../../utils/ImportantStyled";

interface StyledPopoverHoverProps extends PopoverProps {
    noPointerEvent?: boolean;
    overflow?: string,
    overflowX?: string,
    overflowY?: string,
    width?: number | string
    border?: {
        borderColor: (theme: Theme) => string;
        borderSize?: number | string
    }
    blurry?: boolean
}

export const StyledPopoverHover = styled(Popover, {shouldForwardProp: (prop) => prop !== 'success',})<StyledPopoverHoverProps>(
    ({
         noPointerEvent,
         border,
         blurry,
         overflowX,
         overflowY,
         overflow,
         width,
         theme
     }) => ({
        "& .MuiPaper-root": {
            boxShadow: theme.shadows['2']
        },
        ...(blurry && {backdropFilter: "blur(.5px)"}),
        ...(border && {
            "& .MuiPaper-root": {
                border: `${border.borderSize ?? "1px"} solid ${border.borderColor(theme)}`,
            }
        }),
        ...(width && {
            "& .MuiPaper-root:not(.MuiCard-root)": {
                width: width
            }
        }),
        ...(noPointerEvent && {
            pointerEvents: 'none',
        }),
        ...(overflow && {
            "& .mui-rtl-zggbvk-MuiPaper-root-MuiPopover-paper": {
                overflow: important(overflow)
            }
        })
    }));