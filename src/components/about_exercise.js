import React from 'react';
import Typography from '@mui/material/Typography';

import "@fontsource/mohave";

export default function AboutExercise() {

  return(
    <div class='about'>
      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h3" component="div">
        Ugh. Here we go again with exercising.
      </Typography>
      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h4" component="div">
        You've probably heard this a million times already.
      </Typography>
      <Typography sx={{fontFamily: 'mohave', color: '#6d6875'}} variant="h5" component="div">
        Before we start, I want to make this clear: I believe that people are more than just products of <br />
        genetic, environmental, psychological, and physical factors. I believe that human will can, if strong enough, trump all of those factors. <br />
        <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
        But we are emotional beings. So we need to stay in ship shape physically whenever and wherever we can. <br />
        </Typography>
        
      </Typography>
    </div>
  )
}
