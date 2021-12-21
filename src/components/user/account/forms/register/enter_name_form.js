import React, { useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useDispatch, useSelector } from 'react-redux';
import { signUpFinishModal }  from '../../../../../features/user/susiSlice';

import { server } from '../../../../../axios';

export default function EnterNameForm() {
  const [valid_name, setValidName] = useState(null);
  const [helper_text, setHelperText] = useState('');
  const email = useSelector((state) => state.susiModal.valid_email);

  const dispatch = useDispatch();
  const name_ref = useRef();

  const handleContinue = async () => {
    if(name_ref.current.value.length === 0){
      setValidName('invalid');
      setHelperText('Name cannot be empty.');
    }else{
      const name = name_ref.current.value;
      const result = await server.post('account/register/add-name', {username: email, name: name});
      if(result){
        dispatch(signUpFinishModal({name: name}));
      }
    }
  }

  const handleSkip = async () => {
    dispatch(signUpFinishModal(''));
  }

  return(
    <div>
      <Box className="c b i k">
        <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h4" component="div">
          Finishing up.
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
                  <Typography sx={{fontFamily: 'mohave', color: (valid_name === 'invalid' ? 'red' : 'black'), fontSize: '13px', lineHeight: '20px'}} component="p">
                    Enter your name here
                  </Typography>
                </Box>
                <Box className='c b i k' sx={{position: 'relative'}}>
                  {valid_name === 'invalid' ?
                  <TextField inputRef={name_ref} error FormHelperTextProps={{style: {textAlign: 'center'}}} inputProps={{style: {textAlign: 'center'}}} id="standard-error-helper-text" variant="standard" helperText={helper_text}/>
                  : <TextField  inputRef={name_ref} inputProps={{style: {textAlign: 'center'}}} id="standard-basic" variant="standard" />}
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
            <Button onClick={() => handleSkip()}>
              <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
              Skip
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  )

}
