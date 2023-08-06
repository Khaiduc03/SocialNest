import {makeStyles} from '@rneui/themed';

const useStyles = makeStyles(({colors}) => ({
  container:{
    flex:1,
    backgroundColor: colors.background
  },
  wrapper:{
    flex:1
  },
  iconColor:{
    color:colors.primary
  }

}));

export default useStyles
