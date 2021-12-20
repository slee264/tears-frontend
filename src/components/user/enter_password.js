import React, { useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';

import { useDispatch, useSelector } from 'react-redux';
import { enterEmailModal, enterNameModal } from '../../features/user/susiSlice';

import { server } from '../../axios';

export default function EnterPasswordTemplate() {
  const valid_email = useSelector((state) => state.susiModal.valid_email);
  const dispatch = useDispatch();
  const [valid_password, setValidPassword] = useState(null);
  const password_ref = useRef();

  const handleContinue = async () => {
    let password = password_ref.current.value;

    //this checks if password only contains letters and numbers
    let passwordRegExp = /^[a-z0-9]+$/i;

    if(password.length > 7 && passwordRegExp.test(password)){
      const result = await server.post('/account/register', {username: valid_email, password: password});
      if(result){
        dispatch(enterNameModal());
      }
    }else {
      setValidPassword('invalid');
    }
  }

  return(
    <div>
      <Box className="c b i k">
        <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h4" component="div">
          You're almost there.
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
                  {valid_password === 'invalid' ?
                  <Typography sx={{fontFamily: 'mohave', color: 'red', fontSize: '13px', lineHeight: '20px'}} variant="h5" component="p">
                    Enter your password here
                  </Typography>
                  :
                  <Typography sx={{fontFamily: 'mohave', color: 'black', fontSize: '13px', lineHeight: '20px'}} variant="h5" component="p">
                    Enter your password here
                  </Typography>}
                </Box>
                <Box className='c b i k' sx={{position: 'relative'}}>
                  {valid_password === 'invalid' ?
                  <TextField inputRef={password_ref} error FormHelperTextProps={{style: {textAlign: 'center'}}} inputProps={{style: {textAlign: 'center'}}} id="standard-error-helper-text" variant="standard" helperText="Please enter a valid password."/>
                  : <TextField  inputRef={password_ref} inputProps={{style: {textAlign: 'center'}}} id="standard-basic" variant="standard" />}
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
            <Button onClick={() => dispatch(enterEmailModal())}>
              <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
                <ArrowBackIcon /> Go back
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
