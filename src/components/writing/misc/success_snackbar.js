import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import { useSelector } from 'react-redux';

export default function SucsessSnackBar(props) {

  const [alert_open, setAlertOpen] = useState(true);

  return(
    <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} open={alert_open} autoHideDuration={3000} onClose={() => setAlertOpen(false)}>
      <Alert variant='filled' severity={props.args.type} sx={{ width: '100%'}} onClose={() => setAlertOpen(false)}>
        {props.args.message}
      </Alert>
    </Snackbar>
  )
}
