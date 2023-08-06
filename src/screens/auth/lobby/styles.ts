import {makeStyles} from '@rneui/themed';
import {Device} from '../../../utils';

const WIDTH = Device.getDeviceHeight();
const HEIGHT = Device.getDeviceWidth();

const usestyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  body: {
    alignItems: 'center',
    padding: 24,
    flex: 1,
  },
  title:{
    fontSize:30,
    fontStyle:'normal'
    ,fontFamily:''
  }


}));

export default usestyles;
