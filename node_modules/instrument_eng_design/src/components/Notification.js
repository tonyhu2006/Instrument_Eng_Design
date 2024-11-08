  // components/Notification.js
  import React from 'react';
  import Snackbar from '@material-ui/core/Snackbar';
  import MuiAlert from '@material-ui/lab/Alert';

  const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

  const Notification = ({ open, handleClose, severity, message }) => (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );

  export default Notification;