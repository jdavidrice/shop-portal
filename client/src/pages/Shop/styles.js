import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1500,
    padding: theme.spacing(1),
  },
  myMasonryGrid: {
    display: 'flex',
    // marginLeft: '-30px',
    width: 'auto',
    // margin: '10px',
  },
  myMasonryGridColumn: {
    // paddingLeft: '30px',
    backgroundClip: 'padding-box',
  },
  myMasonryGridColumnDiv: {
    // background: 'grey',
    margin: '10px'
  },
  masonryCard: {
    // margin: '10px',
  },
  image: {
    minWidth: 300,
    height: 400,
  },
}));

export default useStyles;
