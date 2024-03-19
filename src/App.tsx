import { RouterProvider } from 'react-router-dom';

import { useTheme } from '@/hooks';
import { routerConfig } from '@config/router.config.tsx';

const App = () => {
    const { mode } = useTheme();

    return (
        <div className={`page ${mode}`}>
            <RouterProvider router={routerConfig}>
            </RouterProvider>
        </div>
    );
};

export default App;
