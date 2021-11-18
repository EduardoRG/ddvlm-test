import React, { ReactElement, useMemo } from 'react';
import { Message } from '../types';

export interface MessageGrouperProps {
  currentMessage: Message;
  beforeMessage?: Message;
  afterMessage?: Message;
  children: ReactElement;
}

export const MessageGrouper = ({
  beforeMessage,
  currentMessage,
  afterMessage,
  children,
}: MessageGrouperProps): ReactElement => {
  const isStart: boolean = useMemo(
    () =>
      !beforeMessage ||
      beforeMessage?.extra?.author !== currentMessage.extra?.author,
    [beforeMessage, currentMessage]
  );

  const isEnd: boolean = useMemo(
    () =>
      !afterMessage ||
      afterMessage?.extra?.author !== currentMessage.extra?.author,
    [afterMessage, currentMessage]
  );

  return React.cloneElement(children, {
    isStart,
    isEnd,
    minimal: !isStart,
  });
};
