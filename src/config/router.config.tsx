import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@components/ui';

import { CountryPage, HomePage } from '@/views';


export const ROUTES = {
    MAIN: '/',
    COUNTRY: '/:id',
};

export const routerConfig = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                element: <CountryPage />,
                path: ROUTES.COUNTRY,
            },
        ],
    },
]);
