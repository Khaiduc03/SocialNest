import {Avatar, Icon, Text} from '@rneui/themed';
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
import ModalWrapContent from '../ModalWrapContent';
import * as ImagePicker from 'react-native-image-picker';
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

  //show menu choose image
  const [isShow, setIsShow] = useState<boolean>(false);
  const toggleShow = () => setIsShow(!isShow);
  //image picker
  const [response, setResponse] = React.useState<any>(null);

  const onButtonPress = React.useCallback((type: string, options: any) => {
    if (type === 'capture') {
      ImagePicker.launchCamera(options, setResponse);
      console.log(response)
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
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
          <TouchableOpacity onPress={toggleShow}>
            <Avatar
              size={24}
              rounded
              icon={{name: 'pencil', type: 'font-awesome'}}
              containerStyle={styles.pencilStyle}
            />
            {isShow && (
              <ModalWrapContent
                isVisible={isShow}
                onBackdropPress={() => setIsShow(false)}
                contentStyle={styles.contentStyle}>
                <TouchableOpacity
                  style={styles.modalItem}
                  onPress={() =>
                    onButtonPress(
                      'capture',
                      ImagePicker.launchCamera({
                        saveToPhotos: true,
                        mediaType: 'photo',
                        includeBase64: false,
                        quality: 0.5,
                      }),
                    )
                  }>
                  <Icon
                    type="ionicon"
                    name={'camera-outline'}
                    color={'black'}
                    size={28}
                    containerStyle={styles.iconStyle}
                  />
                  <Text style={styles.textStyle}>Take a photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalItem}>
                  <Icon
                    type="ionicon"
                    name={'images-outline'}
                    color={'black'}
                    size={28}
                    containerStyle={styles.iconStyle}
                  />
                  <Text style={styles.textStyle}>Select a photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalItem}>
                  <Icon
                    type="ionicon"
                    name={'trash-outline'}
                    color={'black'}
                    size={28}
                    containerStyle={styles.iconStyle}
                  />
                  <Text style={styles.textStyle}>Remove photo</Text>
                </TouchableOpacity>
              </ModalWrapContent>
            )}
          </TouchableOpacity>
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
