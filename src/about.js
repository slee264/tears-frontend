import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import "@fontsource/mohave";

export default function About() {

  return(
    <div>
      <Grid container sx={{width: '100%', mt: 3}}>
        <Grid item xs={12} align='center'>
          <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h3" component="div">
            Welcome to TEARS project!
          </Typography>
        </Grid>
        <Grid item xs={12} align='center'>
          <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h4" component="div">
            What is TEARS?
          </Typography>
          <Typography sx={{fontFamily: 'mohave', color: '#6d6875'}} variant="h5" component="div">
            TEARS stands for Talking, Exercising, Artistic writing, Recording, and Soul-searching. TEARS is a mental health improvement project started by me, Joe. <br/>
            Every once in a while, life throws at us problems that we often have no control over. <br/>
            I know it fully well because I've gone through those problems myself (going through one at the time of developing this project). <br/>
            Or it doesn't have to be anything significant. We all feel the darkness at some point in our lives for unknown reasons. <br/>
            A stoic philosopher Seneca once said, "we suffer more in imagination than in reality". <br/>
            <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
              Depression - and everything that follows - is no joke.
            </Typography>
            It conjures negative emotions and outlooks on life,
            and in turn, those muddy our mental vision, hinder our ability to think straight, and deprive us of motivation to do anything. <br/>
            There are many schools of thought on mental health and happiness. <br/>
            Some contend that depression is a mental illness that can be fixed with modern medicine, <br/>
            while others contend that life naturally is a struggle that needs to be endured. <br/>
            I am still learning myself, but one thing I've come to realize is that it's a fight that ultimately needs to be dealt with by ourselves. <br/>
            This project by no means claims to be a cure for everyone. Everyone is wired differently, with differnt upbringings and struggles. <br/>
            There's no guarantee that this project would be able to help everyone, if any. Everyone needs a solution that fits him/herself, and it is different for everyone. <br/>
            Therefore, what I hope I can turn this project into is not a cure, but a tool that can help people find their own solutions through basic means <br/>
            - like talking, exercising, artistic writing, recording, and soul-searching.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
