import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
import {fonts} from '@rneui/base';

const HEIGHT = Device.getDeviceHeight();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  textView: {
    margin: normalize(24),
    marginBottom: normalize(8),
  },
  title: {
    color: colors.black,
    fontWeight: '700',
    fontSize: normalize(24),
    lineHeight: normalize(36),
    letterSpacing: normalize(0.12),
  },
  subTitle: {
    fontWeight: '400',
    fontSize: normalize(16),
    fontStyle: 'normal',
    lineHeight: normalize(24),
    letterSpacing: normalize(0.12),
  },
  bottom: {
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: 'black',
    paddingHorizontal: normalize(24),
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(13),
    gap: 18,
    backgroundColor: colors.primary,
    borderRadius: normalize(6),
  },
  buttonText: {
    fontSize: normalize(16),
    fontWeight: '600',
    lineHeight: normalize(24),
    letterSpacing: normalize(0.12),
    fontStyle: 'normal',
    color: colors.grey0,
  },
  backButtonText: {
    fontSize: normalize(16),
    fontWeight: '600',
    lineHeight: normalize(24),
    letterSpacing: normalize(0.12),
    fontStyle: 'normal',
    color: colors.grey5,
    paddingRight:normalize(10)
  },
  viewButton: {
    flexDirection: 'row',
  
    alignItems: 'center',
  

  },
}));

export default useStyles;
