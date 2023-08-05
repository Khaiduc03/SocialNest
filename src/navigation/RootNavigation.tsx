import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { navigationRef } from './NavigationService';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {<AppNavigator />}
      {/* <AuthNavigator/> */}
    </NavigationContainer>
  );
};

export default RootNavigation;
