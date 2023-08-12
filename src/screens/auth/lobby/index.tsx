import { Icon, Image } from '@rneui/themed';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../../assets';
import { GoogleIcon } from '../../../assets/icons';
import { routes } from '../../../constants';
import { NavigationService } from '../../../navigation';
import usestyles from './styles';
import { useAppDispatch } from '../../../hooks';
import { AuthActions } from '../../../redux/reducer';

const LobbyScreen: React.FunctionComponent = () => {
  const styles = usestyles();

  const dispatch = useAppDispatch();

  const handleGoogle = async () => {
    dispatch(
      AuthActions.handleLoginGoogle({
        device_token: '1234567890',
      })
    );
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerIMage} source={images.logo}  />
      </View>
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
          <TouchableOpacity style={styles.button} onPress={handleGoogle}>
            <GoogleIcon />
            <Text style={styles.buttonText}> Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate(routes.CREATE_ACCOUNT);
            }}
            style={[styles.button, styles.backgroundColors]}>
            <Text style={[styles.buttonText, styles.colorWhite]}>
              Get Started
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate(routes.SIGN_IN);
            }}
            style={[styles.button, styles.backgroundColorsSecondary]}>
            <Text style={[styles.buttonText, styles.colors]}>
              I Already Have an Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LobbyScreen;
