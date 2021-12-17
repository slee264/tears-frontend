import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import { useSelector, useDispatch } from 'react-redux';
import { wipeModal } from './features/user/susiSlice';


export default function SignInModal() {
  const susiOperation = useSelector((state) => state.susi.operation);
  const dispatch = useDispatch();

  return(
    <div>
      <Modal
        open={susiOperation == 'signin'}>
        <Box>
          <IconButton aria-label='close' onClick={() => {dispatch(wipeModal())}}>
            <CloseIcon />
          </IconButton>
          <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
            Welcome back.
          </Typography>
          <Button sx={{border: 'solid', borderWidth: 1, borderRadius: 5}}>
            <MailOutlineIcon /> sign in with email
          </Button>
          </Box>
      </Modal>
    </div>
  )
}
