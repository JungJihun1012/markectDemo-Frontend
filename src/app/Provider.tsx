import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { RouterProvider } from 'react-router-dom';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';


const Provider = () => {
    const queryClient = new QueryClient();
    return(
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <RouterProvider router={Router}></RouterProvider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default Provider;