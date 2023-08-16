import React from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import useStyles from './styles';



const SlideItem:React.FunctionComponent<any> = ({item}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="contain" style={[styles.image]}  srcSet=''/>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default SlideItem;


