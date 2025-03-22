import { useEffect, useState } from 'react';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Box, Container, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Header from '@/components/Header/Header';
import { theme } from '@/theme';

export default function Privacy() {
  const [scrolled, setScrolled] = useState(false);
  const extraSmallScreen = useMediaQuery('(max-width: 575px)');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const { t } = useTranslation('privacy');
  const privacy = [
    {
      title: t('informationWeCollect.title'),
      text: t('informationWeCollect.description'),
    },
    {
      title: t('howWeUseYourInformation.title'),
      text: t('howWeUseYourInformation.description'),
    },
    {
      title: t('dataProtectionSecurity.title'),
      text: t('dataProtectionSecurity.description'),
    },
    {
      title: t('sharingYourInformation.title'),
      text: t('sharingYourInformation.description'),
    },
    {
      title: t('yourRights.title'),
      text: t('yourRights.description'),
    },
    {
      title: t('changesToPolicy.title'),
      text: t('changesToPolicy.description'),
    },
  ];
  return (
    <>
      <Header color hide={scrolled} />
      <Box pb={theme.spacing?.xl} pt="10vh">
        <Container size={extraSmallScreen ? '90%' : '80%'}>
          <Title c={theme.colors?.yellow?.[1]} fw={700} order={1} ta="center">
            {t('title')}
          </Title>
          <Text c={theme.colors?.black?.[3]} my={theme.spacing?.md} size="xl" fw={600} ta="center">
            {t('description')}
          </Text>
          {privacy.map((item, index) => (
            <Box key={index}>
              <Title c={theme.colors?.yellow?.[1]} fw={700} order={3} ta="center">
                {item.title}
              </Title>
              <Text
                c={theme.colors?.black?.[3]}
                my={theme.spacing?.sm}
                size="xl"
                fw={600}
                ta="center"
              >
                {item.text}
              </Text>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}

export async function getStaticProps({ locale = 'en' }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'privacy'])),
      // Will be passed to the page component as props
    },
  };
}
