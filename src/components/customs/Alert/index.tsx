import React, {FunctionComponent, useCallback, useEffect} from 'react';

import {Text} from '@rneui/themed';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import styles from './styles';

import {getAlertState} from '../../../redux/selectors/alert.selector';
import {AlertActions} from '../../../redux/reducer/alert.reducer';
import {useAppDispatch, useAppSelector, useBackHandler} from '../../../hooks';
import useStyles from './styles';

const AnimatedView = Animated.createAnimatedComponent(View);

const Alert: FunctionComponent = () => {
  // hooks
  const styles = useStyles();
  const {
    isShow,
    title,
    description,
    onAccept,
    onCancel = () => {},
  } = useAppSelector(getAlertState);

  const onRequestClose = useCallback(() => {
    dispatch(AlertActions.cleanDataAlert());
  }, []);

  const dispatch = useAppDispatch();
  useBackHandler({
    enabled: isShow,
    callback: onRequestClose,
  });

  // animation
  const progress = useSharedValue(0.5);

  // when is show changed => run animation and reverse animation
  useEffect(() => {
    if (isShow) {
      progress.value = withSpring(1);
    } else {
      progress.value = withSpring(0.5);
    }
  }, [isShow]);

  // when animation run => update overlayStyle
  const overlayStyle = useAnimatedStyle(() => {
    const background = interpolateColor(
      progress.value,
      [0, 1, 0],
      ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)'],
    );

    return {
      backgroundColor: background,
    };
  }, []);

  // when animation run => update containerStyle
  const containerStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1, 0],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale: scale}],
    };
  }, []);

  // if isShow = false => not show anything
  if (!isShow) {
    return <View />;
  }

  return (
    <AnimatedView style={[styles.overlay, overlayStyle]}>
      <AnimatedView style={[styles.container, containerStyle]}>
        {/* <Text style={styles.titleStyle}>{`${title} `}</Text>
        <Text style={styles.descriptionStyle}>{description}</Text>
        <View style={styles.bottomStyle}>
          <TouchableOpacity
            style={styles.buttonStyleCancel}
            onPress={() => {
              onRequestClose();
              onCancel && onCancel();
            }}>
            <Text style={styles.textOption}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyleOk}
            onPress={() => {
              onRequestClose();
              onAccept && onAccept();
            }}>
            <Text style={styles.textOption}>Ok</Text>
          </TouchableOpacity>
        </View> */}
      </AnimatedView>
    </AnimatedView>
  );
};

export default Alert;
