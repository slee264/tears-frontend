import React, { useState } from 'react';

import Box from '@mui/material/Box';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';

import { useDispatch } from 'react-redux';
import { wipeModal} from '../../features/user/susiSlice';

export default function EnterEmailTemplate() {

  const dispatch = useDispatch();
  return(
    <div>
      <Box className="e d c a f n o p" sx={{role: 'dialog', zIndex: 800, position: 'fixed', overflowX: 'hidden', overflowY: 'auto'}}>
        <Box className="b" sx={{marginTop :'auto', marginBottom: 'auto', padding: 0, transformOrigin: 'center bottom'}}>
          <Box className="b c" sx={{background: 'rgb(255, 255, 255)', position: 'relative', width: '678px'}}>
            <Box className="b c k">
              <Box className="a g h" sx={{background: 'white', justifyContent: 'space-between', flexDirection: 'row', minHeight: '695px'}}>
                <Box className="e d a c i j" sx={{flex: "1 0 auto", width: 360, padding: '44px 56px'}}>
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
                              <Typography sx={{fontFamily: 'mohave', color: 'black', fontSize: '13px', lineHeight: '20px'}} component="p">
                                Enter your email here
                              </Typography>
                            </Box>
                            <Box className='c b i k' sx={{position: 'relative'}}>
                              <TextField inputProps={{style: {textAlign: 'center'}}} id="standard-basic" variant="standard" placeholder="email@example.com" />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box className='c b i k' sx={{marginBottom:'15px', marginTop: '12px'}}>
                        <Button>
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
                </Box>
              </Box>
            </Box>
            <Box className='b m c' sx={{right: '12px', top: '12px'}}>
              <IconButton aria-label='close' onClick={() => {dispatch(wipeModal())}}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
