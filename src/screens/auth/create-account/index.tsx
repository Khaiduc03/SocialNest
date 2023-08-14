import React, {FunctionComponent, useEffect, useState} from 'react';

import {Text} from '@rneui/base';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {CheckBox} from '@rneui/themed';
import {AuthHeader, BigButton, InputCustom} from '../../../components';
import Header from '../../../components/customs/Headers';
import {routes} from '../../../constants';
import {NavigationService} from '../../../navigation';
import useStyles from './styles';
import AvatarComponets from '../../../components/customs/Avatar';

const CreateAccount: FunctionComponent = () => {
  const styles = useStyles();
  const [isZoomed, setIsZoomed] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  const handleAvatarPress = () => {
    setIsZoomed(!isZoomed);
  };
  console.log(isZoomed);

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

            <AvatarComponets onPressAvatar={handleAvatarPress} />

            {!isZoomed && (
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
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreateAccount;
