import {makeStyles, normalize} from '@rneui/themed';
import {Device} from '../../../utils';
const HEGHIT = Device.getDeviceHeight();
const WIDTH = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    flex: 1,
  },
  form: {
    flex: 1,
    paddingVertical: normalize(24),
  },
  title: {
    fontSize: normalize(32),
    fontWeight: '700',
    fontFamily: 'Urbanist-Bold',
    color: colors.black,
  },
  subTitle: {
    fontSize: normalize(17),
    fontWeight: '400',
    fontFamily: 'Urbanist-Regular',
    color: colors.black,
  },
  titleInput: {
    fontSize: normalize(16),
    fontWeight: '700',
    fontFamily: 'Urbanist-Bold',
    color: colors.black,
    letterSpacing: normalize(0.2),
  },
  textInput: {
    fontSize: normalize(20),
    fontWeight: '700',
    fontFamily: 'Urbanist-Regular',
    color: colors.black,
    letterSpacing: normalize(0.2),
  },
  input: {
    backgroundColor: colors.white,
  },
  avatar: {
      alignItems:'center',
      justifyContent:'center',

  },
  avatarStyle: {
    width: normalize(100),
    height: normalize(100),
    backgroundColor: colors.grey5,
  },
  avatarColor: {
    backgroundColor: colors.grey5,
    borderRadius: normalize(50),
  }
}));

export default useStyles;
