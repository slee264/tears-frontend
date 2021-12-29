import React from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import { useDispatch, useSelector } from 'react-redux';
import { wipeModal } from 'src/features/writing/writeSlice';

export default function WriteModalTemplate(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const writeModalStatus = useSelector((state) => state.writeModal.status);
  const dispatch = useDispatch();

  const handleClose = (event) => {

    if(writeModalStatus === 'edit'){
      setAnchorEl(event.currentTarget);
    }else{
      dispatch(wipeModal());
    }
  }

  return(
    <div>
      <Box className="e d c a f n o p" sx={{role: 'dialog', zIndex: 800, position: 'fixed', overflowX: 'hidden', overflowY: 'auto'}}>
        <Box className="b" sx={{marginTop :'auto', marginBottom: 'auto', padding: '0px', transformOrigin: 'center bottom'}}>
          <Box className="b c q" sx={{background: 'rgb(255, 255, 255)', position: 'relative'}}>
            <Box className="b c k">
              <Box className="a g h" sx={{background: 'white', justifyContent: 'space-between', flexDirection: 'row', minHeight: '695px'}}>
                <Box className="e a c i j" sx={{flex: "1 0 auto", width: '360px', padding: '44px 56px'}}>
                  {props.operationTemplate}
                </Box>
              </Box>
            </Box>
            <Box className='b m c' sx={{right: '12px', top: '12px'}}>
              <IconButton aria-label='close' onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Popover
        open={anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(false)}
        anchorOrigin={{
          vertical:  'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}>
        <Typography sx={{ p: 2 }}>Save first or discard!</Typography>
      </Popover>
    </div>
  )
}
