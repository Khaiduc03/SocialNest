import React, {FunctionComponent} from 'react';

import {Text} from '@rneui/base';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import useStyles from './styles';
import Header from '../../../components/customs/Headers';
import {
  AuthHeader,
  BigButton,
  InputCustom,
  SmallButton,
} from '../../../components';
import {CheckBox, Icon} from '@rneui/themed';
import { GoogleIcon } from '../../../assets/icons';

const SignIn: FunctionComponent = () => {
  const styles = useStyles();
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.body}>
            <Header leftIcon={true} />
            <AuthHeader
              title="Login 🔐"
              subTitle="Please enter your username/email and password to sign in."
            />

            <View style={styles.formContainer}>
              <Text style={styles.titleInput}>Username</Text>
              <InputCustom placeholder="Enter your username" />
              <Text style={styles.titleInput}>Password</Text>
              <InputCustom placeholder="Enter your password" secure={true} />
              <View style={styles.checkbox}>
                <CheckBox
                  checked={checked}
                  textStyle={styles.textCheckbox}
                  onPress={toggleCheckbox}
                  title={'Remember me'}
                />
              </View>
              <View style={styles.textView}>
                <Text style={[styles.titleInput, styles.color]}>
                  Forgot Password
                </Text>
                <Text style={styles.textNor}>or continue with</Text>
              </View>
              <View style={styles.optionView}>
                <SmallButton
                 svgIcon={<GoogleIcon />}
                 nameIcon=''
                />
                <SmallButton nameIcon="logo-facebook" typeIcon="ionicon" isIonicons />
              </View>
              <View style={styles.bottom}>
                <BigButton
                  textButton="Sign In"
                  onPressButton={() => {
                    console.log('Sign In');
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignIn;
