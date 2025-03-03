import { useEffect, useState } from 'react';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import NextImage from 'next/image';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import * as Yup from 'yup';
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Grid,
  GridCol,
  Group,
  Image,
  Paper,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';
import Header from '@/components/Header/Header';
import design from '@/public/images/contact-design.png';
import { theme } from '@/theme';

export default function ContactUs() {
  const { t } = useTranslation('contact');
  const isMediumScreen = useMediaQuery(`(max-width: 992px)`);
  // const isSmallScreen = useMediaQuery(`(max-width: 576px)`);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('validation.name')),
    email: Yup.string().email(t('validation.email')).required(t('validation.email-required')),
    phone: Yup.string()
      .matches(/^\+1[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, t('validation.phone-format'))
      .required(t('validation.phone')),
    subject: Yup.string(),
    message: Yup.string().required(t('validation.message')),
  });
  const contactForm = useForm({
    initialValues,
    validate: yupResolver(validationSchema),
  });
  const submitMessage = async () => {
    setIsSending(true);
    console.log(contactForm.values);
    await axios
      .post('/api/contact-mail', contactForm.values)
      .then(() => {
        // setIsSending(false);
        console.log('Email sent successfully');
      })
      .catch((error) => {
        console.log('Error sending mail: ', error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };
  const sendConfirmationMessage = async () => {
    await axios
      .post('/api/confirmation-mail', {
        email: contactForm.values.email,
        name: contactForm.values.name,
      })
      .then(() => {
        console.log('Confirmation email sent successfully');
      })
      .catch((error) => {
        console.log('Error sending confirmation email: ', error);
      });
  };
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
  }, [scrolled]);
  return (
    <>
      <Head>
        {/* Standard Meta Tags */}
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <meta name="robots" content={t('meta.robots')} />
        <link rel="canonical" href={t('meta.canonical')} />

        {/* Open Graph Meta Tags (For Facebook, LinkedIn) */}
        <meta property="og:title" content={t('openGraph.title')} />
        <meta property="og:description" content={t('openGraph.description')} />
        <meta property="og:url" content={t('openGraph.url')} />
        <meta property="og:image" content={t('openGraph.image')} />
        <meta property="og:type" content={t('openGraph.type')} />

        {/* Twitter Meta Tags */}
        {/* <meta name="twitter:card" content={t('twitter.card')} /> */}
        <meta name="twitter:title" content={t('twitter.title')} />
        <meta name="twitter:description" content={t('twitter.description')} />
        <meta name="twitter:image" content={t('twitter.image')} />
        {/* <meta name="twitter:site" content={t('twitter.site')} /> */}
      </Head>
      <Header color hide={scrolled} />
      <Box pb={theme.spacing?.xl} pt="10vh">
        <Container size={isMediumScreen ? '90%' : '90%'}>
          <Grid align="center" justify="center">
            <GridCol display={!isMediumScreen ? 'block' : 'none'} span={6}>
              <Box>
                <AspectRatio>
                  <Image
                    component={NextImage}
                    src={design}
                    alt="design"
                    h={600}
                    // h={{ base: 700, sm: '40%' }}
                    style={{ objectFit: 'contain' }}
                  />
                </AspectRatio>
              </Box>
            </GridCol>
            <GridCol span={!isMediumScreen ? 6 : 12}>
              <Paper shadow="xl" p={theme.spacing?.md} radius="md">
                <Title c={theme.colors?.black?.[0]} fw={700} order={3} ta="center">
                  {t('title')}
                </Title>
                <form
                  onSubmit={contactForm.onSubmit(async () => {
                    await submitMessage();
                    await sendConfirmationMessage();
                  })}
                >
                  <TextInput
                    withAsterisk
                    label={t('form.name')}
                    placeholder="John Doe"
                    key={contactForm.key('name')}
                    {...contactForm.getInputProps('name')}
                  />
                  <TextInput
                    withAsterisk
                    label={t('form.email')}
                    placeholder="your@email.com"
                    key={contactForm.key('email')}
                    {...contactForm.getInputProps('email')}
                    mt={theme.spacing?.md}
                  />
                  <TextInput
                    withAsterisk
                    label={t('form.phone')}
                    placeholder="+1-XXX-XXX-XXXX"
                    key={contactForm.key('phone')}
                    {...contactForm.getInputProps('phone')}
                    mt={theme.spacing?.md}
                  />
                  <TextInput
                    // withAsterisk
                    label={t('form.subject')}
                    // placeholder="your@email.com"
                    key={contactForm.key('subject')}
                    {...contactForm.getInputProps('subject')}
                    mt={theme.spacing?.md}
                  />
                  <Textarea
                    withAsterisk
                    autosize
                    minRows={4}
                    label={t('form.message')}
                    placeholder="Your message"
                    key={contactForm.key('message')}
                    {...contactForm.getInputProps('message')}
                    mt={theme.spacing?.md}
                  />
                  <Group mt={theme.spacing?.md} justify="end">
                    <Button
                      loading={isSending}
                      type="submit"
                      size="md"
                      variant="filled"
                      c={theme.colors?.blue?.[0]}
                      // gradient={{ from: 'pink', to: 'yellow' }}
                    >
                      <Text size="sm" fw={700} c="white.0">
                        {t('form.button')}
                      </Text>
                    </Button>
                  </Group>
                </form>
              </Paper>
            </GridCol>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
export async function getStaticProps({ locale = 'en' }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact'])),
      // Will be passed to the page component as props
    },
  };
}
