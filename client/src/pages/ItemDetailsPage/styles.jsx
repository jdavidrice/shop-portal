import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    padding: theme.spacing(1),
  },
  card: {
    margin: theme.spacing(2),
  },
  CardActions: {
    margin: 0,
  },
  flexContainer: {
    display: "flex",
    placeItems: "center",
    flexFlow:"row wrap",
  },
  box: {
    flexGrow: 1,
    flexShrink: 1,
    textAlign: "center",
  },
  media: {
    margin: 'auto',
    maxWidth: 500,
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
}));

export default useStyles;
