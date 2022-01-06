import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "@fontsource/mohave";

import store from 'src/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider, useSelector, useDispatch } from 'react-redux';
import { logInModal } from 'src/features/user/susiSlice';
import { logOut } from 'src/features/user/userSlice';

import About from 'src/components/about';
import AboutTalk from 'src/components/about_talk';
import AboutExercise from 'src/components/about_exercise';
import AboutWrite from 'src/components/about_write';
// import AboutRecord from 'src/components/about_record';

import SignInModal from 'src/components/user/account/signin_modal';
import Home from './components/home.js';

import WritingHome from './components/writing/write_modal.js';
import TalkingHome from './components/talking/talking_home.js';

import 'src/style/modal.css';
import 'src/style/index.css';
import { server } from 'src/axios';

let persistor = persistStore(store);

function Index(props) {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const susiModalStep = useSelector((state) => state.susiModal.step);
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    const result = await server.get('/auth/logout', {withCredentials: true});
    dispatch(logOut());
    window.location.href = '/';
  }

  return(
    <Router>
      <body class='template-index'>
        <div id='tears-header'>
          <header class='site-header border-bottom logo--left' role='banner'>
            <div class='grid grid--no-gutters grid--table site-header__mobile-nav'>
              <div class='grid__item medium-up--one-quarter logo-align--left'>
                <div class='site-header__logo'>
                  <Button href='/'>
                      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h2" component="div">
                        TEARs
                      </Typography>
                  </Button>
                </div>
              </div>
              <nav class="grid__item new-half ?small--hide?" id='AccessbileNav' role="navigation">
                <ul class='site-nav list--inline' id='SiteNav'>
                  <li>
                    <Button href='/about'>
                      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
                        About
                      </Typography>
                    </Button>
                  </li>
                  <li class='site-nav--active'>
                    <Button href='/talk'>
                      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
                        Talk
                      </Typography>
                    </Button>
                  </li>
                  <li>
                    <Button href='/exercise'>
                      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
                        Exercise
                      </Typography>
                    </Button>
                  </li>
                  <li>
                    <Button href='/write'>
                      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
                        Write
                      </Typography>
                    </Button>
                  </li>
                  <li>
                    <Button href='/record'>
                      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
                        Record
                      </Typography>
                    </Button>
                  </li>
                  <li>
                    <Button onClick={loggedIn ? () => handleLogOut() : () => dispatch(logInModal())}>
                      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
                      {loggedIn ? 'Sign out' : 'Sign in'}
                      </Typography>
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
        <div id="page-container" class="page-container drawer-page-content">
          <main id="main-content" class="main-content js-focus-hidden" role='main'>
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/about_talk" element={<AboutTalk />}/>
                <Route path="/about_exercise" element={<AboutExercise />}/>
                <Route path="/about_write" element={<AboutWrite />} />
                <Route path="/about_record"/>

                <Route path="/talk" element={loggedIn ? <TalkingHome /> : <AboutTalk />} />
                <Route path="/exercise"/>
                <Route path="/write" element={loggedIn ? <WritingHome /> : <AboutWrite />} />
                <Route path="/record"/>
              </Routes>
          </main>
        </div>
      </body>
      {susiModalStep ? <SignInModal /> : null}
    </Router>
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
