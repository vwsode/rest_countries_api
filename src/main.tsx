import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { store } from '@store/store.ts';

import '@assets/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>,
);
