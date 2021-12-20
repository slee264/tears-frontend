import React from 'react';

import Modal from '@mui/material/Modal';

import { useSelector } from 'react-redux';

import SignInModalTemplate from './forms/signin_modal_template';
import SignUpForm from './forms/signup_form';
import SignInForm from './forms/signin_form';
import EnterEmailForm from './forms/enter_email_form';
import EnterPasswordForm from './forms/enter_password_form';
import EnterNameForm from './forms/enter_name_form';
import SignUpCompleteForm from './forms/signup_complete_form';
import '../../../style/index.css';

export default function SignInModal() {
  const susiModalStep = useSelector((state) => state.susiModal.step);
  const susiModalOperation = useSelector((state) => state.susiModal.operation);

  const renderOperation = () => {
    switch(true) {
      case (susiModalStep === 'SIGNIN_OPTIONS') && (susiModalOperation === 'login'):{
        return(<SignInModalTemplate operationTemplate=<SignInForm /> />);
      }

      case (susiModalStep === 'SIGNIN_OPTIONS') && (susiModalOperation === 'register'):{
        return(<SignInModalTemplate operationTemplate=<SignUpForm /> />);
      }

      case (susiModalStep === 'ENTER_EMAIL'):{
        return(<SignInModalTemplate operationTemplate=<EnterEmailForm /> />);
      }

      case (susiModalStep === 'ENTER_PASSWORD'):{
        return(<SignInModalTemplate operationTemplate=<EnterPasswordForm /> />);
      }

      case (susiModalStep === 'ENTER_NAME'):{
        return(<SignInModalTemplate operationTemplate=<EnterNameForm /> />);
      }

      case (susiModalStep === 'SIGNUP_COMPLETE'):{
        return(<SignInModalTemplate operationTemplate=<SignUpCompleteForm /> />);
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
