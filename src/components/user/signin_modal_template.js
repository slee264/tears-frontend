import React from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch } from 'react-redux';
import { wipeModal} from '../../features/user/susiSlice';

export default function SignInModalTemplate(props) {
  const dispatch = useDispatch();

  return(
    <div>
      <Box className="e d c a f n o p" sx={{role: 'dialog', zIndex: 800, position: 'fixed', overflowX: 'hidden', overflowY: 'auto'}}>
        <Box className="b" sx={{marginTop :'auto', marginBottom: 'auto', padding: '0px', transformOrigin: 'center bottom'}}>
          <Box className="b c" sx={{background: 'rgb(255, 255, 255)', position: 'relative', width: '678px'}}>
            <Box className="b c k">
              <Box className="a g h" sx={{background: 'white', justifyContent: 'space-between', flexDirection: 'row', minHeight: '695px'}}>
                <Box className="e d a c i j" sx={{flex: "1 0 auto", width: '360px', padding: '44px 56px'}}>
                  {props.operationTemplate}
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
