import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { useDispatch } from 'react-redux';
import { enterEmailModal, logInModal } from '../../features/user/susiSlice';

export default function SignUpTemplate() {
  const dispatch = useDispatch();

  return(
    <div>
      <Box className="c b i k">
        <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
          Join TEARS.
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
              <Button sx={{border: 'solid', borderWidth: 1, borderRadius: 5}} onClick={() => {dispatch(enterEmailModal())}}>
                <MailOutlineIcon /> Sign up with email
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="k c b i">
          <Box className="b c k i" sx={{marginBottom:'58px'}}>
            <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
              Already have an account?
              <Button onClick={() => dispatch(logInModal())}>
                <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
                Sign in
                </Typography>
              </Button>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
