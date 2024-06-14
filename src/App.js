import React from 'react';
import { Provider } from 'react-redux';

import AppRouter from './AppRouter';
import store from './app/store';

const App = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}

export default App;