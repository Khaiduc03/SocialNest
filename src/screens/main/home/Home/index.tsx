import {View} from 'react-native';
import {Button, Text} from '@rneui/base';

import React, {FunctionComponent} from 'react';

import styles from './styles';
import Header from '../../../../components/customs/Headers';
import {jsonFiles} from '../../../../assets';
import useStyles from './styles';

const Home: FunctionComponent = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Header leftLogo={jsonFiles.logo} />
    </View>
  );
};

export default Home;
