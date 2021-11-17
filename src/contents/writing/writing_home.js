import React, { useState, useRef, useEffect } from 'react';
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
import { server } from '../../axios';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import "@fontsource/roboto"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WritingHome(props){

  const [backdrop_open, setBackdropOpen] = React.useState(true);
  const [dialogue_open, setDialogueOpen] = React.useState(false);
  const [writes_list, setWritesList] = React.useState([]);
  const [dialogue, setDialogue] = React.useState({title: '', body: ''});
  const [dialogue_changed, setDialogueChanged] = React.useState(false);

  useEffect(() => {
    fetchWrites();
  }, []);

  const dialogue_title_ref = useRef();
  const dialogue_body_ref = useRef();

  const fetchWrites = async () => {
      let list = [];
      const writes = await server.get('/writes');
      writes.data.map(e => {list.push(
      <Grid item key={e.id} xs={3}>
      {cardBoilerPlate(e, false)}
      </Grid>
  )});
      setWritesList(list);
  }

  const cardBoilerPlate = (e, add_card) => {
    let card = null;
    if(add_card){
      card = (
        <Card sx={{background: '#457b9d', color: '#fff', maxWidth: 345, height: 150, mx:2, mt: 2}}>
          <CardActionArea onClick={handleClickNew}>
              <Typography align='center' variant='h2' component="div" gutterBottom>
                +
              </Typography>
            <CardContent align='center'>
              <Typography variant="h5" component="div">
                Write a story
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )
    }else{
      card = (
        <Card sx={{maxWidth: 345, height: 150, mx: 2, mt:2}}>
          <CardActionArea onClick={() => handleClickWrite(e)}>
              <Typography align='center' variant='h2' component="div" gutterBottom>
                {e.title}
              </Typography>
            <CardContent align='center'>
              <Typography variant="h5" component="div" >
                {e.body.length > 13 ? e.body.slice(0,13) + '...' : e.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )
    }

    return card;
  }

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

  const handleSave = async () => {
    let result = null;
    if(dialogue_changed && dialogue.id) {
      console.log('changed');
      const result = await server.patch('/writes/' + dialogue.id, {title: dialogue_title_ref.current.value, content: dialogue_body_ref.current.value});
    }else if(dialogue_changed){
      console.log('new');
      const result = await server.post('/writes', {title: dialogue_title_ref.current.value, body: dialogue_body_ref.current.value});
    }
    fetchWrites();
    handleDiscard();
  }

  const handleDiscard = () => {
    setDialogueOpen(false);
    setDialogue({title: '', body: ''});
    setDialogueChanged(false);
  }

  const handleClickWrite = (e) => {
    setDialogue({id: e.id, title: e.title, body: e.body});
    setDialogueChanged(false);
    setDialogueOpen(true);
  }

  const handleDelete = async () => {
    const result = await server.delete('/writes/' + dialogue.id);
    if(result) fetchWrites();
  }

  const textOnChange = (event) => {
    setDialogueChanged(true);
  }

  const theme = createTheme({
    typography:{
      fontFamily: 'roboto',
    }
  });

  return(
    <div>
      <Backdrop sx={{ color: '#FFFFFF'}}
                open={backdrop_open}
                onClick={handleCloseBackdrop}>
        <Typography align='center' variant="h5" component="div">
          Someone said one of the best ways to overcome tough times is to turn them into stories. <br/>
          Write your story. It could be a short story, poem, song, prayer, anything you want.
        </Typography>
      </Backdrop>
      <ThemeProvider theme={theme}>
        {backdrop_open ?
          null
          : <Grid container direction='row' sx={{mt: 2, mb:1}} columns={15}>
              <Grid item xs={3}>
              {cardBoilerPlate(null, true)}
              </Grid>
              {writes_list}
            </Grid>
        }
        <Dialog
          open={dialogue_open}
          TransitionComponent={Transition}
          fullWidth>
          <DialogTitle>
            <TextField defaultValue={dialogue.title} onChange={textOnChange} inputRef={dialogue_title_ref} id="dialogue_title" label="Title" variant="standard" fullWidth />
          </DialogTitle>
          <DialogContent>
            <TextField defaultValue={dialogue.body} onChange={textOnChange} inputRef={dialogue_body_ref} id="dialogue_body" placeholder="Write here!" multiline rows={20} fullWidth />
          </DialogContent>
          <DialogActions>
            {dialogue.id ?
            <Button sx={{color: '#d62828'}} onClick={handleDelete}>
              Delete
            </Button> : null}
            <Button autoFocus onClick={handleSave}>
              Save Changes
            </Button>
            <Button autoFocus onClick={handleDiscard}>
              Discard
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  )
}
