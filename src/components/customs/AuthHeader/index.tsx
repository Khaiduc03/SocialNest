import {View, Text} from 'react-native';
import React from 'react';
import {AuthProps} from './types';
import useStyles from './styles';

const AuthHeader: React.FunctionComponent<AuthProps> = props => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {props.title && <Text style={styles.title}>{props.title}</Text>}
        {props.subTitle && (
          <Text style={styles.subTitle}>{props.subTitle}</Text>
        )}
      </View>
    </View>
  );
};

export default AuthHeader;
