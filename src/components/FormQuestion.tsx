import React, { useLayoutEffect, useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { MessageCards } from '../types';
import LandbotCore from '@landbot/core';
import anime from 'animejs';

interface FormQuestionProps {
  id: string;
  text: string;
  cards: MessageCards['cards'];
  landbot: LandbotCore;
}

export const FormQuestion = ({
  id,
  landbot,
  text,
  cards,
}: FormQuestionProps) => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);
  const isWide = useMediaQuery('(min-width: 600px)');

  useLayoutEffect(() => {
    const anims = anime.timeline();

    anims
      .add({
        targets: `#${id} .FormQuestion__title`,
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 1000,
        easing: 'easeInOutQuad',
      })
      .add({
        targets: `#${id} .FormQuestion__card`,
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 6000,
      });
  }, [id]);

  return (
    <Box id={id} my={8}>
      {/* <Typography variant="h6">{text}</Typography> */}
      <Box className="FormQuestion__title" mb={2}>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </Box>
      <Grid container spacing={1}>
        {cards.map(({ title, description, image, payload }) => (
          <Grid
            key={payload}
            item
            xs={12}
            sm={4}
            className="FormQuestion__card"
          >
            <Card
              onClick={
                clickedItem
                  ? undefined
                  : () => {
                      setClickedItem(payload);
                      landbot.sendMessage({
                        type: 'button',
                        message: title,
                        payload,
                      });
                    }
              }
              sx={{
                opacity: !clickedItem || clickedItem === payload ? 1 : 0.5,
              }}
            >
              <CardActionArea disabled={!!clickedItem}>
                {image && isWide && (
                  <CardMedia component="img" image={image} alt={title} />
                )}
                <CardContent>
                  <Box mb={description ? 1 : 0}>
                    <Typography variant="h6" sx={{ lineHeight: '1.2em' }}>
                      {title}
                    </Typography>
                  </Box>
                  {description && (
                    <Typography variant="body2">{description}</Typography>
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
