import {Avatar} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import useStyles from './styles';
import {AvatarProps} from './type';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const AnimatedView = Animated.createAnimatedComponent(View);

const AvatarComponets: React.FunctionComponent<AvatarProps> = props => {
  const styles = useStyles();
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => setIsZoomed(!isZoomed);

  // animation
  const progress = useSharedValue(0.5);

  // when is show changed => run animation and reverse animation
  useEffect(() => {
    if (isZoomed) {
      progress.value = withSpring(1);
    } else {
      progress.value = withSpring(0.5);
    }
  }, [isZoomed]);

  // when animation run => update overlayStyle
  const overlayStyle = useAnimatedStyle(() => {
    const background = interpolateColor(
      progress.value,
      [0, 1, 0],
      ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0.6)'],
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
  if (!isZoomed) {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={toggleZoom}>
            <Avatar
              size={70}
              rounded
              source={{
                uri: 'https://res.cloudinary.com/dohynhgvm/image/upload/f_auto,q_auto/cld-sample',
              }}
            />
          </TouchableOpacity>
          <Avatar
            size={24}
            rounded
            icon={{name: 'pencil', type: 'font-awesome'}}
            containerStyle={styles.pencilStyle}
          />
        </View>
      </View>
    );
  }

  return (

      <AnimatedView style={[styles.overlay, overlayStyle]}>

        
        <TouchableOpacity onPress={toggleZoom}>
          <AnimatedView style={[styles.avatarContainer, containerStyle]}>
            <Avatar
              size={styles.avatarContainer.width}
              rounded
              source={{
                uri: 'https://res.cloudinary.com/dohynhgvm/image/upload/f_auto,q_auto/cld-sample',
              }}
            />
          </AnimatedView>
        </TouchableOpacity>
      </AnimatedView>

  );
};

export default AvatarComponets;
