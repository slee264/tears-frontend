import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { useSelector, useDispatch } from 'react-redux';
import { registerModal, wipeModal } from '../../features/user/susiSlice';

import '../../style/index.css';


export default function SignInTemplate(){
  const dispatch = useDispatch();

  return(
    <div>
      <Box className="c b i k">
        <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
          Welcome back.
        </Typography>
      </Box>
      <Box className="c b i k">
        <Box className="b c" sx={{maxWidth: '316px', marginTop: '30px'}}>
        </Box>
      </Box>
      <Box className="b c" sx={{marginTop: '50px'}}>
        <Box className="k c b i">
          <Box className="b c k i" sx={{marginBottom: '40px'}}>
            <Box className="k c b i">
              <Button sx={{border: 'solid', borderWidth: 1, borderRadius: 5}}>
                <MailOutlineIcon /> Sign in with email
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="k c b i">
          <Box className="b c k i" sx={{marginBottom:'58px'}}>
            <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
              No account?
              <Button onClick={() => dispatch(registerModal())}>
                <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
                Create one
                </Typography>
              </Button>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
