import { normalize, makeStyles } from '@rneui/themed';

const useStyles = makeStyles(({ colors }) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    marginVertical: normalize(12),
    paddingHorizontal: normalize(7),
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
}));

export default useStyles;
