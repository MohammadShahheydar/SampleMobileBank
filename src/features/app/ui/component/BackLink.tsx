import React from 'react';
import {StyledIconButton} from "../../../../ui/style/StyledIconButton";
import {routes} from "../../../../utils/routes";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import {StyledBox} from "../../../../ui/style/StyledBox";
import {useNavigate} from "react-router-dom";

function BackLink() {
    let navigate = useNavigate();

    return (
        <StyledBox width={'100%'}>
            <StyledIconButton sx={{transform: 'rotate(180deg)'}} onClick={() => navigate(routes.home())}>
                <KeyboardBackspaceRoundedIcon fontSize={'large'} color={'info'}/>
            </StyledIconButton>
        </StyledBox>
    );
}

export default BackLink;