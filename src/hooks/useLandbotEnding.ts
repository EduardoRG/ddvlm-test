import { useEffect, useState } from 'react';
import { landbot } from '../landbot';
import { MessageFinish } from '../types';

export const useLandbotEnding = () => {
  const [showEnding, setShowEnding] = useState(false);

  useEffect(() => {
    const subscription = landbot.pipelines.$readableSequence.subscribe(
      (message: MessageFinish) => {
        if (message.action === 'finish') {
          setShowEnding(true);
          subscription.unsubscribe();
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return { showEnding };
};
