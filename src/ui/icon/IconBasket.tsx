import React from 'react';
import {SvgIcon, Theme} from "@mui/material";
import { StyledPath } from '../style/StyledPath';

function IconBasket({color}: { color: (theme: Theme) => string }) {
    return (
        <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512"
                 height="512">
                <StyledPath fillColor={theme => color?.(theme)} strokeColor={theme => 'transparent'}
                    d="M20.94,8C20.44,3.51,16.62,0,12,0S3.56,3.51,3.06,8H-.02l1.92,13.42c.21,1.47,1.49,2.58,2.97,2.58h14.27c1.48,0,2.76-1.11,2.97-2.58l1.92-13.42h-3.08ZM12,2c3.52,0,6.43,2.61,6.92,6H5.08c.49-3.39,3.4-6,6.92-6Zm8.12,19.14c-.07,.49-.5,.86-.99,.86H4.87c-.49,0-.92-.37-.99-.86l-1.59-11.14H21.71l-1.59,11.14Z"/>
            </svg>
        </SvgIcon>
    );
}

export default IconBasket;