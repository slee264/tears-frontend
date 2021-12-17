import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import "@fontsource/mohave";

import store from './store';
import { Provider, useSelector, useDispatch } from 'react-redux';

import MenuTabHorizontal from './menu-tab-horizontal';
import About from './about';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Index(props) {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  const [signin_dialog_open, setDialogOpen] = React.useState(false);

  return(
    <div>
      <Router>
        <nav style={{backgroundColor: '#ffffff', boxShadow: "0 4px 12px 0 rgb(0 0 0 / 30%)", zIndex: 500, position: 'absolute', right: 0, left: 0, top: 0, display: 'block', boxSizing: 'inherit'}}>
          <Box sx={{ justifyContent: 'center', display: 'flex', boxSizing: 'inherit'}}>
            <Box sx={{margin: "0 64px"}}>
              <Box sx={{ alignItems: 'center', display: 'flex', boxSizing: 'inherit', height: 65}}>
                <Box sx={{zIndex: 500, flex: "1 0 auto", display: 'block', boxSizing: 'inherit'}}>
                  <Box sx={{alignItems: 'center', display: 'flex', boxSizing: 'inherit'}}>
                    <Button href='/'>
                      <Box sx={{borderRight: 'none', paddingRight: 0, display: 'block'}}>
                        <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h2" component="div">
                          TEARs
                        </Typography>
                      </Box>
                    </Button>
                  </Box>
                </Box>
                <Box sx={{flex: "0 0 auto", zIndex: 500, display: 'block', boxSizing: 'inherit'}}>
                  <Box sx={{justifyContent: 'flex-end', alignItems: 'center', display: 'flex', boxSizing: 'inherit'}}>
                    <Button href='/about'>
                      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
                        About
                      </Typography>
                    </Button>
                    <Button href='/signin'>
                      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
                        Sign In
                      </Typography>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </nav>
        <Box sx={{marginTop: 0, marginBottom: 0, display: 'block', height: '65px', boxSizing: 'inherit'}}>
        </Box>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Dialog
        open={signin_dialog_open}
        TransitionComponent={Transition}
        fullWidth>
        <DialogTitle>
          <IconButton aria-label='close' onClick={() => setDialogOpen(false)}>
            <CloseIcon />
          </IconButton>
          <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
            Welcome back.
          </Typography>
        </DialogTitle>
        <DialogContent sx={{textAlign:'center'}}>
          <Button sx={{border: 'solid', borderWidth: 1, borderRadius: 5}}>
            <MailOutlineIcon /> sign in with email
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
