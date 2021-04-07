import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '93.2vh',
    color: 'white',
    flexgrow: '1',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(1, 1),
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center',
  },
  flexContainer: {
    display: 'flex',
    flexFlow: 'column wrap',
  },
  flexItem: {
    flex: '0 1 auto',
  },
}));

export default useStyles;