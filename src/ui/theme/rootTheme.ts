import {createTheme} from "@mui/material";

export const rootTheme = createTheme({
    direction: 'rtl',
    components: {
        MuiUseMediaQuery: {
            defaultProps: {
                noSsr: true,
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
                body: {
                    margin: 0;
                }
                * {
                @font-face {
                    font-family: IRAN-SANS-X;
                    src: url('/fonts/woff2/IRANSansXFaNum-Thin.woff2') format('woff2');
                    font-weight: 100;
                    font-style: normal;
                    font-display: swap;
                }
                
                @font-face {
                    font-family: IRAN-SANS-X;
                    src: url('/fonts/woff2/IRANSansXFaNum-UltraLight.woff2') format('woff2');
                    font-weight: 200;
                    font-style: normal;
                    font-display: swap;
                }
                
                @font-face {
                    font-family: IRAN-SANS-X;
                    src: url('/fonts/woff2/IRANSansXFaNum-Light.woff2') format('woff2');
                    font-weight: 300;
                    font-style: normal;
                    font-display: swap;
                }
                
                @font-face {
                    font-family: IRAN-SANS-X;
                    src: url('/fonts/woff2/IRANSansXFaNum-Regular.woff2') format('woff2');
                    font-weight: 400;
                    font-style: normal;
                    font-display: swap;
                }
                
                @font-face {
                    font-family: IRAN-SANS-X;
                    src: url('/fonts/woff2/IRANSansXFaNum-Medium.woff2') format('woff2');
                    font-weight: 500;
                    font-style: normal;
                    font-display: swap;
                }
                
                @font-face {
                    font-family: IRAN-SANS-X;
                    src: url('/fonts/woff2/IRANSansXFaNum-DemiBold.woff2') format('woff2');
                    font-weight: 600;
                    font-style: normal;
                    font-display: swap;
                }
                
                @font-face {
                    font-family: IRAN-SANS-X;
                    src: url('/fonts/woff2/IRANSansXFaNum-Bold.woff2') format('woff2');
                    font-weight: 700;
                    font-style: normal;
                    font-display: swap;
                }
                
                @font-face {
                    font-family: IRAN-SANS-X;
                    src: url('/fonts/woff2/IRANSansXFaNum-ExtraBold.woff2') format('woff2');
                    font-weight: 800;
                    font-style: normal;
                    font-display: swap;
                }
                
                @font-face {
                    font-family: IRAN-SANS-X;
                    src: url('/fonts/woff2/IRANSansXFaNum-Black.woff2') format('woff2');
                    font-weight: 900;
                    font-style: normal;
                    font-display: swap;
                }
              `,
        },
    },
    typography: {
        fontFamily: ['IRAN-SANS-X', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"',].join(','),
    },
    shape: {
        borderRadius: 15
    },
    palette: {
        primary: {
            dark: "#071a5d",
            main: "#142f94",
            light: "#4b6bea",
            contrastText: "#fff"
        },
        secondary: {
            main: "#008bff",
        },
        warning: {
            main: "#FE9210",
        },
        info: {
            main: "#63C19F",
        },
        success: {
            main: "#9FC031",
        },
        background: {
            default: "#ffffff",
            paper: "#fdfdfd",
        },
        grey: {
            300: "#777777",
            700: "#BFBFBF",
            900: "#EEEEEE",
        },
        text: {
            primary: "#171717",
            secondary: "#87957F",
            disabled: "#999999"
        },
        error: {
            main: "#FA4778",
            dark: "#6d182d"
        }
    }
})