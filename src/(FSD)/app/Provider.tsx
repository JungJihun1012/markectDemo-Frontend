import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { Router } from './Router';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';


const Provider = () => {
    const queryClient = new QueryClient();
    return(
        <QueryClientProvider client={queryClient}>
            <GlobalStyles/>
            <RouterProvider router={Router}></RouterProvider>
        </QueryClientProvider>
    )
}

export default Provider;