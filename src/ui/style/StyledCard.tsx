import {styled} from '@mui/material/styles';
import {Card, CardProps, Theme} from "@mui/material";

interface StyledCardProps extends CardProps {
    width?: number | string | "fit-content";
    minWidth?: number | string | "fit-content";
    height?: number | string | "fit-content";
    maxHeight?: number | string | "fit-content";
    p?: number | string;
    m?: number | string;
    px?: number | string;
    py?: number | string;
    my?: number | string;
    mx?: number | string;
    cursor?: "auto" | "default" | "none" | "context-menu" | "help" | "pointer" | "progress" | "wait" | "cell" | "crosshair" | "text" | "vertical-text" | "alias" | "copy" | "move" | "no-drop" | "not-allowed" | "grab" | "grabbing" | "e-resize" | "n-resize" | "ne-resize" | "nw-resize" | "s-resize" | "se-resize" | "sw-resize" | "w-resize" | "ew-resize" | "ns-resize" | "nesw-resize" | "nwse-resize" | "col-resize" | "row-resize" | "all-scroll" | "zoom-in" | "zoom-out"
    position?: "absolute" | "relative" | "fixed" | "sticky";
    zIndex?: number | string;
    label?: {
        color: (theme: Theme) => string,
        height: number | string,
        width: string | number
    }
    aspectRatio?: string
    borderRadius?: number | string
    backgroundColor?: (theme: Theme) => string
    overflow?: "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible" | "unset"
    hexBackgroundColor?: string;
    boxShadow?: (theme: Theme) => string;
    border?: {
        borderColor: (theme: Theme) => string;
        borderSize?: number
        type?: "dashed" | "solid"
    },
    styledScroll?: boolean,
    stringBoxShadow?: string,
    backdropFilter?: string
}

/**
 * it's a component that provide more attributes for showing card
 */
export const StyledCard = styled(Card, {shouldForwardProp: (prop) => prop !== 'success'})
    <StyledCardProps> (
        ({
             width,
             minWidth,
             height,
             maxHeight,
             overflow,
             aspectRatio,
             backgroundColor,
             borderRadius,
             cursor,
             zIndex,
             boxShadow,
             p,
             m,
             mx,
             my,
             px,
             py,
             border,
             label,
             position,
             hexBackgroundColor,
             styledScroll,
             stringBoxShadow,
             backdropFilter,
             theme
         }) => ({
            overflow: "hidden",
            width: "fit-content",
            boxShadow: theme.shadows[0],
            ...(aspectRatio && {aspectRatio: aspectRatio}),
            ...(position && {position: position}),
            ...(overflow && {overflow: overflow}),
            ...(backgroundColor && {backgroundColor: backgroundColor(theme)}),
            ...(hexBackgroundColor && {backgroundColor: hexBackgroundColor}),
            ...(width && {width: width}),
            ...(minWidth && {minWidth: minWidth}),
            ...(maxHeight && {maxHeight: maxHeight}),
            ...(zIndex && {zIndex: zIndex}),
            ...(cursor && {cursor: cursor}),
            ...(boxShadow && {boxShadow: boxShadow(theme)}),
            ...(stringBoxShadow && {boxShadow: stringBoxShadow}),
            ...(height && {height: height}),
            ...(borderRadius && {borderRadius: borderRadius}),
            ...(backdropFilter && {backdropFilter: backdropFilter}),
            ...(p && {padding: p}),
            ...(m && {margin: m}),
            ...(px && {paddingLeft: px, paddingRight: px,}),
            ...(py && {paddingTop: py, paddingBottom: py,}),
            ...(mx && {marginLeft: mx, marginRight: mx,}),
            ...(my && {marginTop: my, marginBottom: my,}),
            ...(border && {border: `${border.borderSize == undefined ? "1px" : border.borderSize + "px"} ${border.type ?? "solid"} ${border.borderColor(theme)}`}),
            ...(label && {
                '&:before': {
                    content: "''",
                    height: label.height,
                    width: label.width,
                    color: label.color(theme)
                }
            }),
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
        }));