export enum MessageTypes {
  AUDIO = 'audio',
  BUTTON = 'button',
  CARDS = 'cards',
  CALENDLY = 'calendly',
  DIALOG = 'dialog',
  DOCUMENT = 'document',
  EVENT = 'event',
  HIDDEN = 'hidden',
  IFRAME = 'iframe',
  IMAGE = 'image',
  LOCATION = 'location',
  MEDIA_DIALOG = 'media_dialog',
  MULTIPLE_FILES = 'multiple_files',
  MULTI_QUESTION = 'multi_question',
  REDIRECT = 'redirect',
  REFERRAL = 'referral',
  STRIPE = 'stripe',
  STRIPE_INTENT = 'stripe_intent',
  TEXT = 'text',
  VIDEO = 'video',
  STRUCTURED_DATA = 'structured_data',
}

export enum AuthorTypes {
  USER = 'user',
  AGENT = 'agent',
  BOT = 'bot',
  SYSTEM = 'sys',
}

type MessageCommonProps = {
  key: string;
  ui_key?: string;
  samurai?: number;
  author_type: AuthorTypes;
  type: MessageTypes;
  timestamp: number;
  extra?: {
    id?: string;
    author?: 'ursula' | 'marina' | 'rita';
  };
};

export type MessageAudio = MessageCommonProps & {
  type: MessageTypes.AUDIO;
  url: string;
};

export type MessageButton = MessageCommonProps & {
  type: MessageTypes.BUTTON;
  message: string;
};

type Card = {
  title: string;
  description?: string;
  details?: 'ursula' | 'marina' | 'rita' | 'marco' | 'fausta';
  image?: string;
  payload: string;
};

export type MessageCards = MessageCommonProps & {
  type: MessageTypes.CARDS;
  rich_text: string;
  cards: Card[];
  payloads: string[];
};

export type MessageCalendly = MessageCommonProps & {
  type: MessageTypes.CALENDLY;
  invite_message: string;
};

export type MessageDialog = MessageCommonProps & {
  type: MessageTypes.DIALOG;
  buttons: string[];
  payloads: string[];
  rich_text: string;
  title: string;
};

export type MessageDocument = MessageCommonProps & {
  type: MessageTypes.DOCUMENT;
  url: string;
};

export type MessageEvent = MessageCommonProps & {
  type: MessageTypes.EVENT;
  action: 'assign' | 'unassign';
  agent_id: number;
};

export type MessageHidden = MessageCommonProps & {
  type: MessageTypes.HIDDEN;
};

export type MessageIframe = MessageCommonProps & {
  type: MessageTypes.IFRAME;
  url: string;
};

export type MessageImage = MessageCommonProps & {
  type: MessageTypes.IMAGE;
  url: string;
};

export type MessageLocation = MessageCommonProps & {
  type: MessageTypes.LOCATION;
  latitude: number;
  longitude: number;
  message: string;
};

export enum MediaType {
  IMAGE = 'image',
  VIDEO = 'video',
  DOCUMENT = 'document',
  AUDIO = 'audio',
}

export type MessageMediaDialog = MessageCommonProps & {
  type: MessageTypes.MEDIA_DIALOG;
  url: string;
  media_type: MediaType;
};

type File = { url: string; type: MediaType };

export type MessageMultipleFiles = MessageCommonProps & {
  type: MessageTypes.MULTIPLE_FILES;
  files: File[];
};

export type MessageMultiQuestion = MessageCommonProps & {
  type: MessageTypes.MULTI_QUESTION;
  message: string;
  rich_text: string;
};

export type MessageRedirect = MessageCommonProps & {
  type: MessageTypes.REDIRECT;
  message: string;
};

export type MessageReferral = MessageCommonProps & {
  type: MessageTypes.REFERRAL;
  message: string;
};

export type MessageStripe = MessageCommonProps & {
  type: MessageTypes.STRIPE;
  action: 'submit';
  message: string;
};

export type MessageStripeIntent = MessageCommonProps & {
  type: MessageTypes.STRIPE_INTENT;
  message: string;
  rich_text: string;
};

export type MessageText = MessageCommonProps & {
  type: MessageTypes.TEXT;
  message: string;
  rich_text: string;
};

export type MessageVideo = MessageCommonProps & {
  type: MessageTypes.VIDEO;
  url: string;
};

export type MessageStructuredData = MessageCommonProps & {
  type: MessageTypes.STRUCTURED_DATA;
  message: string;
};

export type MessageScript = MessageCommonProps & {
  type: MessageTypes.HIDDEN;
  action: 'script';
  script: string;
};

export type MessageFinish = MessageCommonProps & {
  type: MessageTypes.HIDDEN;
  action: 'finish';
};

export type Message =
  | MessageAudio
  | MessageButton
  | MessageCalendly
  | MessageCards
  | MessageDialog
  | MessageDocument
  | MessageEvent
  | MessageHidden
  | MessageIframe
  | MessageImage
  | MessageLocation
  | MessageMediaDialog
  | MessageMultiQuestion
  | MessageMultipleFiles
  | MessageRedirect
  | MessageReferral
  | MessageStripe
  | MessageStripeIntent
  | MessageStructuredData
  | MessageText
  | MessageVideo;

export type MessagesCollection = Record<Message['key'], Message>;
