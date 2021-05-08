import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
    textAlign: 'left',
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
}));

export default useStyles;
