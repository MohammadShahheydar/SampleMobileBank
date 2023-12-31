import React from 'react';
import {SvgIcon, Theme} from "@mui/material";
import {StyledPath} from "../style/StyledPath";

function IconCash({color}: { color: (theme: Theme) => string }) {
    return (
        <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512"
                 height="512">
                <StyledPath fillColor={theme => color?.(theme)} strokeColor={theme => 'transparent'}
                    d="M12,16c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Zm0-6c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Zm-7-3c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm13,3c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm-13,3c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm13,3c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm-.999,5c-1.64,0-3.488-.528-5.275-1.039-1.654-.473-3.365-.961-4.725-.961-2.731,0-5.549,1.303-5.578,1.315l-1.423,.666V7.158c0-1.128,.618-2.148,1.615-2.663,1.325-.683,3.333-1.496,5.386-1.496,1.662,0,3.266,.535,4.816,1.051,1.463,.488,2.845,.949,4.183,.949,1.386,0,2.517-.362,3.426-.653,.302-.097,.577-.185,.828-.251,.898-.239,1.835-.048,2.573,.52,.746,.574,1.174,1.443,1.174,2.384v12.285l-.587,.266c-.131,.06-3.233,1.449-6.413,1.449Zm-10-4c1.64,0,3.488,.528,5.275,1.039,1.655,.473,3.365,.961,4.725,.961,2,0,4.03-.665,5-1.032V7c0-.316-.144-.607-.394-.799-.142-.109-.442-.276-.842-.171-.221,.059-.464,.137-.73,.222-.986,.315-2.338,.748-4.035,.748-1.662,0-3.266-.535-4.816-1.051-1.463-.488-2.845-.949-4.183-.949-1.739,0-3.547,.798-4.47,1.273-.328,.169-.532,.508-.532,.885v10.782c1.23-.427,3.103-.94,5.002-.94Z"/>
            </svg>
        </SvgIcon>
    );
}

export default IconCash;