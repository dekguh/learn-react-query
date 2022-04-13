import { ThemeProvider } from '@mui/material';
import React from 'react';
import Routing from './components/utils/Routing';
import theme from './components/utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
