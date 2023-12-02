import React from 'react';
import {StyledBox} from "../ui/style/StyledBox";
import {Typography} from "@mui/material";
import {useQuery} from "react-query";
import {homeApi} from "../api/service/home/HomeApi";
import Transactions from '../features/app/ui/component/Transactions';
import {StyledStack} from "../ui/style/StyledStack";
import {StyledIconButton} from "../ui/style/StyledIconButton";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {useNavigate} from "react-router-dom";
import {routes} from "../utils/routes";

function Home() {
    let navigate = useNavigate();
    const {data, isLoading} = useQuery(homeApi().getHomeData())
    return (
        <StyledBox width={'100%'}>
            <StyledStack mb={2} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant={'h6'}>
                    تراکنش های اخیر
                </Typography>
                <StyledIconButton onClick={() => navigate(routes.filter())}>
                    <FilterAltIcon color={'primary'}/>
                </StyledIconButton>
            </StyledStack>
            <Transactions loading={isLoading} transactions={data?.data?.transactions}/>
        </StyledBox>
    );
}

export default Home;