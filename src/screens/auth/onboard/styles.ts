import {makeStyles, normalize} from '@rneui/themed';

import {color, fonts} from '@rneui/base';

import {Dimensions} from 'react-native';
import {Device} from '../../../utils';

const {width, height} = Dimensions.get('screen');
const HEIGHT = Device.getDeviceHeight();
const WIGHT = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    width,
    height,
    alignItems: 'center',
  },
  image: {
    flex: 0.6,
    width: width * 0.7,
  },
  content: {
    flex: 0.4,
    width,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: normalize(22),
    fontWeight: 'bold',
    color: colors.black,
    fontFamily: 'Urbanist-Regular',
  },
  description: {
    fontSize: 15,
    marginVertical: 12,
    color: colors.grey4,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: normalize(99),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    marginVertical: normalize(HEIGHT * 0.01),
    height: normalize(HEIGHT * 0.058),
    width: '70%',
  },
  buttonText: {
    fontSize: normalize(HEIGHT * 0.02),
    fontWeight: '700',
    letterSpacing: normalize(0.2),
    fontStyle: 'normal',
    fontFamily: 'Urbanist-Regular',
    color: colors.grey0,
  },
}));

export default useStyles;
