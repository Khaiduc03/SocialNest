import {Avatar} from '@rneui/themed';
import React, {useState} from 'react';
import {View, TouchableOpacity, Animated} from 'react-native';
import useStyles from './styles';
import {Device} from '../../../utils';
import {AvatarProps} from './type';

const AvatarComponets: React.FunctionComponent<AvatarProps> = props => {
  const styles = useStyles();
  const [isZoomed, setIsZoomed] = useState(false);
  const [scale, setScale] = useState(new Animated.Value(1));
  const handleAvatarPress = () => {
    if (isZoomed) {
      setScale(new Animated.Value(1));
    } else {
      setScale(new Animated.Value(3));
    }
    setIsZoomed(!isZoomed);
    nextPress();
  };

  const animatedStyle = {
    transform: [{scale: scale}],
  };
  const nextPress = () => {
    if (props.onPressAvatar) {
      props.onPressAvatar();
     // console.log(   props.onPressAvatar())
    }
  };

  return (
    <View style={styles.container}>
      {!isZoomed ? (
        <View>
          <TouchableOpacity onPress={handleAvatarPress}>
            <Animated.View style={[animatedStyle]}>
              <Avatar
                size={70}
                rounded
                source={{
                  uri: 'https://res.cloudinary.com/dohynhgvm/image/upload/f_auto,q_auto/cld-sample',
                }}
              />
            </Animated.View>
          </TouchableOpacity>
          <Avatar
            size={24}
            rounded
            icon={{name: 'pencil', type: 'font-awesome'}}
            containerStyle={styles.pencilStyle}
          />
        </View>
      ) : (
        <TouchableOpacity onPress={handleAvatarPress}>
          <View>
            <Animated.View style={[animatedStyle, styles.avatarContainer]}>
              <Avatar
                size={Device.getDeviceWithScreen() * 0.334}
                rounded
                source={{
                  uri: 'https://res.cloudinary.com/dohynhgvm/image/upload/f_auto,q_auto/cld-sample',
                }}
              />
            </Animated.View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AvatarComponets;
