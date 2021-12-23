import React from 'react';
import Typography from '@mui/material/Typography';

import "@fontsource/mohave";

export default function AboutWrite() {

  return(
    <div class='about'>
      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h3" component="div">
        Why write? Write about what?
      </Typography>
      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h4" component="div">
        Inspiration can come from anywhere.
      </Typography>
      <Typography sx={{fontFamily: 'mohave', color: '#6d6875'}} variant="h5" component="div">
        Writing, artistic writing to be more specific, can help people cope with difficult times. <br />
        It goes without saying that there are many movies, songs, poems, books, and other forms of artistry out there that were inspired by sadness. <br />
        And people watch them. Why? I mean, in terms of business, happiness sells more than sadness. <br />
        I don't work in advertising, but I don't think it takes a genius to figure that out. <br />
        <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
        So why is there such a steady stream of artistry that deals with our dark side? <br />
        </Typography>
        Inspiration can come from anywhere, and turning your sadness and depressed emotions into something beautiful, <br />
        something that people can relate to, not only helps you lay out your thoughts in the most honest way, but it also helps <br />
        you discover many different (often novel) views of the same feeling. One thing I sometimes do is that whenever I'm feeling down, <br />
        I try to detach myself and imagine looking at me from a third person's point of view, like in the movies. <br />
        For the life of me I can't remember who it was, but somebody said the best way to cope with difficult times to turn them into plays. <br />
        Or a movie script, a poem, a short story, and etc. You get my point, right? So try it. <br />
      </Typography>
    </div>
  )
}
