import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@material-ui/core/';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';

import Loading from '../../components/Loading/Loading';

//For Toast
function GrowTransition(props) {
  return <Grow {...props} />;
}

// ***********To replace with local id until login page and global states done************
const userId = '6088a259be35fe10acbd4c65';
//************************************************************************************** */

const Cart = () => {
  const classes = useStyles();
  // Setting components' initial state
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [isLoading, setLoading] = useState(true);

  // For Toast
  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });

  // For Api call
  const getCart = async () => {
    const status = 'Not processed';
    await axios
      .get(`/api/cart/user/${userId}/${status}`)
      .then((res) => {
        let newTotal = 0;
        setCart(res.data[0]);
        setLoading(false);
        newTotal = grandTotal(res.data[0].products);
        setTotal(newTotal);
      })
      .catch((error) => console.log(error));
  };

  // Call update cart list
  useEffect(() => {
    getCart();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update quantity
  function handleChange(id, event) {
    let newCart = cart;
    let productIndex = newCart.products.findIndex((item) => item._id === id);
    let unitPrice = newCart.products[productIndex].product.price; // Price by unit
    let totalUnits = Number(event.target.value); // New number of item
    let newTotal = (Math.round(totalUnits * unitPrice * 100) / 100).toFixed(2); // Calculation with rounding up to 2 decimals
    newCart.products[productIndex].quantity = totalUnits;
    newCart.products[productIndex].totalPrice = newTotal;
    // Update Cart state
    setCart(newCart);
    //Calling function to update db
    updateCart(newCart, cart._id);
  }

  // Api call to update the cart after new quantity
  function updateCart(cart, cartId) {
    axios
      .put(`/api/cart/${cartId}`, cart)
      .then(() => {
        getCart();
      })
      .catch((error) => console.log(error));
  }

  // Remove item from cart for update api
  const handleRemove = async (cartId, itemId, Transition) => {
    await axios
      .put(`/api/cart/product/${cartId}`, { id: itemId })
      .then(() => {
        getCart();
      })
      .catch((error) => console.log(error));
    setState({
      open: true,
      Transition,
    });
  };

  // For Toast closing
  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  function grandTotal(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      sum = sum + list[i].totalPrice;
    }
    sum = (Math.round(sum * 100) / 100).toFixed(2);
    return sum;
  }

  const submitOrder = async () => {
    await axios.post('/api/order', {
      cart: cart._id,
      user: userId,
      total: total,
    });
  };

  // Populate dropdowns
  const getOptionsArray = (count) => {
    const array = [];
    for (let i = 0; i < count; i++) {
      array.push(i + 1);
    }
    return array;
  };

  if (isLoading) {
    return <Loading> Loading...</Loading>; 
  }

  if (!cart) {
    return (
      <Container>
        No cart yet. Please go to the shop page and add items there
      </Container>
    );
  }


  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sm={8}>
          {cart.products
            ? cart.products.map((item, i) => {
                return (
                  <Card className={classes.root} key={i}>
                    <CardMedia
                      className={classes.image}
                      image={item.product.imageUrl}
                      title={item.product.imageKey}
                    />
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography component='h4' variant='h4'>
                          {item.product.name}
                        </Typography>
                        <Typography variant='subtitle1' color='textSecondary'>
                          {item.product.description}
                        </Typography>
                        <br />
                        <FormControl
                          variant='outlined'
                          className={classes.formControl}>
                          <InputLabel id='demo-simple-select-outlined-label'>
                            Quantity
                          </InputLabel>
                          <NativeSelect
                            name={item.id}
                            defaultValue={item.quantity}
                            onChange={(e) => {
                              handleChange(item._id, e);
                            }}>
                            {getOptionsArray(item.product.storeQuantity).map(
                              (num) => (
                                <option key={num} value={num}>
                                  {' '}
                                  {num}
                                </option>
                              )
                            )}
                          </NativeSelect>
                        </FormControl>
                        <IconButton
                          aria-label='delete'
                          onClick={() => {
                            handleRemove(cart._id, item._id, GrowTransition);
                          }}>
                          <DeleteForeverIcon />
                        </IconButton>
                        <Snackbar
                          open={state.open}
                          autoHideDuration={3000}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                          onClose={handleClose}
                          TransitionComponent={state.Transition}
                          message='Item removed from your cart'
                          key={state.Transition.name}
                        />
                        <Typography
                          color='textSecondary'
                          align='right'
                          variant='h6'>
                          <AttachMoneyIcon /> {item.totalPrice}
                        </Typography>
                      </CardContent>
                    </div>
                  </Card>
                );
              })
            : null}
        </Grid>
        <Grid item sm={4}>
          <Card className={classes.checkout}>
            <CardContent>
              <Typography
                className={classes.title}
                color='textPrimary'
                gutterBottom>
                Order Summary
              </Typography>
              <Typography variant='h6' component='p'>
                Subtotal: ${''}
                {total}
              </Typography>
              <Typography variant='h6' component='p'>
                Shipping: $0
              </Typography>
              <Typography variant='h4' component='p'>
                Total: ${''}
                {total}
              </Typography>
            </CardContent>
            <CardActions>
              <Link style={{ textDecoration: 'none' }} to='/Checkout'>
                <Button
                  size='large'
                  color='primary'
                  variant='contained'
                  onClick={submitOrder}
                  fullWidth>
                  Checkout
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Cart;
