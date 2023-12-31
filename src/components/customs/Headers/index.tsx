import React from 'react';

import {TouchableOpacity, View} from 'react-native';

import {Icon, Image} from '@rneui/themed';
import useStyles from './styles';
import {HeaderProps} from './types';

import {CaseIcon} from '../../../assets/icons';
import LottieView from 'lottie-react-native';
// import StyledText from '../StyledText';

const Header: React.FunctionComponent<HeaderProps> = props => {
  const {
    leftIcon,
    onPressLeftIcon,
    onPressRightIcon,
    rightIcon,
    style,
    logo,
    iconColor,
    leftElementIcon,
    rightElementIcon,
    leftLogo,
  } = props;
  const styles = useStyles();
  const leftPress = () => {
    if (leftIcon) {
      onPressLeftIcon && onPressLeftIcon();
    }
  };

  const rightPress = () => {
    if (leftIcon) {
      onPressRightIcon && onPressRightIcon();
    }
  };

  return (
    <View style={[styles.container, style]}>
      {leftIcon && (
        <TouchableOpacity onPress={leftPress} style={styles.iconleft}>
          <Icon
            name={'arrow-back-outline'}
            type="ionicon"
            size={24}
            color={styles.colorBlack.color}
          />
        </TouchableOpacity>
      )}
      {/* 
      {leftLogo && (
        // <LottieView
        //   style={[styles.iconleft, styles.logoIcon]}
        //   source={leftLogo}
        //   autoPlay={true}
         

        //   loop={false}
        // />
       
      )} */}

      <View style={styles.caseIcon}>
        {logo && <CaseIcon colors={props.iconColor} />}
      </View>

      {rightIcon && (
        <TouchableOpacity onPress={rightPress} style={styles.iconRight}>
          <Icon
            name={'arrow-forward-outline'}
            type="ionicon"
            size={24}
            color={styles.colorBlack.color}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
