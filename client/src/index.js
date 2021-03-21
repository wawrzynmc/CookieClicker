import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <SnackbarProvider maxSnack={3}>
                    <App />
                </SnackbarProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
