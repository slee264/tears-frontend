import React, { useState, useEffct } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "@fontsource/mohave";

import store from 'src/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider, useSelector, useDispatch } from 'react-redux';
import { logInModal } from 'src/features/user/susiSlice';
import { logOut } from 'src/features/user/userSlice';

import About from 'src/about';
import SignInModal from 'src/components/user/account/signin_modal';

import Cookies from 'js-cookie';

import 'src/style/index.css';

let persistor = persistStore(store);

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
                    <Button onClick={loggedIn ? () => dispatch(logOut()) : () => dispatch(logInModal())}>
                      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
                      {loggedIn ? 'Sign out' : 'Sign in'}
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
    <PersistGate loading={null} persistor={persistor}>
      <Index />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
