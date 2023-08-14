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

import AvatarComponets from '../../../components/customs/Avatar';
import useStyles from './styles';

const UpdateProfile: FunctionComponent = () => {
  const styles = useStyles();
  const [isZoomed, setIsZoomed] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  const handleAvatarPress = () => {
    setIsZoomed(!isZoomed);
  };
  console.log(isZoomed);



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
              title="Complete Your Profile 🔐"
              subTitle="Don’t worry, only you can see your personal
              data. No one else will be able to see it.
              "
            />

            <AvatarComponets onPressAvatar={handleAvatarPress} />

            {!isZoomed && (
              <View style={styles.formContainer}>
                <Text style={styles.titleInput}>Full name</Text>
                <InputCustom
                  placeholder="Enter your full name"
              
                />
                <Text style={styles.titleInput}>Phone number</Text>
                <InputCustom
                  placeholder="Enter your phone number"
                  secure={true}
              
                />
                <Text style={styles.titleInput}>Date of Birth</Text>
                <InputCustom
                  placeholder="Enter your date of birth"
                  secure={true}
               
                />
      
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

export default UpdateProfile;
