import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { writeModal } from 'src/features/writing/writeSlice';

import Backdrop from '@mui/material/Backdrop';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import WriteModalTemplate from './forms/write_modal_template';
import WriteEditForm from './forms/write_edit_form';

import { server } from 'src/axios';

export default function WritingHome() {
  const [backdrop_open, setBackdropOpen] = useState(true);
  const [writes_list, setWritesList] = useState([]);
  const writeModalStep = useSelector((state) => state.writeModal.step);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchWrites();
  }, []);

  const fetchWrites = async () => {
    let list = [];
    list.push(<li class="grid__item small--one-half medium-up--one-third"> {cardBoilerPlate({title: '', body: ''}, true)} </li>);
    const writes = await server.get('/writes', {withCredentials: true});
    writes.data.map(write => {
      list.push(<li class="grid__item small--one-half medium-up--one-third"> {cardBoilerPlate(write, false)} </li>)
    });
    setWritesList(list);
  }

  const cardBoilerPlate = (write, new_card) => {
    return(
      <Card sx={new_card ? {background: '#457b9d', color: '#fff', maxWidth: 345, height: 150, mx:2, mt: 2} : {maxWidth: 345, height: 150, mx: 2, mt:2}}>
        <CardActionArea onClick={() => handleClickCard(write, new_card)}>
            <Typography fontFamily='Merriweather' align='center' variant='h2' component="div" gutterBottom>
              {new_card ? '+' : write.title}
            </Typography>
          <CardContent align='center'>
            <Typography variant="h5" component="div" >
              {new_card ?
                'Add new' :
                write.body.length > 13 ? write.body.slice(0,13) + '...' : write.body
              }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }

  const handleClickCard = (write, new_card) => {
    dispatch(writeModal({write, new_card}));
  }

  const renderOperation = () => {
    switch(true) {
      case (writeModalStep == 'WRITE_EDIT_OPTIONS'):
        return(<WriteModalTemplate operationTemplate=<WriteEditForm /> />);
    }
  }

  return(
    <div>
      <Backdrop sx={{ zIndex: 500, color: '#FFFFFF'}}
                open={backdrop_open}
                onClick={() => setBackdropOpen(false)}
                data-testid="introductory-backdrop">
        <Typography align='center' variant="h5" component="div">
          Someone said one of the best ways to overcome tough times is to turn them into stories. <br/>
          Write your story. It could be a short story, poem, song, prayer, anything you want.
        </Typography>
      </Backdrop>
      <div class="tears-section index-section">
        <div class="page-width">
          <div class="section-header text-center">
            Header
          </div>
          <ul class="grid grid--uniform grid--view-items">
            {writes_list}
          </ul>
        </div>
      </div>
      <div>
        <Modal open={writeModalStep}>
          {renderOperation()}
        </Modal>
      </div>
    </div>
  )
}
