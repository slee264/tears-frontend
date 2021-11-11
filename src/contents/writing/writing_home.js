import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { CardActionArea } from '@mui/material';
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';
import Slide from '@mui/material/Slide';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import "@fontsource/roboto"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WritingHome(props){

  const [backdrop_open, setBackdropOpen] = React.useState(true);
  const [dialogue_open, setDialogueOpen] = React.useState(false);

  const handleCloseBackdrop = () => {
    setBackdropOpen(false);
  };

  const handleToggleBackdrop = () => {
    setBackdropOpen(!backdrop_open);
  };

  const handleClickNew = () => {
    setDialogueOpen(true);
    setBackdropOpen(false)
  }

  const handleDiscard = () => {
    setDialogueOpen(false);
  }

  const theme = createTheme({
    typography:{
      fontFamily: 'roboto',
    }
  });

  return(
    <div>
      <Backdrop sx={{ color: '#fff'}}
                open={backdrop_open}
                onClick={handleCloseBackdrop}>
        <Typography align='center' variant="h5" component="div">
          Someone said one of the best ways to overcome tough times is to turn them into stories. <br/>
          Write your story. It could be a short story, poem, song, prayer, anything you want.
        </Typography>
      </Backdrop>
      <ThemeProvider theme={theme}>
        <Grid sx= {{mt: 2, mb:1}}>
          <Card sx={{maxWidth: 345}}>
            <CardActionArea onClick={handleClickNew}>
                <Typography align='center' variant='h1' component="div">
                  +
                </Typography>
              <CardContent align='center'>
                <Typography variant="h5" component="div">
                  Write a story
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Dialog
            open={dialogue_open}
            TransitionComponent={Transition}
            fullWidth>
            <DialogTitle>
              <TextField id="dialogue_title" label="Title" variant="standard" fullWidth />
            </DialogTitle>
            <DialogContent>
              <TextField id="dialogue_content" placeholder="Write here!" multiline rows={20} fullWidth />
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleDiscard}>
                Save Changes
              </Button>
              <Button autoFocus onClick={handleDiscard}>
                Discard
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      </ThemeProvider>
    </div>
  )
}
