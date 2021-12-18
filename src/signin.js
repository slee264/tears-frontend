import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import { useSelector, useDispatch } from 'react-redux';
import { wipeModal } from './features/user/susiSlice';

import './style/index.css';

export default function SignInModal() {
  const susiOperation = useSelector((state) => state.susi.operation);
  const dispatch = useDispatch();

  return(
    <div>
      <Modal
        open={susiOperation == 'signin'}>
        <Box role="dialog" className="e d c a f" sx={{role: 'dialog', zIndex: 800, position: 'fixed', overflowX: 'hidden', overflowY: 'auto'}}>
          <Box className="b" sx={{marginTop :'auto', marginBottom: 'auto', padding: 0, transformOrigin: 'center bottom'}}>
            <Box className="b c" sx={{background: 'rgb(255, 255, 255)', position: 'relative', width: '678px'}}>
              <IconButton sx={{float: 'right'}} aria-label='close' onClick={() => {dispatch(wipeModal())}}>
                <CloseIcon />
              </IconButton>
              <Box className="b c k">
                <Box className="a g h" sx={{background: 'white', justifyContent: 'space-between', flexDirection: 'row', minHeight: '695px'}}>
                  <Box className="e d a c i j" sx={{flex: "1 0 auto", width: 360, padding: '44px 56px'}}>
                    <Box className="c b i k">
                      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
                        Welcome back.
                      </Typography>
                    </Box>
                    <Box className="c b k">
                      <Box className="b c" sx={{maxWidth: '316px', marginTop: '30px'}}>
                      </Box>
                    </Box>
                    <Box className="b c" sx={{marginTop: '50px'}}>
                      <Box className="k c b i">
                        <Box className="b c k i" sx={{marginBottom: '40px'}}>
                          <Box className="k c b i">
                            <Button sx={{border: 'solid', borderWidth: 1, borderRadius: 5}}>
                              <MailOutlineIcon /> sign in with email
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="k c b i">
                        <Box className="b c k i" sx={{marginBottom:'58px'}}>
                          <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
                            No account?
                            <Button>
                              <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
                              Create one
                              </Typography>
                            </Button>
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
