import React from 'react';
import {StyledStack} from "../../../../ui/style/StyledStack";
import {Typography} from "@mui/material";
import {SkeletonLoading} from "../../../../ui/utils/SkeletonLoading";
import {Skeleton} from "@mui/lab";
import {StyledBox} from "../../../../ui/style/StyledBox";

function Profile({fullName , balance , isLoading}: {fullName?: string , balance?: number , isLoading: boolean}) {
    return (
        <StyledBox position={'relative'}>
            <img
                style={{
                    position: 'absolute',
                    height: '90%',
                    left: 0,
                    top: 0,
                    opacity: .2,
                }}
                src={'/res/svg/dollar.svg'}
            />
            <StyledStack py={2} px={1} gap={5} width={'100%'} justifyContent={'flex-start'}
                         position={'relative'} zIndex={2}>
                <StyledStack>
                    <Typography variant={'caption'} color={theme => theme.palette.primary.contrastText}>
                        خوش آمدید
                    </Typography>
                    <SkeletonLoading width={'25%'} maxWidth={'200px'} loading={isLoading} numberOfSkeleton={1} skeletonItem={
                        <Skeleton variant={'text'} animation={'wave'} width={'100%'} height={'45px'}/>
                    }>
                        <Typography variant={'body1'} color={theme => theme.palette.primary.contrastText}>
                            {fullName ?? "محمد شاه حیدر"}
                        </Typography>
                    </SkeletonLoading>
                </StyledStack>
                <StyledStack>
                    <Typography variant={'caption'} color={theme => theme.palette.primary.contrastText}>
                        موجودی
                    </Typography>
                    <SkeletonLoading width={'35%'} maxWidth={'200px'} loading={isLoading} numberOfSkeleton={1} skeletonItem={
                        <Skeleton variant={'text'} animation={'wave'} width={'100%'} height={'45px'}/>
                    }>
                        <Typography variant={'body1'} color={theme => theme.palette.primary.contrastText}>
                            {(balance ?? Number('90000000')).toLocaleString()} ریال
                        </Typography>
                    </SkeletonLoading>
                </StyledStack>
            </StyledStack>
        </StyledBox>
    );
}

export default Profile;