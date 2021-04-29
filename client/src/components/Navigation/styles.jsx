import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(8),

  },
  title: {
    userSelect: 'none',
    flexGrow: 1,
    textAlign: 'center',
  },
}));

export { useTheme };
export default useStyles;
