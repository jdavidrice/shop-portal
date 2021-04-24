/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core/';
// import StickyFooter from '../../components/StickyFooter/StickyFooter';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import axios from 'axios';

//For Toast
function GrowTransition(props) {
  return <Grow {...props} />;
}

// ***********To replace with local id until login page and global states done************
const user = '607f817121733017feb5ae69';
//************************************************************************************** */

const Cart = () => {
  const classes = useStyles();
  // Setting components' initial state
  const [list, setList] = useState([]);
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  // For Toast
  const [state, setState] = useState({
    open: false,
    Transition: Fade,
  });

  // For Api call
  const getCart = () => {
    const status = 'Not processed';
    axios
      .get(`/api/cart/${user}/${status}`)
      .then((res) => {
        let newTotal = 0;
        setCart(res.data[0]);
        setList(res.data[0].products); // Push each product in an array
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
    const newList = list.slice(0);
    let newCart = cart;
    let productIndex = list.findIndex((item) => item._id === id);
    let unitPrice = newList[productIndex].product.price; // Price by unit
    let totalUnits = Number(event.target.value); // New number of item
    let newTotal = (Math.round(totalUnits * unitPrice * 100) / 100).toFixed(2); // Calculation with rounding up to 2 decimals
    // Populate arrays with new numbers
    newList[productIndex].quantity = totalUnits;
    newList[productIndex].totalPrice = newTotal;
    newCart.products[productIndex].quantity = totalUnits;
    newCart.products[productIndex].totalPrice = newTotal;
    // Update Cart and List states
    setList(newList);
    setCart(newCart);
    //Calling function to update db
    updateCart(newCart, cart._id);
  }

  // Api call to update the cart after new quantity
  function updateCart(cart, cartId) {
    console.log('in update', cart);
    axios
      .put(`/api/cart/${cartId}`, cart)
      .then(() => {
        getCart();
      })
      .catch((error) => console.log(error));
  }

  //// function removeProduct(cartId, id) {
  //   console.log("in update", cart)
  //   axios
  //     .delete(`/api/cart/${cartId}`, id)
  //     .then(() => {
  //      getCart();
  //     })
  //     .catch((error) => console.log(error));
  // }

  // Remove item from cart for update api
  function handleRemove(id, Transition) {
    let newList = list.filter((item) => item._id !== id);
    let newCart = cart.products.filter((item) => item._id !== id);
    // Update Cart and List states
    setList(newList);
    setCart(newCart);
    console.log('in remove', cart);
    console.log(newList);
    // Update db cart collection
    updateCart(newCart, cart._id);
    // Update Toast State
    setState({
      open: true,
      Transition,
    });
  }

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
    try {
      await axios.post('/api/order', {
        cart: cart._id,
        user: '607b2ccd2185a8437004490d',
        total: total,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Populate dropdowns
  const getOptionsArray = (count) => {
    const array = [];
    for (let i = 0; i < count; i++) {
      array.push(i + 1);
    }
    return array;
  };

  return (
    <Container>
      <CssBaseline />
      <Grid container spacing={4}>
        <Grid item sm={8}>
          {list.map((item, i) => (
            <Card className={classes.root} key={i}>
              <CardMedia
                className={classes.image}
                image={item.product.imageUrl}
                title={item.product.imageKey}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography
                    className={classes.box}
                    component='h4'
                    variant='h5'>
                    {item.product.name}
                  </Typography>
                  <br />
                  <Typography
                    className={classes.box}
                    variant='subtitle1'
                    color='textSecondary'>
                    {item.product.description}
                  </Typography>

                  {/* Card Footer */}
                  <footer className={classes.footer}>
                    <CardActions disableSpacing={true} className={classes.box}>
                      <Box className={classes.box}>
                        <InputLabel className={classes.inputLabel} id='demo-simple-select-outlined-label'>
                          Quantity
                        </InputLabel>
                        <FormControl
                          variant='outlined'
                          className={classes.formControl}>
                          <NativeSelect
                            name={item.id}
                            defaultValue={item.quantity}
                            onChange={(e) => {
                              handleChange(item._id, e);
                            }}>
                            {getOptionsArray(item.product.quantity).map(
                              (num) => (
                                <option key={num} value={num}>
                                  {' '}
                                  {num}
                                </option>
                              )
                            )}
                          </NativeSelect>
                        </FormControl>
                      </Box>
                      <Box className={classes.box}>
                        <IconButton
                          className={classes.deleteBtn}
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
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                          onClose={handleClose}
                          TransitionComponent={state.Transition}
                          message='Item removed from your cart'
                          key={state.Transition.name}
                        />
                      </Box>
                      <Box className={classes.box}>
                        <Typography
                          className={classes.totalPrice}
                          color='textSecondary'
                          align='right'
                          variant='h6'>
                          ${item.totalPrice}
                        </Typography>
                      </Box>
                    </CardActions>
                  </footer>

                </CardContent>
              </div>
            </Card>
          ))}
        </Grid>

        {/* Order Summary Mini Card */}
        <Grid item sm={4}>
          <Card className={classes.checkout}>
            <CardContent>
              <Typography
                className={classes.title}
                color='textPrimary'
                gutterBottom>
                Order Summary
              </Typography>
              <Divider variant='middle' />
              <Typography variant='h6' component='p'>
                Subtotal: ${''}
                {total}
              </Typography>
              <Typography variant='h6' component='p'>
                Shipping: $0
              </Typography>
              <Typography variant='h5' component='p'>
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
      {/* End of Order Summary */}
    </Container>
  );
};
export default Cart;
