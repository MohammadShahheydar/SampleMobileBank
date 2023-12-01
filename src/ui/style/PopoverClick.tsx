import {StyledPopoverHover} from "../style/StyledPopoverHover";
import {MouseEvent, ReactNode, useMemo, useState} from "react";
import {Box} from "@mui/material";

export const PopoverClick = (props: {
    holder?: ReactNode,
    blurry?: boolean,
    overflow?: string,
    width?: string | number
    vertical?: "bottom" | "top",
    horizontal?: "right" | "left",
    children?: (isOpen: boolean, closePopup: () => void) => ReactNode
}) => {
    const {holder, children, blurry, overflow, width} = props

    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)
    const open = useMemo(() => Boolean(anchorEl), [anchorEl])

    const handleClick = (event: MouseEvent<HTMLDivElement>) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    return (
        <>
            <Box onClick={handleClick}>
                {holder}
            </Box>
            <StyledPopoverHover
                width={width}
                overflow={overflow}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                blurry={blurry}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: props.vertical ?? 'bottom',
                    horizontal: props.horizontal ?? 'left',
                }}
            >
                {children?.(open, handleClose)}
            </StyledPopoverHover>
        </>
    )
}