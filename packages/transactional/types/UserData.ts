export type TGender = 'other' | 'male' | 'female';

export interface UserEmailData {
    heading?: string;
    username?: string;
    title?: string;
    gender?: TGender;
    content?: string;
    inviteLink?: string;
    inviteLinkContent?: string;
  }