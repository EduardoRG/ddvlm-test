import anime from 'animejs';
import { useLayoutEffect, useRef } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  Button,
  IconButton,
  Typography,
  CardMedia,
  useMediaQuery,
  CardContent,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import bookImage from '../assets/Portada DDVLM.jpg';

interface BookCardScreenProps {
  setShowBookCardScreen: (value: boolean) => void;
}

export const BookCardScreen = ({
  setShowBookCardScreen,
}: BookCardScreenProps) => {
  const overlay = useRef<HTMLDivElement>(null);
  const isWide = useMediaQuery('(min-width: 730px)');

  useLayoutEffect(() => {
    const anims = anime.timeline();

    anims.add({
      targets: overlay.current,
      opacity: [0, 1],
      duration: 400,
      easing: 'easeInOutQuad',
    });

    anims.add({
      targets: '#ending-card',
      opacity: [0, 1],
      translateY: [50, 0],
      scale: [0.9, 1],
      duration: 400,
      easing: 'easeInOutQuad',
    });
  }, []);

  const handleClickClose = () => {
    setShowBookCardScreen(false);
  };

  return (
    <Box
      ref={overlay}
      position="fixed"
      top="0"
      right="0"
      bottom="0"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        top: {
          xs: 60,
          sm: 0,
        },
        left: {
          xs: 0,
          sm: 60,
        },
      }}
    >
      {isWide ? (
        <Card id="ending-card" sx={{ maxWidth: 550 }}>
          <CardActionArea
            href="https://tienda.literup.com/product/de-donde-viene-la-magia/"
            target="_blank"
            sx={{
              display: 'flex',
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              p={4}
            >
              <Box mb={1}>
                <Typography variant="subtitle1" fontWeight="bold">
                  De donde viene la magia
                </Typography>
              </Box>
              <Box mb={1}>
                <Typography variant="body1">
                  Tres brujas jóvenes se enfrentan al horror del mundo exterior
                  en esta <em>novelette</em> de fantasía.
                </Typography>
              </Box>
              <Box mt={2}>
                <Button variant="contained" size="large">
                  Comprar
                </Button>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 200 }}
              image={bookImage}
              alt="De donde viene la magia"
            />
          </CardActionArea>
        </Card>
      ) : (
        <Card id="ending-card" sx={{ width: 290, maxWidth: '60%' }}>
          <CardActionArea
            href="https://tienda.literup.com/product/de-donde-viene-la-magia/"
            target="_blank"
          >
            <CardMedia
              component="img"
              image={bookImage}
              alt="De donde viene la magia"
            />
            <CardContent>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Button variant="contained" size="large">
                  Comprar
                </Button>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}
      >
        <IconButton
          onClick={handleClickClose}
          sx={{ color: 'white !important' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
