/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
} from '@material-ui/core/';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';

const ReviewModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRating(0);
    setTitle('');
    setDescription('');
  };

  // Post new review
  const PostReview = () => {
    setOpen(false);
    if (title !== '' || description !== '') {
      // Prevent empty reviews to be processed
      const review = {
        name: props.userId,
        product: props.productId,
        title: title,
        totalStars: rating,
        description: description,
      };
      axios
        .post('/api/reviews', review)
        .then(() => {
          setRating(0);
          setTitle('');
          setDescription('');
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <Box className={classes.box}>
        <Button
          onClick={handleOpen}
          type='submit'
          variant='contained'
          color='primary'
          className={classes.submit}>
          Review this item
        </Button>
      </Box>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>Review Your Product</h2>
            {/* <Box className={classes.box}> */}
            <Rating
              name='rating'
              value={rating}
              onChange={(event) => {
                setRating(event.target.value);
              }}
            />
            {/* </Box> */}
            <TextField
              margin='normal'
              label='Title'
              required
              fullWidth
              variant='outlined'
              name='title'
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              error={title === ''}
              helperText={title === '' ? 'Required field!' : ' '}
            />
            <TextField
              id='message'
              margin='normal'
              label='Description'
              multiline
              required
              fullWidth
              rows={6}
              variant='outlined'
              name='description'
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              error={description === ''}
              helperText={description === '' ? 'Required field!' : ' '}
            />
            <Button
              onClick={PostReview}
              type='submit'
              variant='contained'
              color='primary'
              className={classes.submit}>
              Submit
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ReviewModal;
