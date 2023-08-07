import {View, Text} from 'react-native';
import React from 'react';
import {AuthProps} from './types';
import useStyles from './styles';

const AuthHeader: React.FunctionComponent<AuthProps> = props => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create an Account 🔐</Text>
        <Text style={styles.subTitle}>
          Enter your username, email & password. If you forget it, then you have
          to do forgot password.
        </Text>
      </View>
    </View>
  );
};

export default AuthHeader;
