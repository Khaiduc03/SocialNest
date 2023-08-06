import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const usestyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  body: {
    alignItems: 'center',
    padding: normalize(24),
    paddingTop: normalize(10),
    flex: 1,
  },
  viewTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: normalize(30),
    fontFamily: 'Urbanist-Bold',
    color: colors.black,
    fontWeight: '700',
    textAlign: 'center',
  },
  colors: {
    color: colors.primary,
  },
  subTitle: {
    fontSize: normalize(18),
    textAlign: 'center',
    fontFamily: 'Urbanist-Regular',
    fontWeight: '400',
    color: colors.black,
    paddingHorizontal: normalize(20),
  },
  bottom: {
    flex: 1,
  },
  button: {
    borderRadius: normalize(25),
    backgroundColor: colors.primary,
    width: normalize(WIDTH * 0.8),
    height: normalize(HEIGHT * 0.06),
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default usestyles;
