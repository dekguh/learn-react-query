import { createTheme } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {
    interface Palette {
        redPrimary: Palette['primary'];
    }

    interface PaletteOptions {
        redPrimary: PaletteOptions['primary'];
        bluePrimary: PaletteOptions['primary'];
        blueSecondary: PaletteOptions['primary'];
        textHeading: PaletteOptions['primary'];
        textBody: PaletteOptions['primary'];

    }
}

export default createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 576,
          md: 768,
          lg: 992,
          xl: 1280,
        },
    },
    palette: {
        redPrimary: {
            main: '#FE8C8C'
        },
        bluePrimary: {
            main: '#487BFF'
        },
        blueSecondary: {
            main: '#E3EEFF'
        },
        textHeading: {
            main: '#424242'
        },
        textBody: {
            main: '#8A8A8A'
        }
    }
})