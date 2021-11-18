import LandbotCore from '@landbot/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export const landbot = new LandbotCore({
  firebase,
  configUrl:
    'https://chats.landbot.io/v3/H-1033541-Q4044R6NWHI2NSEF/index.html',
});
