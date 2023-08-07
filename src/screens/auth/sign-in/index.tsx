import {FunctionComponent} from 'react';

import {Text} from '@rneui/base';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import useStyles from './styles';
import Header from '../../../components/customs/Headers';
import { AuthHeader } from '../../../components';


const SignIn: FunctionComponent = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
          <View style={styles.body}>
            <Header leftIcon={true} />
            <AuthHeader/>
            
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn;
