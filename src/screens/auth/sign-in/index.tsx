import {FunctionComponent} from 'react';

import useStyles from './styles';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import Header from '../../../components/customs/Headers';
import { BackIcon } from '../../../assets/icons';
import { NavigationService } from '../../../navigation';
import { routes } from '../../../constants';

const SignIn: FunctionComponent = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <View style={styles.wrapper}>
      

        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignIn;
