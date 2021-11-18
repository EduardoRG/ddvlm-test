import { Box, Container } from '@mui/material';
import {
  MessageCards,
  MessagesCollection,
  MessageText,
  MessageTypes,
} from '../types';
import { FormQuestion } from './FormQuestion';
import { Message } from './Message';
import { MessageGrouper } from './MessageGrouper';
import LandbotCore from '@landbot/core';
import ScrollableFeed from 'react-scrollable-feed';
import styled from 'styled-components';
import anime from 'animejs';

interface MessengerProps {
  messages: MessagesCollection;
  landbot: LandbotCore;
}

const ScrollingElement = styled(ScrollableFeed)`
  height: 100%;
`;

export const Messenger = ({ messages, landbot }: MessengerProps) => {
  const messagesList = Object.values(messages).sort(
    (a, b) => a.timestamp - b.timestamp
  );

  return (
    <ScrollingElement
      forceScroll
      animateScroll={(element, offset) => {
        anime({
          targets: element,
          scrollTop: offset,
          duration: 500,
          easing: 'easeOutQuad',
        });
      }}
    >
      <Container maxWidth="sm">
        <Box py={10} px={2} sx={{ height: '100%' }}>
          {messagesList.map((messageItem, index) => {
            const { key, extra, type } = messageItem;
            const author = extra?.author;

            if (author) {
              const { rich_text, message } = messageItem as MessageText;
              return (
                <MessageGrouper
                  key={key}
                  beforeMessage={messagesList[index - 1]}
                  currentMessage={messagesList[index]}
                  afterMessage={messagesList[index + 1]}
                >
                  <Message
                    id={key}
                    text={rich_text || message}
                    author={author}
                  />
                </MessageGrouper>
              );
            }
            if (type === MessageTypes.CARDS) {
              const { cards, rich_text, payloads } =
                messageItem as MessageCards;
              return (
                <FormQuestion
                  key={key}
                  id={key}
                  landbot={landbot}
                  text={rich_text}
                  cards={cards.map((card, index) => ({
                    ...card,
                    payload: payloads[index],
                  }))}
                />
              );
            }
            return null;
          })}
        </Box>
      </Container>
    </ScrollingElement>
  );
};
