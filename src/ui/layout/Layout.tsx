import React, { useState } from 'react';
import {StyledBox} from "../style/StyledBox";
import {StyledCard} from "../style/StyledCard";
import {StyledFab} from "../style/StyledFab";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import MenuIcon from '@mui/icons-material/Menu';
import {StyledStack} from "../style/StyledStack";
import {StyledIconButton} from "../style/StyledIconButton";
import {Collapse, Typography} from "@mui/material";
import IconMenu from "../icon/IconMenu";
function Layout() {
    const [open, setOpen] = useState(false);

    return (
        <StyledBox width={'100%'} height={'100dvh'} backgroundColor={theme => theme.palette.background.paper}>
            <StyledCard backgroundColor={theme => theme.palette.primary.main} p={10} borderRadius={10} width={'100%'} boxShadow={theme => theme.shadows[3]}>
                <StyledStack flexDirection={'row'} width={'100%'} justifyContent={'flex-start'} alignItems={'center'}>
                    <StyledIconButton onClick={() => setOpen(prevState => !prevState)}>
                        <IconMenu color={theme => theme.palette.background.paper}/>
                    </StyledIconButton>
                </StyledStack>
                <Collapse in={open}>
                    <StyledBox py={2} px={1} position={'relative'}>
                        <img
                            style={{
                                position: 'absolute',
                                height: '90%',
                                left: '0',
                                opacity: .2,
                            }}
                            src={'/res/svg/dollar.svg'}
                        />
                        {/*<StyledBox*/}
                        {/*    position={'absolute'}*/}
                        {/*    zIndex={1}*/}
                        {/*    width={'100%'}*/}
                        {/*    height={'100%'}*/}
                        {/*    // @ts-ignore*/}
                        {/*    */}
                        {/*/>*/}
                        <StyledStack gap={5} width={'100%'} justifyContent={'flex-start'} position={'relative'} zIndex={2}>
                            <StyledStack>
                                <Typography variant={'caption'} color={theme => theme.palette.primary.contrastText}>
                                    خوش آمدید
                                </Typography>
                                <Typography variant={'body1'} color={theme => theme.palette.primary.contrastText}>
                                    محمد شاه حیدر
                                </Typography>
                            </StyledStack>
                            <StyledStack>
                                <Typography variant={'caption'} color={theme => theme.palette.primary.contrastText}>
                                    موجودی
                                </Typography>
                                <Typography variant={'body1'} color={theme => theme.palette.primary.contrastText}>
                                    {Number('90000000').toLocaleString()} ریال
                                </Typography>
                            </StyledStack>
                        </StyledStack>
                    </StyledBox>
                </Collapse>
            </StyledCard>
            <StyledFab
                size={"medium"}
                color={"primary"} backgroundColor={theme => theme.palette.primary.main}
                bottom={15}
                left={15}
                position={"absolute"}
                onClick={() => {
                    alert('add trans')
                }}
            >
                <AddCircleOutlineRoundedIcon/>
            </StyledFab>
        </StyledBox>
    );
}

export default Layout;