import React from 'react';

import Modal from '@mui/material/Modal';

import { useSelector } from 'react-redux';

import SignInModalTemplate from './signin_modal_template';
import SignUpTemplate from './signup';
import SignInTemplate from './signin';
import EnterEmailTemplate from './enter_email';
import EnterPasswordTemplate from './enter_password';
import '../../style/index.css';

export default function SignInModal() {
  const susiModalStep = useSelector((state) => state.susiModal.step);
  const susiModalOperation = useSelector((state) => state.susiModal.operation);

  const renderOperation = () => {
    switch(true) {
      case (susiModalStep === 'SIGNIN_OPTIONS') && (susiModalOperation === 'login'):{
        return(<SignInModalTemplate operationTemplate=<SignInTemplate /> />);
      }

      case (susiModalStep === 'SIGNIN_OPTIONS') && (susiModalOperation === 'register'):{
        return(<SignInModalTemplate operationTemplate=<SignUpTemplate /> />);
      }

      case (susiModalStep === 'ENTER_EMAIL'):{
        return(<SignInModalTemplate operationTemplate=<EnterEmailTemplate /> />);
      }

      case (susiModalStep === 'ENTER_PASSWORD'):{
        return(<SignInModalTemplate operationTemplate=<EnterPasswordTemplate /> />);
      }

      case (susiModalStep === 'ENTER_NAME'):{
        // work needs to be done.
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
