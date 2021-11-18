import React, { useLayoutEffect } from 'react';
import { Box } from '@mui/material';
import anime from 'animejs';

import './Loader.css';

export const Loader = () => {
  useLayoutEffect(() => {
    anime({
      targets: '#Loader .infinityChrome div',
      opacity: [0, 1],
      duration: 2000,
      delay: anime.stagger(200),
    });
  }, []);

  return (
    <Box
      id="Loader"
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <div className="infinityChrome">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Box>
    </Box>
  );
};
