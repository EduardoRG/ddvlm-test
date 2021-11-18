import anime from 'animejs';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { landbot } from '../landbot';
import { MessageScript, MessageTypes } from '../types';

interface CalculatingProps {
  onResetMessages: () => void;
  onComplete: () => void;
}

export const Calculating = ({
  onResetMessages,
  onComplete,
}: CalculatingProps) => {
  const overlay = useRef<HTMLDivElement>(null);
  const [result, setResult] = useState<string>();

  useLayoutEffect(() => {
    const anims = anime.timeline();

    anims.add({
      targets: overlay.current,
      translateX: ['-100%', '0%'],
      duration: 1000,
      easing: 'easeInOutQuad',
      complete: () => {
        onResetMessages();
      },
    });

    anims.add({
      targets: '#calculating-subtitle',
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      easing: 'easeInOutQuad',
      complete: () => {
        landbot.sendMessage({
          message: 'results',
        });
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onMessage = (message: MessageScript) => {
      if (message.type === MessageTypes.HIDDEN && message.action === 'script') {
        setResult(message.script);

        const anims = anime.timeline();

        anims.add({
          targets: '#calculating-result',
          opacity: [0, 1],
          translateY: [50, 0],
          duration: 1000,
          easing: 'easeInOutQuad',
        });

        anims.add(
          {
            targets: overlay.current,
            translateX: ['0%', '100%'],
            duration: 1000,
            easing: 'easeInOutQuad',
            complete: () => {
              onComplete();
            },
          },
          '+=1000'
        );
      }
    };
    landbot.events.on('new_message', onMessage);
    return () => {
      landbot.events.off('new_message', onMessage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      ref={overlay}
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: 'floralwhite',
      }}
    >
      <Box mb={4} height={28}>
        <Typography id="calculating-subtitle" variant="subtitle1">
          Te pareces a...
        </Typography>
      </Box>
      <Box height={112}>
        <Typography id="calculating-result" variant="h1">
          {result}
        </Typography>
      </Box>
    </Box>
  );
};
