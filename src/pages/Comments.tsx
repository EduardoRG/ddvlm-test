import { useLandbotEnding, useMessages } from '../hooks';
import { Messenger } from '../components/Messenger';
import { Ending } from '../components/Ending';
import { landbot } from '../landbot';
import { useEffect } from 'react';

export const Comments = () => {
  const { showEnding } = useLandbotEnding();
  const { messages } = useMessages();

  useEffect(() => {
    landbot.sendMessage({
      type: 'hidden',
      message: 'continue',
      payload: 'default',
    });
  }, []);

  return (
    <>
      <Messenger landbot={landbot} messages={messages} />
      {showEnding && <Ending />}
    </>
  );
};
