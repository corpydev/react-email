'use client';

import { GENDER_TITLE } from '../constants';

import { UserEmailData } from 'transactional/types/UserData';

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

const baseUrl = "";

export const UserEmail: React.FC<UserEmailData> = ({
  heading,
  username,
  gender,
  content,
  inviteLink,
  inviteLinkContent,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
            <Section className="relative">
              <Img src={`${baseUrl}/static/background.png`} />
              <Text className='text-4xl font-medium text-white absolute left-10 top-1/2 transform -translate-y-1/2'>{heading}</Text>
            </Section>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Dear {GENDER_TITLE[gender!]} {username},
            </Text>
            <Section>
              <Text className="text-black text-[14px] leading-[24px]">
                {content}
              </Text>
            </Section>

            <Section>
              <Row className='text-center'>
                <Column>
                    <Text className="mx-auto">
                      <Img
                        className='w-12 inline-block'
                        src={`${baseUrl}/static/icons/time.png`}
                        alt="Folder icon"
                        width="100%"
                      />
                    </Text>
                    <Text>Lorem ipsum...</Text>
                </Column>
                <Column>
                    <Text className="mx-auto">
                      <Img
                        className='w-12 inline-block'
                        src={`${baseUrl}/static/icons/hand.png`}
                        alt="Folder icon"
                        width="100%"
                      />
                    </Text>
                    <Text>Lorem ipsum...</Text>
                </Column>
                <Column>
                    <Text className="mx-auto">
                      <Img
                        className='w-12 inline-block'
                        src={`${baseUrl}/static/icons/folder.png`}
                        alt="Folder icon"
                        width="100%"
                      />
                    </Text>
                    <Text>Lorem ipsum...</Text>
                </Column>
              </Row>
            </Section>

            <Text className="text-[14px] w-full text-center">
                <Button
                  href={inviteLink}
                  className="font-medium text-white bg-green-600 px-16 py-4 text-center"
                >
                  {inviteLinkContent}
                </Button>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
