import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import "@fontsource/oswald";
import Home from './components/home.js';
import WritingHome from './components/writing/writing_home.js';
import TalkingHome from './components/talking/talking_home.js';

export default function MenuTabHorizontal({props}) {
  const [content_choice, setContent_choice] = useState(<Home />)

  const theme = createTheme({
    typography:{
      fontFamily: 'oswald',
      fontSize: 25,
    },
    palette: {
      primary: {
        main: "#457b9d"
      },
      text: {
        primary: '#FFFFFF'
      }
    },
  });

  const handleButton = (content_choice) => {
    switch(content_choice) {
      case 'talking':
        setContent_choice(<TalkingHome />);
        break;
      case 'exercising':
        // setContent_choice(<ExercisingHome />);
        break;
      case 'writing':
        setContent_choice(<WritingHome isPreview={false}/>);
        break;
      case 'recording':
        // setContent_choice(<RecordingHome />);
        break;
    }
  }

  const button_variant = "contained";
  const button_size = "large";

  return(
    <div>
      <ThemeProvider theme={theme}>
        <Grid sx={{mt: 1, mb: 1}}container spacing={2} align='center'>
          <Grid item xs={3}>
            <Button onClick={()=> handleButton('talking')}
                    sx={{color: 'text.primary'}}
                    size={button_size}
                    variant={button_variant}>
              <Typography component='div'>
                Talking
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={()=> handleButton('exercising')}
                    sx={{color: 'text.primary'}}
                    size={button_size}
                    variant={button_variant}>
              <Typography component='div'>
                Exercising
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={()=> handleButton('writing')}
                    sx={{color: 'text.primary'}}
                    size={button_size}
                    variant={button_variant}>
              <Typography component='div'>
                Artistic Writing
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={()=> handleButton('recording')}
                    sx={{color: 'text.primary'}}
                    size={button_size}
                    variant={button_variant}>
              <Typography component='div'>
                Recording
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
        {content_choice}
    </div>
  )
}
