import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import Navigation from './src/Navigation';
import { name as appName } from './app.json'
import axios from 'axios';

import storeConfig from './src/store/storeConfig';

axios.defaults.baseURL = 'https://lambe-5b982.firebaseio.com/';

const store = storeConfig();
const Redux = () => (
    <Provider store={store}>
        <Navigation />
    </Provider>
)
AppRegistry.registerComponent(appName, () => Redux);
