import React, {FunctionComponent, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Switch} from '@rneui/base';

const Profile: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Switch value={true} />
    </View>
  );
};

export default Profile;
