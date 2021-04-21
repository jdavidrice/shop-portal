/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  IconButton,
  Typography,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AverageRating from '../../components/AverageRating/AverageRating';
import UserRating from '../../components/UserRating/UserRating';
import ReviewModal from '../../components/ReviewModal/ReviewModal';
// import ReviewBody from '../../components/ReviewBody/ReviewBody';
import useStyles from './styles';

// ***********To replace with local id************
const productID = '607f81a0c622c1182b611dad';
const userId = '607f817121733017feb5ae69';
//********************************************* */
const ItemDetailsPage = () => {
  const classes = useStyles();

  const [product, setProduct] = useState([]);
  const [review, setReview] = useState([]);

  useEffect(() => {
    const getProduct = () => {
      axios
        .get('/api/product/details')
        .then((res) => {
          const productArray = res.data;
          for (let i = 0; i < productArray.length; i++) {
            if (productArray[i]._id === productID) {
              setProduct(productArray[i]);
              setReview(productArray[i].reviews);
            }
          }
        })
        // eslint-disable-next-line
        .catch((err) => console.log(err));
    };
    getProduct();
  }, []);

  // Basic Format date
  const formatDate = (date) => {
    return date.substring(0, 10);
  };

  // Add the product to existing cart or create new cart
  const addProduct = (totalPrice) => {
    const status = 'Not processed';
    const newCart = {
      user: userId,
      products: [
        {
          product: productID,
          quantity: 1,
          totalPrice: totalPrice,
        },
      ],
    };
    axios
      .get(`/api/cart/${userId}/${status}`)
      .then((res) => {
        if (res.data[0]) {
          const cartId = res.data[0]._id;
          const cart = res.data[0];
          // FUTURE : Check if product already in the cart
          cart.products.push({
            product: productID,
            quantity: 1,
            totalPrice: totalPrice,
          });
          axios
            .put(`/api/cart/${cartId}`, cart)
            .catch((error) => console.log(error));
        } else {
          axios.post('/api/cart', newCart).catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container className={classes.root} component='main' maxWidth='xs'>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              SP
            </Avatar>
          }
          action={
            <>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
            </>
          }
          title={product.name}
          subheader='Exactly What You Are Looking For!'
        />
        <CardMedia
          className={classes.media}
          image={product.imageUrl}
          title={product.imageKey}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {product.description}
          </Typography>
        </CardContent>

        <CardActions disableSpacing={true} className={classes.flexContainer}>
          <Box className={classes.box}>
            <AverageRating
              value={product.averageStars ? product.averageStars : 0}
            />
          </Box>

          <Box className={classes.box}>
            <Typography variant='h6'>${product.price}</Typography>
          </Box>
          <Box className={classes.box}>
            <Link style={{ textDecoration: 'none' }} to='/Cart'>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className={classes.submit}
                onClick={() => {
                  addProduct(product.price);
                }}>
                Add to Cart
              </Button>
            </Link>
          </Box>
          <Box className={classes.box}>
            <ReviewModal userId={userId} productId={product._id} />
          </Box>
        </CardActions>

        <Divider variant='middle' />
        {review.map((item, i) => (
          <CardContent key={i}>
            <Typography>
              {item.user[0].firstName} {item.user[0].lastName}
            </Typography>
            <Typography>{formatDate(item.created)}</Typography>
            <UserRating rating={item.totalStars} />
            <Typography>{item.title}</Typography>
            <Typography paragraph>{item.description}</Typography>
            <Divider variant='middle' />
          </CardContent>
        ))}
      </Card>
    </Container>
  );
};

export default ItemDetailsPage;
