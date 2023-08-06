import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import useStyles from './styles';
import { HeaderProps } from './types';
// import StyledText from '../StyledText';

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  const styles = useStyles();
  const leftPress = () => {
    if (props.leftIcon) {
      props.onPressLeftIcon && props.onPressLeftIcon();
    }
  };

  const rightPress = () => {
    if (props.leftIcon) {
      props.onPressRightIcon && props.onPressRightIcon();
    }
  };

  return (
    <View style={[styles.container, props.style]}>
      {props.leftIcon && (
        <TouchableOpacity onPress={leftPress} style={styles.icon}>
          {props.leftIcon}
        </TouchableOpacity>
      )}

      {/* {props.title && (
        <StyledText style={[styles.title, props.titleStyle]}>
          {props.title}
        </StyledText>
      )} */}

      {props.rightIcon && (
        <TouchableOpacity onPress={rightPress} style={styles.icon}>
          {props.rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
