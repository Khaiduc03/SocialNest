import {normalize, makeStyles} from '@rneui/themed';
import {Device} from '../../../utils';
import {StyleSheet} from 'react-native';
const PADDING = 40;
Device.getDeviceWidth();
const useStyles = makeStyles(({colors}) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    // width:Device.getDeviceWithScreen()
  },
  pencilStyle: {
    position: 'absolute',
    right: 0,
    bottom: normalize(-6),
    backgroundColor: colors.primary,
  },

  avatarContainer: {
    width: Device.getDeviceWidth() - PADDING ,
    height: Device.getDeviceWidth() - PADDING,

    // backgroundColor: colors.primary,
    backgroundColor: 'rgba(256, 256, 256, 1)',
    alignItems: 'center',
    borderRadius:1000

    // position:'absolute'
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3000,
  },
}));

export default useStyles;
