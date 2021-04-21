import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  myMasonryGrid: {
    display: 'flex',
    marginLeft: '-30px',
    width: 'auto',
  },
  myMasonryGridColumn: {
    paddingLeft: '30px',
    backgroundClip: 'padding-box',
  },

  myMasonryGridColumnDiv: {
    background: 'grey',
    marginBottom: '30px',
  },
  image: {
    minWidth: 300,
    height: 400,
  },
}));

export default useStyles;
