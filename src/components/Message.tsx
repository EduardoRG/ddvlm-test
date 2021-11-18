import { useLayoutEffect } from 'react';
import { Avatar, Box, Tooltip, Paper } from '@mui/material';
import ursulaAvatar from '../assets/ursula.png';
import marinaAvatar from '../assets/marina.png';
import ritaAvatar from '../assets/rita.png';
import anime from 'animejs';

const AVATARS = {
  ursula: ursulaAvatar,
  marina: marinaAvatar,
  rita: ritaAvatar,
};

const NAMES = {
  ursula: 'Úrsula',
  marina: 'Marina',
  rita: 'Rita',
};

const BUBBLES = {
  ursula: '#fafffc',
  marina: '#f4d9ff',
  rita: '#fdcde9',
};

interface MessageProps {
  id: string;
  author: 'ursula' | 'marina' | 'rita';
  text: string;
  isStart?: boolean;
  isEnd?: boolean;
}

export const Message = ({ id, author, text, isStart, isEnd }: MessageProps) => {
  useLayoutEffect(() => {
    const anims = anime.timeline();

    if (isStart) {
      anims.add({
        targets: `#${id} .avatar`,
        opacity: [0, 1],
        translateX: [-10, 0],
        duration: 400,
      });
    }

    anims.add(
      {
        targets: `#${id} .message-text`,
        opacity: [0, 1],
        duration: 600,
        easing: 'easeInOutQuad',
      },
      '-=100'
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box id={id} mb={isEnd ? 3 : 0.5} display="flex">
      <Box mr={1} className="avatar" position="relative" sx={{ width: 56 }}>
        {isStart && (
          <Tooltip title={NAMES[author]}>
            <Avatar
              src={AVATARS[author]}
              alt="avatar"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 56,
                height: 56,
                // ['(min-width: )']
              }}
            />
          </Tooltip>
        )}
      </Box>
      <Box className="message-text" flex={1}>
        <Paper
          sx={{
            display: 'inline-block',
            backgroundColor: BUBBLES[author],
            borderRadius: '15px 3px 3px 3px',
            paddingY: 1,
            paddingX: 2,
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: text }} />
        </Paper>
      </Box>
    </Box>
  );
};
