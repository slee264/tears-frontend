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
import Typography from '@mui/material/Typography';
import "@fontsource/mohave";

import store from './store';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { logInModal, registerModal } from './features/user/susiSlice';

import MenuTabHorizontal from './menu-tab-horizontal';
import About from './about';
import SignInModal from './components/user/signin_modal';

import './style/index.css';

function Index(props) {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const susiModalStep = useSelector((state) => state.susiModal.step);

  const dispatch = useDispatch();

  return(
    <div>
      <Router>
        <nav class="b c" style={{backgroundColor: '#ffffff', boxShadow: "0 4px 12px 0 rgb(0 0 0 / 30%)", zIndex: 500, position: 'absolute', right: 0, left: 0, top: 0}}>
          <Box className="a c e">
            <Box sx={{margin: "0 64px"}}>
              <Box className="a c d" sx={{ height: 65}}>
                <Box className="b c" sx={{zIndex: 500, flex: "1 0 auto"}}>
                  <Box className="a c d">
                    <Button href='/'>
                      <Box className="b" sx={{borderRight: 'none', paddingRight: 0}}>
                        <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h2" component="div">
                          TEARs
                        </Typography>
                      </Box>
                    </Button>
                  </Box>
                </Box>
                <Box className="b c" sx={{flex: "0 0 auto", zIndex: 500}}>
                  <Box className="a c d e">
                    <Button href='/about'>
                      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
                        About
                      </Typography>
                    </Button>
                    <Button onClick={() => dispatch(logInModal())}>
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
        <Box className="b c" sx={{marginTop: 0, marginBottom: 0, height: '65px'}}>
        </Box>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignInModal />} />
        </Routes>
        {susiModalStep ? <SignInModal /> : null}
      </Router>
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
