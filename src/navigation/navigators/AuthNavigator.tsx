import React from 'react';

import {
    CardStyleInterpolators,
    StackNavigationOptions,
    createStackNavigator,
} from '@react-navigation/stack';
import { routes } from '../../constants';
import { authScreen } from '../../screens/auth';



const AuthStack = createStackNavigator();

const screenOptions: StackNavigationOptions = {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator
            screenOptions={screenOptions}
            initialRouteName={routes.SIGN_IN}
        >
            {authScreen.map((screen) => {
                return (
                    <AuthStack.Screen
                        key={screen.name}
                        name={screen.name}
                        component={screen.component}
                    />
                );
            })}
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
