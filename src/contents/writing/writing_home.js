import React, { useState, useRef, useEffect } from 'react';

import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import { positions } from '@mui/system';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';

import { server } from '../../axios';
import "@fontsource/roboto"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WritingHome(props){

  const [backdrop_open, setBackdropOpen] = React.useState(true);
  const [dialogue_open, setDialogueOpen] = React.useState(false);
  const [writes_list, setWritesList] = React.useState([]);
  const [dialogue, setDialogue] = React.useState({title: '', body: ''});
  const [dialogue_edit, setDialogueEdit] = React.useState(false);

  const [new_dialogue_open, setNewDialogueOpen] = React.useState(false);
  const [confirm_modal_open, setConfirmModalOpen] = React.useState(false);
  const [alert_open, setAlertOpen] = React.useState(false);
  const [confirm_alert, setConfirmAlert] = React.useState(false);
  const [save_success, setSaveSuccess] = React.useState(false);

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

  const handleClickWrite = (e) => {
    setDialogue({id: e.id, title: e.title, body: e.body});
    setDialogueChanged(false);
    setDialogueOpen(true);
  }

  const handleSave = async () => {
    console.log('changed');
    const result = await server.patch('/writes/' + dialogue.id, {title: dialogue_title_ref.current.value, content: dialogue_body_ref.current.value});
    fetchWrites();
    handleDiscard();
  }

  const handleDiscard = () => {
    setDialogueOpen(false);
    setDialogue({title: '', body: ''});
    setDialogueChanged(false);
    setDialogueEdit(false);
  }

  const handleEdit = () => {
    if(dialogue_edit){
      let temp_dialogue = dialogue;
      dialogue.title = dialogue_title_ref.current.value;
      dialogue.body = dialogue_body_ref.current.value;
      setDialogue(temp_dialogue);
    }
    setDialogueEdit(!dialogue_edit);
  }

  const handleDelete = async () => {
    const result = await server.delete('/writes/' + dialogue.id);
    if(result) fetchWrites();

    setDialogueOpen(false);
  }

  const handleClickNew = () => {
    setNewDialogueOpen(true);
    setBackdropOpen(false)
  }

  const handleNewDiscard = () => {
    setNewDialogueOpen(false);
    setAlertOpen(false);
  }

  const handleNewSave = async () => {
    const title = dialogue_title_ref.current.value;
    const body = dialogue_body_ref.current.value;
    if(body.length == 0){
      console.log("body empty!!");
      setConfirmAlert(false);
      setAlertOpen(true);
    }else {
      const result = await server.post('/writes', {title: title.length == 0 ? 'No Title' : title, body: body});
      fetchWrites();
      setConfirmAlert(false);
      setAlertOpen(false);
      setDialogueChanged(false);
      setNewDialogueOpen(false);
      setSaveSuccess(true);
    }
  }

  const handleClose = () => {
    if(dialogue_changed && dialogue_body_ref.current.value.length > 0) {
      setConfirmAlert(true);
      setAlertOpen(true);
    }else {
      setAlertOpen(false);
      setNewDialogueOpen(false);
    }
  }

  const textOnChange = (event) => {
    setDialogueChanged(true);
  }

  const StatusAlert = () => {

    if(confirm_alert) {
      return (
        <Alert
          variant='filled'
          severity="warning"
          sx={{borderRadius: 0}}
          action={
            <IconButton aria-label="close" color="inherit" size="small"
              onClick={() => {
                setAlertOpen(false);
              }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }>
          You should save it first!
        </Alert>
      )
    } else {
      return (
        <Alert
          variant='filled'
          severity="error"
          sx={{borderRadius: 0}}
          action={
            <IconButton aria-label="close" color="inherit" size="small"
              onClick={() => {
                setAlertOpen(false);
              }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }>
          Oh no! You need to write something!
        </Alert>
      )
    }
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
            {dialogue_edit?
              <TextField defaultValue={dialogue.title} onChange={textOnChange} inputRef={dialogue_title_ref} id="dialogue_title" label="Title" variant="standard" fullWidth />
              :<Typography> {dialogue.title} </Typography>}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
              }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {dialogue_edit?
              <TextField defaultValue={dialogue.body} onChange={textOnChange} inputRef={dialogue_body_ref} id="dialogue_body" placeholder="Write here!" multiline rows={20} fullWidth />
            : <Typography sx={{whiteSpace: 'pre-wrap'}}> {dialogue.body} </Typography>}
          </DialogContent>
          <DialogActions>
            {dialogue.id ?
            <Button sx={{color: '#d62828'}} onClick={handleDelete}>
              Delete
            </Button> : null}
            {dialogue_edit ?
              <Button autoFocus onClick={handleEdit}>
              View
              </Button>
            :
              <Button autoFocus onClick={handleEdit}>
              Edit
              </Button>
            }
          </DialogActions>
        </Dialog>
        <Dialog
          open={new_dialogue_open}
          TransitionComponent={Transition}
          fullWidth>
          <DialogTitle>
            <TextField onChange={textOnChange} inputRef={dialogue_title_ref} id="dialogue_title" label="Title" variant="standard" fullWidth />
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
              }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <TextField onChange={textOnChange} inputRef={dialogue_body_ref} id="dialogue_body" placeholder="Write here!" multiline rows={20} fullWidth />
          </DialogContent>
          <DialogActions>
            <div style={{flex: '1 0 0'}}>
            <Button onClick={handleNewSave}>
              Save
            </Button>
            </div>
            <Button onClick={handleNewDiscard}>
              Discard
            </Button>
          </DialogActions>
          <Collapse in={alert_open}>
            <StatusAlert/>
          </Collapse>
        </Dialog>
        <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} open={save_success} autoHideDuration={6000} onClose={() => setSaveSuccess(false)}>
          <Alert onClose={() => setSaveSuccess(false)} severity='success' sx={{ width: '100%'}}>
            Saved! Well done!
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </div>
  )
}
