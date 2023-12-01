import React from 'react';
import {Transaction} from "../../../../api/service/home/Model";
import {SkeletonLoading} from "../../../../ui/utils/SkeletonLoading";
import {Skeleton} from "@mui/lab";
import {generateListWithKey} from "../../../../utils/generateListWithKey";
import TransactionItem from "./TransactionItem";
import IconCash from "../../../../ui/icon/IconCash";
import IconTick from "../../../../ui/icon/IconTick";
import IconBasket from "../../../../ui/icon/IconBasket";
import IconTextList from "../../../../ui/icon/IconTextList";
import {StyledStack} from "../../../../ui/style/StyledStack";

function Transactions({transactions, loading}: {
    transactions?: Transaction[],
    loading: boolean
}) {
    return (
        <StyledStack gap={2}>
            <SkeletonLoading gap={2} loading={loading} numberOfSkeleton={10} width={'100%'} skeletonItem={
                <Skeleton variant={'rounded'} animation={'wave'} width={'100%'} height={'60px'}/>
            }>
                {
                    transactions ?
                        generateListWithKey(transactions?.map(value => (
                            <TransactionItem title={value.category}
                                             icon={<IconCash color={theme => theme.palette.background.paper}/>}
                                             amount={value.amount}/>
                        ))) :
                        (
                            <>
                                <TransactionItem title={'برداشت وجه نقد'}
                                                 icon={<IconCash color={theme => theme.palette.background.paper}/>}
                                                 amount={Number('90000000')}/>
                                <TransactionItem title={'پرداخت قسط'}
                                                 icon={<IconTick color={theme => theme.palette.background.paper}/>}
                                                 amount={Number('90000000')}/>
                                <TransactionItem title={'خرید خوراکی'}
                                                 icon={<IconBasket color={theme => theme.palette.background.paper}/>}
                                                 amount={Number('90000000')}/>
                                <TransactionItem title={'پرداخت شارژ ماهانه'}
                                                 icon={<IconTextList color={theme => theme.palette.background.paper}/>}
                                                 amount={Number('90000000')}/>
                                <TransactionItem title={'برداشت وجه نقد'}
                                                 icon={<IconCash color={theme => theme.palette.background.paper}/>}
                                                 amount={Number('90000000')}/>
                                <TransactionItem title={'پرداخت قسط'}
                                                 icon={<IconTick color={theme => theme.palette.background.paper}/>}
                                                 amount={Number('90000000')}/>
                                <TransactionItem title={'خرید خوراکی'}
                                                 icon={<IconBasket color={theme => theme.palette.background.paper}/>}
                                                 amount={Number('90000000')}/>
                                <TransactionItem title={'پرداخت شارژ ماهانه'}
                                                 icon={<IconTextList color={theme => theme.palette.background.paper}/>}
                                                 amount={Number('90000000')}/>
                                <TransactionItem title={'برداشت وجه نقد'}
                                                 icon={<IconCash color={theme => theme.palette.background.paper}/>}
                                                 amount={Number('90000000')}/>
                                <TransactionItem title={'پرداخت قسط'}
                                                 icon={<IconTick color={theme => theme.palette.background.paper}/>}
                                                 amount={Number('90000000')}/>
                                <TransactionItem title={'خرید خوراکی'}
                                                 icon={<IconBasket color={theme => theme.palette.background.paper}/>}
                                                 amount={Number('90000000')}/>
                                <TransactionItem title={'پرداخت شارژ ماهانه'}
                                                 icon={<IconTextList color={theme => theme.palette.background.paper}/>}
                                                 amount={Number('90000000')}/>
                            </>
                        )
                }
            </SkeletonLoading>
        </StyledStack>
    );
}

export default Transactions;