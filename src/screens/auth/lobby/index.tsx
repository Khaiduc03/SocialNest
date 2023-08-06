import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import usestyles from './styles';
import LobbyImage1 from '../../../assets/images/LobbyImage';
import {Svg} from 'react-native-svg';
import {Device} from '../../../utils';
import {Icon} from '@rneui/themed';

const LobbyScreen: React.FunctionComponent = () => {
  const styles = usestyles();
  const WIDTH = Device.getDeviceHeight();
  const HEIGHT = Device.getDeviceWidth();
  return (
    <View style={styles.container}>
      <Svg width={WIDTH} height={HEIGHT}>
        <LobbyImage1 />
      </Svg>
      <View style={styles.body}>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>
            Welcome to
            <Text style={[styles.title, styles.colors]}> Newsly</Text>{' '}
          </Text>
          <Icon
            name="logo-octocat"
            type="ionicon"
            color={styles.colors.color}
            size={30}
          />
        </View>
        <Text style={styles.subTitle}>
          Newsly is a social network that allows you to connect with friends
        </Text>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button}>
            <Text >Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LobbyScreen;
