import React, { FunctionComponent } from 'react';

import { Text } from '@rneui/base';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import { CheckBox } from '@rneui/themed';
import { GoogleIcon } from '../../../assets/icons';
import {
  AuthHeader,
  BigButton,
  InputCustom,
  SmallButton,
} from '../../../components';
import Header from '../../../components/customs/Headers';
import { routes } from '../../../constants';
import { useAppDispatch } from '../../../hooks';
import { NavigationService } from '../../../navigation';
import { AuthActions } from '../../../redux/reducer';
import useStyles from './styles';

const SignIn: FunctionComponent = () => {
  const styles = useStyles();

  const toggleCheckbox = () => setChecked(!checked);

  const [credentials, setCredentials] = React.useState<{
    email: string;
    password: string;
  }>({
    email: 'p3nhox100',
    password: '123456',
  });

  const [checked, setChecked] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleSignIn = async () => {
    dispatch(
      AuthActions.handleLogin({
        email: credentials.email,
        password: credentials.password,
        device_token: '1234567890',
      }),
    );
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.body}>
            <Header
              leftIcon={true}
              onPressLeftIcon={() => {
                NavigationService.navigate(routes.LOBBY);
              }}
            />
            <AuthHeader
              title="Login 🔐"
              subTitle="Please enter your username/email and password to sign in."
            />

            <View style={styles.formContainer}>
              <Text style={styles.titleInput}>Username</Text>
              <InputCustom
                placeholder="Enter your username"
                value={credentials.email}
                onChangeText={text =>
                  setCredentials({...credentials, email: text})
                }
              />
              <Text style={styles.titleInput}>Password</Text>
              <InputCustom
                placeholder="Enter your password"
                secure={true}
                value={credentials.password}
                onChangeText={text =>
                  setCredentials({...credentials, password: text})
                }
              />
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
                <SmallButton svgIcon={<GoogleIcon />} nameIcon="" />
                <SmallButton
                  nameIcon="logo-facebook"
                  typeIcon="ionicon"
                  isIonicons
                />
              </View>
              <View style={styles.bottom}>
                <BigButton
                  textButton="Sign In"
                  onPressButton={() => {
                    handleSignIn();
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
