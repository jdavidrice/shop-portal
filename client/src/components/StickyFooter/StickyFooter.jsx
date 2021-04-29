/* eslint-disable no-unused-vars */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  NativeSelect,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AverageRating from '../../components/AverageRating/AverageRating';
import UserRating from '../../components/UserRating/UserRating';
import ReviewModal from '../../components/ReviewModal/ReviewModal';
import useStyles from './styles';

const StickyFooter = () => {
  const classes = useStyles();

  const Shop = () => {
    const classes = useStyles();
    const breakPoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    const [productsList, setProductsList] = useState([]);

    // Get products from the store
    const getProduct = () => {
      axios
        .get('/api/product')
        .then((res) => {
          setProductsList(res.data);
        })
        // eslint-disable-next-line
        .catch((err) => console.log(err));
    };

    // Rendering
    useEffect(() => {
      getProduct();
    }, []);

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Container component='main' className={classes.main} maxWidth='sm'>
          <CardActions disableSpacing={true}>
            <Box className={classes.box}>
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel id='demo-simple-select-outlined-label'>
                  Quantity
                </InputLabel>
                <NativeSelect
                  name={item.id}
                  defaultValue={item.quantity}
                  onChange={(e) => {
                    handleChange(item._id, e);
                  }}>
                  {getOptionsArray(item.product.quantity).map((num) => (
                    <option key={num} value={num}>
                      {' '}
                      {num}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Box>
            <Box className={classes.box}>
              <IconButton
                aria-label='delete'
                onClick={() => {
                  handleRemove(item._id, GrowTransition);
                  console.log('remove', item._id); // FOR TESTING
                }}>
                <DeleteForeverIcon />
              </IconButton>
            </Box>
            <Box className={classes.box}>
              <Snackbar
                open={state.open}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={handleClose}
                TransitionComponent={state.Transition}
                message='Item removed from your cart'
                key={state.Transition.name}
              />
            </Box>
            <Box className={classes.box}>
              <Typography color='textSecondary' align='right' variant='h6'>
                ${item.totalPrice}
              </Typography>
            </Box>
          </CardActions>
        </Container>
        <footer className={classes.footer}>
          <Container maxWidth='sm'>
            <Typography variant='body1'></Typography>
          </Container>
        </footer>
      </div>
    );
  };
};
export default StickyFooter;
