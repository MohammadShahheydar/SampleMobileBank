import React, {ReactNode} from 'react';
import {StyledStack} from "../../../../ui/style/StyledStack";
import {StyledFab} from "../../../../ui/style/StyledFab";
import IconCash from "../../../../ui/icon/IconCash";
import {Typography} from "@mui/material";

function TransactionItem({icon , amount ,title}: {icon: ReactNode , title: string , amount: number}) {
    return (
        <StyledStack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <StyledStack flexDirection={'row'} gap={1} alignItems={'center'}>
                <StyledFab zIndex={1} borderRadius={15} width={50} height={45} backgroundColor={theme => theme.palette.primary.light}>
                    {icon}
                </StyledFab>
                <Typography variant={'body1'}>
                    {title}
                </Typography>
            </StyledStack>
            <Typography variant={'body1'}>
                {amount.toLocaleString()} ریال
            </Typography>
        </StyledStack>
    );
}

export default TransactionItem;