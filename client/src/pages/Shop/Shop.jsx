import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import useStyles from './styles';
import {
  CardMedia,
  CardHeader,
  CardActions,
  CardContent,
  Container,
  Typography,
  Button,
  Card,
} from '@material-ui/core';
//import { isConstructorDeclaration } from 'typescript';

// ***********To replace with local id until login page and global states done************
const userId = '6088a259be35fe10acbd4c65';
//************************************************************************************** */

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

  // Add the product to existing cart or create new cart
  const addProduct = (productId, price) => {
    const status = 'Not processed';
    const newCart = {
      user: userId,
      products: [
        {
          product: productId,
          quantity: 1,
          totalPrice: price,
        },
      ],
    };
    axios
      .get(`/api/cart/user/${userId}/${status}`)
      .then((res) => {
        if (res.data[0]) {
          const cartId = res.data[0]._id;
          const cart = res.data[0];
          // FUTURE : Check if product already in the cart
          cart.products.push({
            product: productId,
            quantity: 1,
            totalPrice: price,
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
      <Masonry
        breakpointCols={breakPoints}
        className={classes.myMasonryGrid}
        columnClassName={classes.myMasonryGridColumn}>
        {productsList
          ? productsList.map((product, i) => {
              let price = '$' + product.price; // Add dollar sign to displayed price
              return (
                <div key={i} className={classes.myMasonryGridColumnDiv}>
                  <Card>
                    <CardHeader title={product.name} subheader={price} />
                    <CardMedia
                      className={classes.image}
                      image={product.imageUrl}
                    />
                    <CardContent>
                      <Typography variant='body2' component='p'>
                        {product.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link style={{ textDecoration: 'none' }} to='/Cart'>
                        <Button
                          size='small'
                          variant='contained'
                          color='primary'
                          onClick={() => {
                            addProduct(product._id, product.price);
                          }}>
                          ADD TO CART
                        </Button>
                      </Link>
                      <Link
                        style={{ textDecoration: 'none' }}
                        to='/itemDetails'>
                        <Button
                          size='small'
                          variant='contained'
                          color='primary'
                          onClick={() => {
                            // Temp fix until login page and global state
                            console.log(product._id);
                          }}>
                          DETAILS
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </div>
              );
            })
          : null}
      </Masonry>
    </Container>
  );
};

export default Shop;
