import React from 'react';
import {SvgIcon, Theme} from "@mui/material";
import { StyledPath } from '../style/StyledPath';

function IconTick({color}: { color: (theme: Theme) => string }) {
    return (
        <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512"
                 height="512">
                <StyledPath fillColor={theme => color?.(theme)} strokeColor={theme => 'transparent'}
                    d="m16.298,8.288l1.404,1.425-5.793,5.707c-.387.387-.896.58-1.407.58s-1.025-.195-1.416-.585l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701Zm7.702,3.712c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Z"/>
            </svg>
        </SvgIcon>
    );
}

export default IconTick;