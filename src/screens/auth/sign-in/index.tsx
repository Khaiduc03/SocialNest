import {Button} from '@rneui/themed';
import {FunctionComponent} from 'react';
import {View} from 'react-native';
import styles from './styles';




const SignIn: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Button title="Sign In" radius={12} size="lg" />
      <Button size="lg" title="Sign In With Biometric" radius={12} />
    </View>
  );
};

export default SignIn;
