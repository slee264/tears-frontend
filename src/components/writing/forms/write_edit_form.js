import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import { wipeModal, saveWriteModal, editWriteModal } from 'src/features/writing/writeSlice';

import { server } from 'src/axios';

export default function WriteEditForm(){
  const [edit, setEdit] = useState(false);
  const [onChange, setOnChange] = useState(false);
  const [save_success, setSaveSuccess] = useState(false);
  const [write, setWrite] = useState(useSelector((state) => state.writeModal.write));
  const dispatch = useDispatch();

  const writeModalOperation = useSelector((state) => state.writeModal.operation);

  const title_ref = useRef();
  const body_ref = useRef();

  const handleSave = async () => {
    let title;
    let body;

    if(edit || writeModalOperation === 'new'){
      title = title_ref.current.value;
      body = body_ref.current.value;
    }else{
      title = write.title;
      body = write.body;
    }

    let result;
    if(writeModalOperation === 'new') {
      result = await server.post('/writes', {title: title.length == 0 ? 'No Title' : title, body: body.length == 0 ? 'Write something!' : body}, {withCredentials: true});
      dispatch(wipeModal());
    }

    if(writeModalOperation === 'patch'){
      result = await server.patch('/writes/' + write.id, {title, body}, {withCredentials: true});
      setOnChange(false);
    }

    dispatch(saveWriteModal());
  }

  const handleDiscard = () => {
    dispatch(wipeModal());
  }

  const handleDelete = async () => {

  }

  const handleTextChange = () => {
    if(!onChange){
      dispatch(editWriteModal());
      setOnChange(true);
    }
  }

  const handleEdit = () => {
    if(edit){
      setWrite({...write, title: title_ref.current.value, body: body_ref.current.value});
    }
    setEdit(!edit);
  }

  return(
    <div>
      <Box className="c b i k">
        {edit || (writeModalOperation === 'new')?
          <TextField id="dialogue_title" onChange={() => handleTextChange()} defaultValue={write.title} inputRef={title_ref} label="Title" variant="standard" fullWidth />
        :
          <Typography variant='h3' fontFamily='Merriweather'> {write.title} </Typography>
        }
      </Box>
      <Box className="c b i k">
        <Box className="b c" sx={{maxWidth: '316px', marginTop: '30px'}}>
        </Box>
      </Box>
      <Box className="b c" sx={{marginTop: '50px'}}>
        <Box className="k c b i">
          <Box className="b c k i" sx={{marginBottom: '40px'}}>
            <Box className="k c b i">
              {edit || (writeModalOperation === 'new')?
                <TextField id="dialogue_body" onChange={() => handleTextChange()} defaultValue={write.body} inputRef={body_ref} placeholder="Write here!" multiline rows={25} fullWidth />
                : <Typography sx={{whiteSpace: 'pre-wrap'}}> {write.body} </Typography>
              }
            </Box>
          </Box>
        </Box>
        <Box className="k c b i">
          <Box className="b c k i" sx={{marginBottom:'58px'}}>
            <ul>
              <li>
                <Button disabled={!onChange} onClick={() => handleSave()}>
                  <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
                  Save
                  </Typography>
                </Button>
              </li>
              {writeModalOperation === 'new' ? null
              :
              <li>
                <Button onClick={() => handleEdit()}>
                  <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
                  {edit ? 'View' : 'Edit'}
                  </Typography>
                </Button>
              </li>}
              <li>
                <Button disabled={!onChange} onClick={() => handleDiscard()}>
                  <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
                  Discard
                  </Typography>
                </Button>
              </li>
              { writeModalOperation === 'new' ? null : <li>
                <Button onClick={() => handleDelete()}>
                  <Typography sx={{fontFamily: 'mohave', fontSize: 18, color: 'red'}}>
                  Delete
                  </Typography>
                </Button>
              </li>
            }
            </ul>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
