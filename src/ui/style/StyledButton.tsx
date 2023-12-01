import {styled} from '@mui/material/styles';
import {LoadingButton, LoadingButtonProps} from '@mui/lab';
import {alpha} from "@mui/material";
import {important} from "../../utils/ImportantStyled";

export interface StyledButtonProps extends LoadingButtonProps {
    borderRadius?: number | "unset" | string
    glassOpacity?: number
    hoverGlass?: boolean
    leftLabel?: boolean
    rightLabel?: boolean
    width?: string | number | "fit-content"
    minWidth?: string | number
    height?: string | number | "fit-content"
    p?: string | number
    px?: string | number
    py?: string | number
    endIconSize?: number | string
    startIconSize?: number | string
    endIconRotate?: number | string
    startIconRotate?: number | string
}

export const StyledButton = styled(LoadingButton, {
    shouldForwardProp: (prop) => prop !== 'success',
})<StyledButtonProps>(({glassOpacity, borderRadius, leftLabel, rightLabel, width, height, p, px, py, endIconSize, startIconSize, endIconRotate, startIconRotate,minWidth, theme}) => ({
    paddingTop: 12,
    paddingBottom: 12,
    height: "fit-content",
    ...(borderRadius && {
        borderRadius: borderRadius
    }),
    ...(minWidth && {
        minWidth: important(minWidth)
    }),
    ...(rightLabel && {
        justifyContent: "flex-start"
    }),
    ...(leftLabel && {
        justifyContent: "flex-end"
    }),
    ...(width && {
        width: width
    }),
    ...(height && {
        height: height
    }),
    ...(p && {
        padding: important(p)
    }),
    ...(px && {
        paddingLeft: important(px),
        paddingRight: important(px),
        minWidth: "unset"
    }),
    ...(py && {
        paddingTop: important(py),
        paddingBottom: important(py),
    }),
    ...(startIconSize && {
        "& .MuiButton-startIcon": {
            "& svg": {
                fontSize: startIconSize
            }
        }
    }),
    ...(endIconSize && {
        "& .MuiButton-endIcon": {
            "& svg": {
                fontSize: endIconSize
            }
        }
    }),
    ...(startIconRotate && {
        "& .MuiButton-startIcon": {
            "& svg": {
                rotate: startIconRotate
            }
        }
    }),
    ...(endIconRotate && {
        "& .MuiButton-endIcon": {
            "& svg": {
                rotate: endIconRotate
            }
        }
    }),
    ...(glassOpacity && {
        // "&.MuiButtonBase-root": {
        boxShadow: "unset",
        backgroundColor: alpha(theme.palette.primary.main, glassOpacity),
        transition: 'all .3s linear',
        color: theme.palette.primary.main,
        "&:hover": {
            // backgroundColor: alpha(theme.palette.primary.main, glassOpacity),
            color: theme.palette.primary.contrastText
        }
        // }
    }),
}));