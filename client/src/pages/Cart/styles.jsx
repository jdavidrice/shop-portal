import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      marginBottom: '1rem',
      marginTop: theme.spacing(2),
    },
    checkout: {
      marginTop: theme.spacing(2),     
    },
    title: {
        fontSize: 28,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    image: {
      minWidth: 300,
      height: 400,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    nativeSelect: {
      flexDirection: 'column',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,        
    },
}));
  
  export default useStyles;