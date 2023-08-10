import React from 'react';
import {FlatList, View} from 'react-native';
import OnboardingItem from './OnboardingItem';
import slides from './slides';
import useStyles from './styles';

const OnboardScreen: React.FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({item}) => <OnboardingItem item={item} />}
  
      />
    </View>
  );
};

export default OnboardScreen;
