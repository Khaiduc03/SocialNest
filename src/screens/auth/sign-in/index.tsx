
import {FunctionComponent} from 'react';
import {View} from 'react-native';
import styles from './styles';

import { Button, ThemeProvider } from '@rneui/themed';





const SignIn: FunctionComponent = () => {
  return (
    <ThemeProvider>
    <Button title="Hey!" />
  </ThemeProvider>
  );
};

export default SignIn;
