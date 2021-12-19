import React, { useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';

import { useDispatch } from 'react-redux';
import { wipeModal} from '../../features/user/susiSlice';


export default function EnterEmailTemplate() {
  const [valid_email, setValidEmail] = useState(null);
  const email_ref = useRef();

  const handleContinue = () => {
    let email = email_ref.current.value;
    let emailRegExp = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

    let valid = emailRegExp.test(email);
    
    if(valid){

    }else{
      setValidEmail('invalid');
    }

  }

  return(
    <div>
      <Box className="c b i k">
        <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
          Sign up with email
        </Typography>
      </Box>
      <Box className="c b i k">
        <Box className="b c" sx={{maxWidth: '316px', marginTop: '30px'}}>
        </Box>
      </Box>
      <Box className="b c" sx={{marginTop: '50px'}}>
        <Box className="a k c b i">
          <Box className="c b i k">
          </Box>
          <Box className="b c i k" sx={{marginBottom: '28px', marginTop: '12px'}}>
            <Box className="c b i k">
              <Box className="i j d a c k" sx={{paddingBottom:'1px', width: '270px'}}>
                <Box className="b c i k" sx={{alignSelf: 'normal', flex:'0 0 auto', marginBottom:'12px'}}>
                  {valid_email === 'invalid' ?
                  <Typography sx={{fontFamily: 'mohave', color: 'red', fontSize: '13px', lineHeight: '20px'}} component="p">
                    Enter your email here
                  </Typography>
                  :
                  <Typography sx={{fontFamily: 'mohave', color: 'black', fontSize: '13px', lineHeight: '20px'}} component="p">
                    Enter your email here
                  </Typography>}
                </Box>
                <Box className='c b i k' sx={{position: 'relative'}}>
                  {valid_email === 'invalid' ?
                  <TextField inputRef={email_ref} error inputProps={{style: {textAlign: 'center'}}} id="standard-error-helper-text" variant="standard" placeholder="email@example.com" helperText="Please enter a valid email address."/>
                  : <TextField  inputRef={email_ref} inputProps={{style: {textAlign: 'center'}}} id="standard-basic" variant="standard" placeholder="email@example.com" />}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className='c b i k' sx={{marginBottom:'15px', marginTop: '12px'}}>
            <Button onClick={() => handleContinue()}>
              <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
              Continue
              </Typography>
            </Button>
          </Box>
          <Box className='b c i k' sx={{paddingRight: '12px', marginBottom: '28px', marginTop: '12px'}}>
            <Button>
              <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
                <ArrowBackIcon /> All sign up optons
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
