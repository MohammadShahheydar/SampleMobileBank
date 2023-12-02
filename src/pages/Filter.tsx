import React, { useState } from 'react';
import {StyledBox} from "../ui/style/StyledBox";
import {StyledStack} from "../ui/style/StyledStack";
import {StyledButton} from "../ui/style/StyledButton";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import {StyledIconButton} from "../ui/style/StyledIconButton";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import DatePicker, { DateObject } from 'react-multi-date-picker';
import {useQuery} from "react-query";
import {transactionsApi} from "../api/service/transactions/TransactionsApi";
import Transactions from '../features/app/ui/component/Transactions';
import BackLink from "../features/app/ui/component/BackLink";

const columns: GridColDef[] = [
    {field: 'deposit', headerName: 'واریزی ها', flex: 1.5},
    {field: "withdraw", headerName: "برداشت ها", flex: 1.5},
    {field: "total", headerName: "جمع", flex: 1},
]

function Filter() {
    const [dateText, setDateText] = useState<string|undefined>(undefined);
    const [unix, setUnix] = useState<number[]>([new Date().getTime() , new Date().getTime()]);
    const {data, isLoading} = useQuery(transactionsApi().getTransactions({start: unix[0] , end: unix[1]}))

    return (
        <StyledBox>
            <BackLink/>
            <StyledStack
                flexDirection={'row'} justifyContent={'space-between'}
                width={'100%'} alignItems={'center'}
                mb={2}
            >
                <StyledIconButton>
                    <ArrowForwardIosRoundedIcon/>
                </StyledIconButton>
                <DatePicker
                    calendar={persian}
                    locale={persian_fa}
                    range
                    rangeHover
                    render={<StyledButton>{dateText ?? "تقویم"}</StyledButton>}
                    onChange={(selectedDates: DateObject[]) => {
                        if (selectedDates.length != 2) return
                        setDateText(selectedDates[0]?.format() + "-" + selectedDates?.[1]?.format())
                        setUnix([selectedDates[0]?.unix , selectedDates[1]?.unix])
                    }}
                />
                <StyledIconButton>
                    <ArrowBackIosNewRoundedIcon/>
                </StyledIconButton>
            </StyledStack>
            <DataGrid
                rows={[{id: 1, deposit: data?.data?.income_sum ?? "0.00", withdraw: data?.data?.expense_sum ?? '0.00', total: data?.data?.diff ?? '0.00'}]}
                columns={columns}
                isCellEditable={() => false}
                checkboxSelection={false}
                autoHeight
                disableColumnMenu
                hideFooterPagination
                hideFooter
            />
            <StyledBox mt={4}>
                <Transactions transactions={data?.data?.transactions} loading={isLoading}/>
            </StyledBox>
        </StyledBox>
    );
}

export default Filter;