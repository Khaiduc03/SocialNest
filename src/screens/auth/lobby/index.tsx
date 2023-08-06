import {View, Text} from 'react-native';
import React from 'react';
import usestyles from './styles';
import LobbyImage1 from '../../../assets/images/LobbyImage';
import {Svg} from 'react-native-svg';
import {Device} from '../../../utils';

const LobbyScreen: React.FunctionComponent = () => {
  const styles = usestyles();
  const WIDTH = Device.getDeviceHeight();
  const HEIGHT = Device.getDeviceWidth();
  return (
    <View style={styles.container}>
      <Svg width={WIDTH} height={HEIGHT}>
        <LobbyImage1 />
      </Svg>
      


    </View>
  );
};

export default LobbyScreen;
