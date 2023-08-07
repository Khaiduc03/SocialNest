import {normalize, makeStyles} from '@rneui/themed';
import {Device} from '../../../utils';

const WIGHT = Device.getDeviceWidth();
Device.getDeviceWidth();
const useStyles = makeStyles(({colors}) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    marginVertical: normalize(12),
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(30),
    height: normalize(30),
  },
  title: {
    flex: 1,
    paddingHorizontal: normalize(20),
    fontSize: 18,
    fontWeight: '700',
  },
  iconRight: {
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(30),
    height: normalize(30),
  },
  colorPrimary: {
    color: colors.primary,
  },
  colorBlack: {
    color: colors.black,
  },
}));

export default useStyles;
