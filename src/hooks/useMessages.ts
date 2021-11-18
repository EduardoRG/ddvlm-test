import { useEffect, useState } from 'react';
import { Message, MessagesCollection } from '../types';
import { landbot } from '../landbot';

export const useMessages = () => {
  const [messages, setMessages] = useState<MessagesCollection>({});

  useEffect(() => {
    const subscription = landbot.pipelines.$readableSequence.subscribe(
      (message: Message) => {
        setMessages((state) => ({
          ...state,
          [message.key]: message,
        }));
      }
    );
    return () => subscription.unsubscribe();
  }, []);

  return {
    messages,
    setMessages,
  };
};
