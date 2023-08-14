import {normalize, makeStyles} from '@rneui/themed';
import {Device} from '../../../utils';

Device.getDeviceWidth();
const useStyles = makeStyles(({colors}) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    // width:Device.getDeviceWithScreen()
  },
  pencilStyle: {
    position: 'absolute',
    right: 0,
    bottom: normalize(-6),
    backgroundColor: colors.primary,
  },

  avatarContainer: {
    // Thêm các style cần thiết cho container avatar
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center', // Căn giữa theo chiều ngang
    backgroundColor: colors.black,
    width:Device.getDeviceWithScreen(),
    height:Device.getDeviceWithScreen(),
  
   // position:'absolute'
  },
}));

export default useStyles;
