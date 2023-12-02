import React, {useState} from 'react';
import {StyledBox} from "../style/StyledBox";
import {StyledCard} from "../style/StyledCard";
import {StyledFab} from "../style/StyledFab";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import {StyledStack} from "../style/StyledStack";
import {StyledIconButton} from "../style/StyledIconButton";
import {Collapse, Typography} from "@mui/material";
import IconMenu from "../icon/IconMenu";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {routes} from "../../utils/routes";
import {useQuery} from "react-query";
import {homeApi} from "../../api/service/home/HomeApi";
import {SkeletonLoading} from "../utils/SkeletonLoading";
import {Skeleton} from "@mui/lab";
import Profile from "../../features/app/ui/component/Profile";

function Layout() {
    const [open, setOpen] = useState(false);
    let navigate = useNavigate();
    let location = useLocation();
    const {data, isLoading} = useQuery(homeApi().getHomeData())

    return (
        <StyledBox maxWidth={'500px'} mx={'auto'} position={'relative'} styledScroll width={'100%'} height={'100dvh'}
                   overflow={'auto'} backgroundColor={theme => theme.palette.background.paper}>
            <StyledCard backgroundColor={theme => theme.palette.primary.main} p={6} borderRadius={10} width={'100%'}
                        boxShadow={theme => theme.shadows[3]}>
                <StyledStack flexDirection={'row'} width={'100%'} justifyContent={'flex-start'} alignItems={'center'}>
                    <StyledIconButton onClick={() => setOpen(prevState => !prevState)}>
                        <IconMenu color={theme => theme.palette.background.paper}/>
                    </StyledIconButton>
                </StyledStack>
                <Collapse in={open}>
                    <Profile fullName={data?.data?.fullname} balance={data?.data?.balance}/>
                </Collapse>
            </StyledCard>
            <StyledBox p={4}>
                <Outlet/>
            </StyledBox>
            {
                !location.pathname.includes(routes.add()) && (
                    <StyledFab
                        size={"medium"}
                        color={"primary"} backgroundColor={theme => theme.palette.primary.main}
                        bottom={10}
                        left={15}
                        position={"fixed"}
                        onClick={() => {
                            navigate(routes.add())
                        }}
                    >
                        <AddCircleOutlineRoundedIcon/>
                    </StyledFab>
                )
            }
        </StyledBox>
    );
}

export default Layout;