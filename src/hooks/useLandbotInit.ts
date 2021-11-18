import { useEffect, useState } from 'react';
import { landbot } from '../landbot';

export const useLandbotInit = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    landbot.init().then(() => {
      setTimeout(() => {
        landbot.sendMessage({ message: 'start' });
        setLoading(false);
      }, 1500);
    });
  }, []);

  return { loading };
};
