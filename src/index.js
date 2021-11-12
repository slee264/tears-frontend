import React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import "@fontsource/mohave";
import store from './store';
import { Provider } from 'react-redux';
import MenuTabHorizontal from './menu-tab-horizontal';

function Index(props) {
    return(
      <div>
        <Grid container sx={{backgroundColor: '#a8dadc',
                              mt:-1,
                              mx:-1,
                              mb: 1,
                              p: 2,
                              width: '100%'}}>
            <Grid item xs={1}>
              <Button href='/'>
                <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h2" component="div">
                  TEARs
                </Typography>
              </Button>
            </Grid>
        </Grid>
        <MenuTabHorizontal/>

      </div>
    );
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
