import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(2),
  },
  checkout: {
    marginTop: theme.spacing(2),
  },
  title: {
    fontSize: 28,
  },
  inputLabel: {
    fontSize: 12,
  },
  image: {
    minWidth: 300,
    height: 400,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  totalPrice: {
    marginLeft: 'auto',
  },
  flexContainer: {
    display: 'flex',
    placeItems: 'center',
    flexFlow: 'column wrap',
  },
  cardFooter: {
    display: 'flex',
    placeItems: 'center',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(15),
    height: theme.spacing(5),
  },
}));

export default useStyles;
