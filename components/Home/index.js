import React from 'react';
import {createAppContainer,createSwitchNavigator} from "react-navigation";

import LoginScreen from '../../screens/login/LoginScreen'
import Home from '../../screens/home/ProductsScreen'

// const TabNavigator = createSwitchNavigator({
//     Home: HomeScreen,
//     Settings: SettingsScreen,
// });

export default createSwitchNavigator({
    Home: LoginScreen,
    Settings: {
        screen: Home,
    }
});