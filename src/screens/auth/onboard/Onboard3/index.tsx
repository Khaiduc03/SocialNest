import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';
import useStyles from './styles';
import Onbroad from '../../../../components/customs/Onbroad';

import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import { OnboardImage3 } from '../../../../assets';

const Onboard1: React.FunctionComponent = () => {
  const styles = useStyles();
  const iconColor = ['', '', styles.iconColor.color];

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Onbroad
            image={<OnboardImage3 />}
            title=""
            subTitle=""
            iconColor={iconColor}
            onPressNextButton={() => {
              NavigationService.navigate(routes.SIGN_IN);
            }}
            textButton="Get Started"
            onPressBackButton={() => {
              if (NavigationService.canGoBack()) {
                NavigationService.goBack();
                return;
              }
              NavigationService.navigate(routes.ONBOARD2);
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Onboard1;
