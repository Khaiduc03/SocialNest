import React from 'react';

import {TouchableOpacity, View} from 'react-native';

import useStyles from './styles';
import {HeaderProps} from './types';
import {Icon} from '@rneui/themed';
// import StyledText from '../StyledText';

const Header: React.FunctionComponent<HeaderProps> = props => {
  const {
    leftIcon,
    onPressLeftIcon,
    onPressRightIcon,
    rightIcon,
    style,
    title,
    titleStyle,
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
        <TouchableOpacity onPress={leftPress}>
          <Icon
            name={'arrow-back-outline'}
            type="ionicon"
            size={24}
            color={styles.colorBlack.color}
          />
        </TouchableOpacity>
      )}
      {rightIcon && (
        <TouchableOpacity onPress={rightPress} style={styles.icon}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
