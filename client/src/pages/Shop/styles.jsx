import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1500,
    padding: theme.spacing(1),
  },
  myMasonryGrid: {
    display: 'flex',
    width: 'auto',
  },
  myMasonryGridColumn: {
    backgroundClip: 'padding-box',
  },
  myMasonryGridColumnDiv: {
    margin: '10px'
  },
  image: {
    minWidth: 300,
    height: 400,
  },
}));

export default useStyles;
