import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import { setOnChange, wipeModal } from 'src/features/writing/writeSlice';

import { server } from 'src/axios';

export default function WriteEditForm(){
  const [edit, setEdit] = useState(false);
  const [onChange, setOnChange] = useState(false);
  const dispatch = useDispatch();

  const write = useSelector((state) => state.writeModal.write);
  const writeModalOperation = useSelector((state) => state.writeModal.operation);

  const title_ref = useRef();
  const body_ref = useRef();

  const handleSave = async () => {
    const title = title_ref.current.value;
    const body = body_ref.current.value;

    const result = await server.post('/writes', {title: title.length == 0 ? 'No Title' : title, body: body.length == 0 ? 'Write something!' : body}, {withCredentials: true});
    window.location.reload();
  }

  const handleDiscard = () => {
    dispatch(wipeModal());
  }

  return(
    <div>
      <Box className="c b i k">
        {edit || writeModalOperation === 'add_new' ?
          <TextField id="dialogue_title" onChange={() => setOnChange(true)} defaultValue={write.title} inputRef={title_ref} label="Title" variant="standard" fullWidth />
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
              {edit || writeModalOperation === 'add_new'?
                <TextField id="dialogue_body" onChange={() => setOnChange(true)} defaultValue={write.body} inputRef={body_ref} placeholder="Write here!" multiline rows={25} fullWidth />
                : <Typography sx={{whiteSpace: 'pre-wrap'}}> {write.body} </Typography>
              }
            </Box>
          </Box>
        </Box>
        <Box className="k c b i">
          <Box className="b c k i" sx={{marginBottom:'58px'}}>
            <ul>
              <li>
                <Button onClick={() => handleSave()}>
                  <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
                  Save
                  </Typography>
                </Button>
              </li>
              <li>
                <Button onClick={() => setEdit(!edit)}>
                  <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
                  {edit ? 'View' : 'Edit'}
                  </Typography>
                </Button>
              </li>
              <li>
                <Button onClick={() => handleDiscard()}>
                  <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
                  Discard
                  </Typography>
                </Button>
              </li>
              <li>
                <Button>
                  <Typography sx={{fontFamily: 'mohave', fontSize: 18}}>
                  Delete
                  </Typography>
                </Button>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
