import { Image } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import useStyles from './styles';

const OnboardingItem: React.FunctionComponent<any> = ({item}) => {
  const styles = useStyles();


  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image}/>
    </View>
  );
};

export default OnboardingItem;
