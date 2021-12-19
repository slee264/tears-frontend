import React, { useState } from 'react';

import Box from '@mui/material/Box';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import { useSelector, useDispatch } from 'react-redux';
import { registerModal, wipeModal } from '../../features/user/susiSlice';

import SignUpTemplate from './signup';
import SignInTemplate from './signin';
import EnterEmailTemplate from './enter_email';
import '../../style/index.css';

export default function SignInModal() {
  const susiModalStep = useSelector((state) => state.susiModal.step);
  const susiModalOperation = useSelector((state) => state.susiModal.operation);
  console.log(susiModalStep);
  const dispatch = useDispatch();

  const renderOperation = () => {
    switch(true) {
      case (susiModalStep == 'SIGNIN_OPTIONS') && (susiModalOperation == 'login'):{
        return(<SignInTemplate />);
      }

      case (susiModalStep == 'SIGNIN_OPTIONS') && (susiModalOperation == 'register'):{
        return(<SignUpTemplate />);
      }

      case (susiModalStep == 'ENTER_EMAIL'):{
        return(
          <EnterEmailTemplate />
        )
      }
    }
  }

  return(
    <div>
      <Modal open={susiModalStep}>
        {renderOperation()}
      </Modal>
    </div>
  )
}
