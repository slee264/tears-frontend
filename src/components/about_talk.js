import React from 'react';
import Typography from '@mui/material/Typography';

import "@fontsource/mohave";

export default function AboutTalk() {

  return(
    <div class='about'>
      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h3" component="div">
        Talk? I don't want to talk.
      </Typography>
      <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h4" component="div">
        I know. Many don't.
      </Typography>
      <Typography sx={{fontFamily: 'mohave', color: '#6d6875'}} variant="h5" component="div">
        Talking about your problems and how you feel about them can be difficult for some. <br />
        I was one of them. It's not that I don't have anyone to talk to, but it was that <br />
        I didn't think talkng would help. 'How is talking going to help with my problems?' - that was exactly my opinion. <br />
        <Typography sx={{fontFamily: 'mohave', color: 'black'}} variant="h5" component="div">
        Exactly. Talking does not make your problems go away. And you shouldn't expect it to.<br />
        </Typography>
        Sadness often lock us in our head, and it's a whole different world in there. Many thoughts in different shapes and form come and go. <br />
        Some thoughts just pass by, while others do not. They stay. So what about talking? <br />
        When you talk to others about how you feel, especially when you feel sad and depressed, <br />
        people will seldom turn away from you. And when they tell you how they feel about how you feel, <br />
        a couple of things can happen. One is that you might learn that they often have a different view of your problem, your situation, <br />
        or  just you. <br />
        Another is that you might realize or learn your place and value to those around you. <br />
        Some kind of a renewed sense, so to speak. And you'll realize that our lives are not exactly our own. <br />
        Don't get me wrong, I firmly believe that when it comes down to it, <br />
        nobody can really stop you from doing what you want with it. <br />
        And I'm not only talking about chasing your dreams or just upping and leaving. <br />
        I'm talking about life itself. <br />
        My point is, you might find new reasons to keep going. Are those good enough reasons? <br />
        Well, that's up to you to decide. But talking will help you find those reasons. <br />
      </Typography>
    </div>
  )
}
