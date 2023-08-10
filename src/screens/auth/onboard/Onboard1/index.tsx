import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React from 'react';
import useStyles from './styles';
import Onbroad from '../../../../components/customs/Onbroad';

import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {OnboardImage1} from '../../../../assets';
import {useAppSelector} from '../../../../hooks';
import {getAppIsReady} from '../../../../redux/selectors/app.selector';

const Onboard1: React.FunctionComponent = () => {
  const styles = useStyles();
  const iconColor = [styles.iconColor.color];

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Onbroad
            image={<OnboardImage1 />}
            title="Lorem Ipsum is simply
            dummy"
            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            iconColor={iconColor}
            onPressNextButton={() => {
              NavigationService.navigate(routes.ONBOARD2);
            }}
            textButton="Next"
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Onboard1;
