import anime from 'animejs';
import { useEffect } from 'react';
import { MessagesCollection } from '../types';

export const useAutoScroll = (dependencies: MessagesCollection) => {
  useEffect(() => {
    anime({
      targets: '.auto-scroll',
      scrollTop:
        document.getElementsByClassName('auto-scroll')[0]?.scrollHeight,
      duration: 250,
      easing: 'easeInOutQuad',
    });
  }, [dependencies]);
};
