import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';

export default function EnterEmailTemplate() {

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
    </div>
  )
}
