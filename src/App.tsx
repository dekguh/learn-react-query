import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routing from './components/utils/Routing';
import theme from './components/utils/theme';

const queryClient = new QueryClient()

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  </QueryClientProvider>
  );
}

export default App;
