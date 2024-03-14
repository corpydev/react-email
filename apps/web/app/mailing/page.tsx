'use client';

import { useSearchParams } from 'next/navigation'

import { render } from '@react-email/components';

import { UserEmail } from 'transactional/emails/user';
import { TGender } from 'transactional/types/UserData';

export default function Page(): JSX.Element {
  const searchParams = useSearchParams();

  const username =  searchParams.get('username') || 'No username';
  const gender =  searchParams.get('gender') as TGender || 'other';
  const heading = searchParams.get('heading') || 'No heading';
  const content =  searchParams.get('content') || 'No content';
  const inviteLink =  searchParams.get('inviteLink') || 'No provided link';
  const inviteLinkContent =  searchParams.get('inviteLinkContent') || 'No provided content';

  const emailHTML = render(<UserEmail
      heading = {heading}
      username = {username}
      gender = {gender}
      content = {content}
      inviteLink = {inviteLink}
      inviteLinkContent = {inviteLinkContent}
    />, {
      pretty: true,
    }
  );

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: emailHTML }} />
    </div>
  );
}
