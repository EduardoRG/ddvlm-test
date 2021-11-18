import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import anime from 'animejs';
import { routes } from '../routes';
import titleImage from '../assets/Título PNG.png';
import { Box, Button, Container } from '@mui/material';

export const Intro = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  useLayoutEffect(() => {
    const anims = anime.timeline();

    anims
      .add({
        targets: '#title',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 2000,
        easing: 'easeOutExpo',
        delay: 1000,
      })
      .add(
        {
          targets: '#start-button',
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 2000,
          easing: 'easeOutExpo',
        },
        '-=1500'
      );
  }, []);

  const handleClick = () => {
    setClicked(true);
    anime({
      targets: '#title',
      opacity: [1, 0],
      translateY: [0, -50],
      duration: 2000,
      easing: 'easeOutExpo',
      endDelay: 500,
      complete: () => navigate(routes.experience),
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Container maxWidth="xs">
        <Box id="title" display="flex" justifyContent="center">
          <img
            src={titleImage}
            width="50%"
            height="auto"
            alt="de donde viene la magia"
            style={{ alignSelf: 'center' }}
          />
        </Box>
        <Box id="start-button" display="flex" justifyContent="center">
          <Button
            variant="contained"
            size="large"
            onClick={handleClick}
            sx={{ visibility: clicked ? 'hidden' : undefined }}
          >
            Experiencia
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
