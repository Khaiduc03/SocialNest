import React, {FunctionComponent} from 'react';

import {Text} from '@rneui/base';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {CheckBox} from '@rneui/themed';
import {AuthHeader, BigButton, InputCustom} from '../../../components';
import Header from '../../../components/customs/Headers';
import {routes} from '../../../constants';
import {NavigationService} from '../../../navigation';
import useStyles from './styles';

const CreateAccount: FunctionComponent = () => {
  const styles = useStyles();
  const color = ['#000', '#9544', '#000'];
  const toggleCheckbox = () => setChecked(!checked);

  const [credentials, setCredentials] = React.useState<{
    email: string;
    password: string;
  }>({
    email: 'p3nhox100',
    password: '123456',
  });

  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.body}>
            <Header
              leftIcon={true}
              onPressLeftIcon={() => {
                Keyboard.dismiss();
                NavigationService.navigate(routes.LOBBY);
              }}
            />
            <AuthHeader
              title="Create an Account 🔐"
              subTitle="Enter your  username, email & password. If you forget it, then you have to do forgot password."
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
              <Text style={styles.titleInput}>Confirm Password</Text>
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

              <View style={styles.bottom}>
                <BigButton textButton="Sign up" onPressButton={() => {}} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreateAccount;
