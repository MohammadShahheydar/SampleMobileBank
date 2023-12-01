import React from 'react';
import {StyledBox} from "../ui/style/StyledBox";
import {Typography} from "@mui/material";
import {useQuery} from "react-query";
import {homeApi} from "../api/service/home/HomeApi";
import Transactions from "../features/app/ui/component/transactions";

function Home() {
    const {data, isLoading} = useQuery(homeApi().getHomeData())
    return (
        <StyledBox width={'100%'}>
            <StyledBox mb={2}>
                <Typography variant={'h6'}>
                    تراکنش های اخیر
                </Typography>
            </StyledBox>
            <Transactions loading={isLoading} transactions={data?.data?.transactions}/>
        </StyledBox>
    );
}

export default Home;