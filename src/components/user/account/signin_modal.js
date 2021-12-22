import React from 'react';

import Modal from '@mui/material/Modal';

import { useSelector } from 'react-redux';

import SignInModalTemplate from './forms/signin_modal_template';
import SignInForm from './forms/signin_form';

import SignUpForm from './forms/register/signup_form';
import EnterEmailForm from './forms/register/enter_email_form';
import EnterPasswordForm from './forms/register/enter_password_form';
import EnterNameForm from './forms/register/enter_name_form';
import SignUpCompleteForm from './forms/register/signup_complete_form';

import EnterEmailLogInForm from './forms/log_in/enter_email_login_form';
import EnterPasswordLogInForm from './forms/log_in/enter_password_login_form';
import 'src/style/index.css';

export default function SignInModal() {
  const susiModalStep = useSelector((state) => state.susiModal.step);
  const susiModalOperation = useSelector((state) => state.susiModal.operation);

  const renderOperation = () => {
    switch(true) {
      case (susiModalOperation === 'login') && (susiModalStep === 'SIGNIN_OPTIONS'):{
        return(<SignInModalTemplate operationTemplate=<SignInForm /> />);
      }

      case (susiModalOperation === 'login') && (susiModalStep === 'ENTER_EMAIL_LOGIN'):{
        return(<SignInModalTemplate operationTemplate=<EnterEmailLogInForm /> />);
      }

      case (susiModalOperation === 'login') && (susiModalStep === 'ENTER_PASSWORD_LOGIN'):{
        return(<SignInModalTemplate operationTemplate=<EnterPasswordLogInForm /> />);
      }

      case (susiModalOperation === 'register') && (susiModalStep === 'SIGNIN_OPTIONS'):{
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

      default: {
        return null;
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
