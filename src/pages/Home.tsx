import React from 'react';
import {StyledBox} from "../ui/style/StyledBox";
import {Typography} from "@mui/material";
import {StyledStack} from "../ui/style/StyledStack";
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';
import {StyledFab} from "../ui/style/StyledFab";
import IconCash from "../ui/icon/IconCash";
import TransactionItem from "../features/app/ui/component/TransactionItem";
import IconTick from "../ui/icon/IconTick";
import IconBasket from "../ui/icon/IconBasket";
import IconTextList from "../ui/icon/IconTextList";

function Home() {
    return (
        <StyledBox width={'100%'}>
            <StyledBox mb={2}>
                <Typography variant={'h6'}>
                    تراکنش های اخیر
                </Typography>
            </StyledBox>
            <StyledStack gap={2}>
                <TransactionItem title={'برداشت وجه نقد'} icon={<IconCash color={theme => theme.palette.background.paper}/>} amount={Number('90000000')}/>
                <TransactionItem title={'پرداخت قسط'} icon={<IconTick color={theme => theme.palette.background.paper}/>} amount={Number('90000000')}/>
                <TransactionItem title={'خرید خوراکی'} icon={<IconBasket color={theme => theme.palette.background.paper}/>} amount={Number('90000000')}/>
                <TransactionItem title={'پرداخت شارژ ماهانه'} icon={<IconTextList color={theme => theme.palette.background.paper}/>} amount={Number('90000000')}/>
                <TransactionItem title={'برداشت وجه نقد'} icon={<IconCash color={theme => theme.palette.background.paper}/>} amount={Number('90000000')}/>
                <TransactionItem title={'پرداخت قسط'} icon={<IconTick color={theme => theme.palette.background.paper}/>} amount={Number('90000000')}/>
                <TransactionItem title={'خرید خوراکی'} icon={<IconBasket color={theme => theme.palette.background.paper}/>} amount={Number('90000000')}/>
                <TransactionItem title={'پرداخت شارژ ماهانه'} icon={<IconTextList color={theme => theme.palette.background.paper}/>} amount={Number('90000000')}/>
                <TransactionItem title={'برداشت وجه نقد'} icon={<IconCash color={theme => theme.palette.background.paper}/>} amount={Number('90000000')}/>
                <TransactionItem title={'پرداخت قسط'} icon={<IconTick color={theme => theme.palette.background.paper}/>} amount={Number('90000000')}/>
                <TransactionItem title={'خرید خوراکی'} icon={<IconBasket color={theme => theme.palette.background.paper}/>} amount={Number('90000000')}/>
                <TransactionItem title={'پرداخت شارژ ماهانه'} icon={<IconTextList color={theme => theme.palette.background.paper}/>} amount={Number('90000000')}/>

            </StyledStack>
        </StyledBox>
    );
}

export default Home;