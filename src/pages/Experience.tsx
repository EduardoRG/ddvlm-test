import { useNavigate } from 'react-router-dom';
import { useLandbotInit, useLandbotEnding, useMessages } from '../hooks';
import { Loader } from '../components/Loader';
import { Messenger } from '../components/Messenger';
import { Calculating } from '../components/Calculating';
import { routes } from '../routes';
import { landbot } from '../landbot';

export const Experience = () => {
  const { messages, setMessages } = useMessages();
  const { showEnding } = useLandbotEnding();
  const { loading } = useLandbotInit();
  const navigate = useNavigate();

  return loading ? (
    <Loader />
  ) : (
    <>
      <Messenger landbot={landbot} messages={messages} />
      {showEnding && (
        <Calculating
          onResetMessages={() => setMessages({})}
          onComplete={() => navigate(routes.comments)}
        />
      )}
    </>
  );
};
