import {makeStyles, normalize} from '@rneui/themed';

import {fonts} from '@rneui/base';
import {Device} from '../../../../utils';

const HEIGHT = Device.getDeviceHeight();
const WIGHT = Device.getDeviceWidth();

const useStyles = makeStyles(({colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: WIGHT,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: WIGHT,
    height: HEIGHT*0.6,
    resizeMode: 'contain',
    
  },
}));

export default useStyles;
