import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles';

const ContactUs = () => {
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Contact Us
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='name'
            label='Name'
            name='name'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='email'
            label='Email'
            type='email'
            id='email'
          />
          <TextField
            id='message'
            margin='normal'
            label='Message'
            multiline
            required
            fullWidth
            rows={4}
            variant='outlined'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ContactUs;
