import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // marginBottom: '1rem',
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
    // padding: theme.spacing(3, 2),
  },
  cardFooter: {
    display: 'flex',
    placeItems: 'center',
    flexFlow: 'row wrap',
    width: 'inherit',
    justifyContent: 'space-between',
    // padding: theme.spacing(3, 2),
    backgroundColor: theme.palette.background.paper,
    margin: 0,
    padding: 0,
    marginTop: 'auto',
    height: '5rem',
  },
}));

export default useStyles;
