import React, { useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useDispatch, useSelector } from 'react-redux';
import { wipeModal, logInModal }  from '../../../../../features/user/susiSlice';

export default function SignUpCompleteForm() {
  const name = useSelector((state) => state.susiModal.name);
  const dispatch = useDispatch();

  const handleLogIn = () => {
    dispatch(wipeModal());
    dispatch(logInModal());
  }

  return (
    <div>
      <Box className="c b i k">
        <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h3" component="div">
          Welcome! {name}
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
                </Box>
                <Box className='c b i k' sx={{position: 'relative'}}>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className='c b i k' sx={{marginBottom:'15px', marginTop: '12px'}}>
            <Button onClick={() => handleLogIn()}>
              <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
              Log in
              </Typography>
            </Button>
          </Box>
          <Box className='b c i k' sx={{paddingRight: '12px', marginBottom: '28px', marginTop: '12px'}}>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
