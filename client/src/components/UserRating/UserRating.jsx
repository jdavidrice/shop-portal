import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';


const UserRating = (props) => {
  const [value] = React.useState(props.rating);

  return (
    <div>
      <Typography component='p'>User Rating</Typography>
      <Rating name='rating-user' value={value} readOnly />
    </div>
  );
}

export default UserRating;