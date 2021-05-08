import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    maxWidth: 1000,
    padding: theme.spacing(1),
    alignItems: 'center',
  },
  flexItem: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(4),
  },
}));

export default useStyles;
