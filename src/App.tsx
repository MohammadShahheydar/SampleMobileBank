import React from 'react';
import {Helmet} from 'react-helmet';
import {CssBaseline, ThemeProvider, Typography} from "@mui/material";
import {QueryClient, QueryClientProvider} from "react-query";
import Router from "./Routes/Router";
import Rtl from "./ui/theme/providers/Rtl";
import {rootTheme} from "./ui/theme/rootTheme";
import './global.css'
require('dotenv').config()

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchIntervalInBackground: false,
            refetchOnMount: false,
            retry: false
        },
    },
})

function App() {
    return (
        <>
            <Helmet>
                <html lang={'fa'} dir={'rtl'}/>
            </Helmet>
            <QueryClientProvider client={queryClient}>
                <Rtl>
                    <ThemeProvider theme={rootTheme}>
                        <CssBaseline/>
                        <Router/>
                    </ThemeProvider>
                </Rtl>
            </QueryClientProvider>
        </>
    );
}

export default App;
