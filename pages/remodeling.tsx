import { useEffect, useState } from 'react';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import NextImage from 'next/image';
import Link from 'next/link';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  AspectRatio,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Stack,
  Text,
  Title,
  Transition,
} from '@mantine/core';
import { useIntersection, useMediaQuery } from '@mantine/hooks';
import CallToAction from '@/components/CTA/CallToAction';
import Header from '@/components/Header/Header';
import custom from '@/public/images/customize.png';
import flexible from '@/public/images/flexible3.png';
import flooring from '@/public/images/floor.png';
import satisfaction from '@/public/images/guarantee.png';
import time from '@/public/images/hourglass.png';
import insurance from '@/public/images/insurance.png';
import kitchen from '@/public/images/kitchen.png';
import wallpapering from '@/public/images/people.png';
import remodeler from '@/public/images/remodeler.png';
import renovation from '@/public/images/renovation.png';
import transparency from '@/public/images/transparency.png';
// import fence from "@/public/images/fence.png";
import quality from '@/public/images/verify.png';
import worker from '@/public/images/worker.png';
import { theme } from '@/theme';

export default function Remodeling() {
  const { t } = useTranslation('remodeling');
  const [scrolled, setScrolled] = useState(false);
  const isSmallScreen = useMediaQuery('(min-width: 767px)');
  const [innerHeight, setInnerHeight] = useState(0);
  const [heroTransition, setHeroTransition] = useState<boolean>(false);
  const [serviceTransition, setServiceTransition] = useState<boolean>(false);
  const [commitmentTransition, setCommitmentTransition] = useState<boolean>(false);
  const [advantageTransition, setAdvantageTransition] = useState<boolean>(false);
  const [CTATransition, setCTATransition] = useState<boolean>(false);
  const [FAQTransition, setFAQTransition] = useState<boolean>(false);
  const { ref: heroRef, entry: heroViewport } = useIntersection({
    root: null,
    threshold: 1,
  });
  const { ref: serviceRef, entry: serviceViewport } = useIntersection({
    root: null,
    threshold: 1,
  });
  const { ref: commitmentRef, entry: commitmentViewport } = useIntersection({
    root: null,
    threshold: 0.5,
  });
  const { ref: advantageRef, entry: advantageViewport } = useIntersection({
    root: null,
    threshold: 0.5,
  });
  const { ref: CTARef, entry: CTAViewport } = useIntersection({
    root: null,
    threshold: 1,
  });
  const { ref: FAQRef, entry: FAQViewport } = useIntersection({
    root: null,
    threshold: 1,
  });
  useEffect(() => {
    if (heroViewport?.isIntersecting) {
      setHeroTransition(true);
    }
    if (serviceViewport?.isIntersecting) {
      setServiceTransition(true);
    }
    if (commitmentViewport?.isIntersecting) {
      setCommitmentTransition(true);
    }
    if (advantageViewport?.isIntersecting) {
      setAdvantageTransition(true);
    }
    if (CTAViewport?.isIntersecting) {
      setCTATransition(true);
    }
    if (FAQViewport?.isIntersecting) {
      setFAQTransition(true);
    }
  }, [
    heroViewport,
    serviceViewport,
    commitmentViewport,
    advantageViewport,
    CTAViewport,
    FAQViewport,
  ]);

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
  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);
  const advantages = [
    {
      title: t('advantages.quality.title'),
      text: t('advantages.quality.text'),
      icon: quality,
    },
    {
      title: t('advantages.flexible.title'),
      text: t('advantages.flexible.text'),
      icon: flexible,
    },
    {
      title: t('advantages.expertise.title'),
      text: t('advantages.expertise.text'),
      icon: worker,
    },
    {
      title: t('advantages.custom.title'),
      text: t('advantages.custom.text'),
      icon: custom,
    },
  ];

  const commitments = [
    {
      title: t('commitments.transparency.title'),
      text: t('commitments.transparency.text'),
      icon: transparency,
    },
    {
      title: t('commitments.insurance.title'),
      text: t('commitments.insurance.text'),
      icon: insurance,
    },
    {
      title: t('commitments.satisfaction.title'),
      text: t('commitments.satisfaction.text'),
      icon: satisfaction,
    },
    {
      title: t('commitments.punctuality.title'),
      text: t('commitments.punctuality.text'),
      icon: time,
    },
  ];

  const services = [
    {
      title: t('services.home.title'),
      text: t('services.home.text'),
      icon: renovation,
    },
    {
      title: t('services.kitchen.title'),
      text: t('services.kitchen.text'),
      icon: kitchen,
    },
    {
      title: t('services.flooring.title'),
      text: t('services.flooring.text'),
      icon: flooring,
    },
    {
      title: t('services.painting.title'),
      text: t('services.painting.text'),
      icon: wallpapering,
    },
    // {
    //     title: t("services.roofs.title"),
    //     text: t("services.roofs.text"),
    //     icon: fence
    // },
  ];

  const FAQ = [
    {
      question: t('FAQ.question1'),
      answer: t('FAQ.answer1'),
    },
    {
      question: t('FAQ.question2'),
      answer: t('FAQ.answer2'),
    },
    {
      question: t('FAQ.question3'),
      answer: t('FAQ.answer3'),
    },
    {
      question: t('FAQ.question4'),
      answer: t('FAQ.answer4'),
    },
    {
      question: t('FAQ.question5'),
      answer: t('FAQ.answer5'),
    },
  ];
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
        <meta name="twitter:card" content={t('twitter.card')} />
        <meta name="twitter:title" content={t('twitter.title')} />
        <meta name="twitter:description" content={t('twitter.description')} />
        <meta name="twitter:image" content={t('twitter.image')} />
        <meta name="twitter:site" content={t('twitter.site')} />
      </Head>
      <Header color hide={scrolled} />
      <Box>
        <Box
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          pt="10vh"
          h={innerHeight}
        >
          <Container size="90%">
            <Grid ref={heroRef} justify="center" align="center" gutter={theme.spacing?.md}>
              <GridCol span={isSmallScreen ? 6 : 12}>
                <Box>
                  <Transition
                    mounted={heroTransition}
                    keepMounted
                    transition="slide-right"
                    duration={2000}
                    timingFunction="ease"
                  >
                    {(styles) => (
                      <>
                        <Title
                          style={styles}
                          c={theme.colors?.yellow?.[1]}
                          fw={700}
                          order={1}
                          ta="center"
                        >
                          {t('title')}
                          {/* <Text inherit c={theme.colors?.blue?.[0]} component="span">
                                                    {t('environment')}
                                                    </Text> */}
                        </Title>
                        <Text
                          style={styles}
                          c={theme.colors?.black?.[0]}
                          my={theme.spacing?.md}
                          size="xl"
                          fw={600}
                          ta="center"
                        >
                          {t('subtitle')}
                        </Text>
                        <Group justify="center">
                          <Button
                            component={Link}
                            href="/contact-us"
                            style={styles}
                            size="md"
                            variant="gradient"
                            gradient={{ from: 'pink', to: 'yellow' }}
                          >
                            <Text size="sm" fw={700} c="white.0">
                              {t('header.button')}
                            </Text>
                          </Button>
                        </Group>
                      </>
                    )}
                  </Transition>
                  {/* <Transition
                                        mounted
                                        keepMounted
                                        transition="slide-up"
                                        duration={2500}
                                        timingFunction="ease"
                                    >
                                        {(styles) => (
                                        
                                        )}
                                    </Transition> */}
                </Box>
              </GridCol>
              <GridCol display={isSmallScreen ? 'block' : 'none'} span={6}>
                <Transition
                  mounted={heroTransition}
                  keepMounted
                  transition="slide-left"
                  duration={2000}
                  timingFunction="ease"
                >
                  {(styles) => (
                    <Box
                      w="100%"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        ...styles,
                      }}
                    >
                      <AspectRatio>
                        <Image
                          component={NextImage}
                          w="100%"
                          h="100%"
                          src={remodeler}
                          alt="cleaning image"
                        />
                      </AspectRatio>
                    </Box>
                  )}
                </Transition>
              </GridCol>
            </Grid>
          </Container>
        </Box>
        <Box py={theme.spacing?.xl}>
          <Container size="90%">
            <Title c={theme.colors?.yellow?.[1]} order={2} ta="center">
              {t('advantages.title')}
            </Title>
            <Text my={theme.spacing?.sm} c="dimmed" ta="center" size="lg" mx="auto">
              {t('advantages.subtitle')}
            </Text>
            <Grid
              mih={{ base: 1000, sm: 700, md: 300 }}
              ref={advantageRef}
              py={theme.spacing?.md}
              justify="center"
              align="center"
              gutter={theme.spacing?.lg}
            >
              {advantages.map((advantage, index) => (
                <GridCol span={{ base: 12, xs: 6, md: 3 }} key={index}>
                  <Transition
                    key={index}
                    mounted={advantageTransition}
                    keepMounted
                    transition={
                      index % 2 === 0
                        ? !isSmallScreen
                          ? 'slide-right'
                          : 'slide-up'
                        : !isSmallScreen
                          ? 'slide-left'
                          : 'slide-down'
                    }
                    duration={2500}
                    timingFunction="ease"
                  >
                    {(styles) => (
                      <Card style={styles} shadow="xl" padding="lg" radius="md">
                        <Box
                          mb={theme.spacing?.sm}
                          w="100%"
                          h={100}
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <AspectRatio>
                            <Image
                              component={NextImage}
                              w={75}
                              h={75}
                              src={advantage.icon}
                              alt="cleaning image"
                            />
                          </AspectRatio>
                        </Box>
                        <Transition
                          mounted={advantageTransition}
                          keepMounted
                          transition="rotate-left"
                          duration={6000}
                          timingFunction="ease"
                        >
                          {(boxStyles) => (
                            <Box style={boxStyles}>
                              <Title c={theme.colors?.indigo?.[0]} order={3} ta="center">
                                {advantage.title}
                              </Title>
                              <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto">
                                {advantage.text}
                              </Text>
                            </Box>
                          )}
                        </Transition>
                      </Card>
                    )}
                  </Transition>
                </GridCol>
              ))}
            </Grid>
          </Container>
        </Box>
        <Box mih={{ base: 1000, sm: 700, md: 300 }} py={theme.spacing?.xl}>
          <Container size="80%">
            <Title c={theme.colors?.yellow?.[1]} order={2} ta="center">
              {t('services.title')}
            </Title>
            <Text my={theme.spacing?.sm} c="dimmed" ta="center" size="lg" mx="auto">
              {t('services.subtitle')}
            </Text>
            {services.map((service, index) => (
              <Grid
                ref={serviceRef}
                py={theme.spacing?.sm}
                key={index}
                align="center"
                justify="center"
                gutter={theme.spacing?.lg}
              >
                <GridCol span={{ base: 12, sm: index % 2 === 0 ? 8 : 4 }}>
                  {!isSmallScreen ? (
                    <Stack justify="center" align="center">
                      <Transition
                        mounted={serviceTransition}
                        keepMounted
                        transition="slide-right"
                        duration={3000}
                        timingFunction="ease"
                      >
                        {(styles) => (
                          <Box
                            style={[
                              {
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                ...styles,
                              },
                            ]}
                            w="100%"
                            h="100%"
                          >
                            <Image
                              component={NextImage}
                              w={150}
                              h={150}
                              src={service.icon}
                              alt="cleaning image"
                            />
                          </Box>
                        )}
                      </Transition>
                      <Transition
                        mounted={serviceTransition}
                        keepMounted
                        transition="slide-left"
                        duration={3000}
                        timingFunction="ease"
                      >
                        {(styles) => (
                          <Box style={styles}>
                            <Title c={theme.colors?.blue?.[0]} order={3} ta="center">
                              {service.title}
                            </Title>
                            <Text c="dimmed" ta="center" size="lg">
                              {service.text}
                            </Text>
                          </Box>
                        )}
                      </Transition>
                    </Stack>
                  ) : index % 2 === 0 ? (
                    <Transition
                      mounted={serviceTransition}
                      keepMounted
                      transition="slide-right"
                      duration={3000}
                      timingFunction="ease"
                    >
                      {(styles) => (
                        <Box style={styles}>
                          <Title c={theme.colors?.blue?.[0]} order={3} ta="end">
                            {service.title}
                          </Title>
                          <Text c="dimmed" ta="end" size="lg">
                            {service.text}
                          </Text>
                        </Box>
                      )}
                    </Transition>
                  ) : (
                    <Transition
                      mounted={serviceTransition}
                      keepMounted
                      transition="slide-right"
                      duration={3000}
                      timingFunction="ease"
                    >
                      {(styles) => (
                        <Box
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'end',
                            ...styles,
                          }}
                          w="100%"
                          h="100%"
                        >
                          <Image
                            component={NextImage}
                            w={150}
                            h={150}
                            src={service.icon}
                            alt="cleaning image"
                          />
                        </Box>
                      )}
                    </Transition>
                  )}
                </GridCol>
                {isSmallScreen && (
                  <GridCol span={{ base: 12, sm: index % 2 !== 0 ? 8 : 4 }}>
                    {index % 2 !== 0 ? (
                      <Transition
                        mounted={serviceTransition}
                        keepMounted
                        transition="slide-left"
                        duration={3000}
                        timingFunction="ease"
                      >
                        {(styles) => (
                          <Box style={styles}>
                            <Title c={theme.colors?.blue?.[0]} order={3} ta="start">
                              {service.title}
                            </Title>
                            <Text c="dimmed" ta="start" size="lg">
                              {service.text}
                            </Text>
                          </Box>
                        )}
                      </Transition>
                    ) : (
                      <Transition
                        mounted={serviceTransition}
                        keepMounted
                        transition="slide-left"
                        duration={3000}
                        timingFunction="ease"
                      >
                        {(styles) => (
                          <Box style={styles} w="100%" h="100%">
                            <AspectRatio>
                              <Image
                                component={NextImage}
                                w={150}
                                h={150}
                                src={service.icon}
                                alt="cleaning image"
                              />
                            </AspectRatio>
                          </Box>
                        )}
                      </Transition>
                    )}
                  </GridCol>
                )}
              </Grid>
            ))}
          </Container>
        </Box>
        {/* <Box ref={CTARef} bg="#f0e6eb" py={theme.spacing?.xl}>
                    <CallToAction/>
                </Box> */}
        <Box py={theme.spacing?.xl} bg="#f0e6eb" mih={200} ref={CTARef}>
          <Transition
            mounted={CTATransition}
            keepMounted
            transition="fade-up"
            duration={2000}
            timingFunction="ease"
          >
            {(styles) => (
              <Box style={styles}>
                <CallToAction />
              </Box>
            )}
          </Transition>
        </Box>
        <Box py={theme.spacing?.xl}>
          <Container size="90%">
            <Title c={theme.colors?.yellow?.[1]} order={2} ta="center">
              {t('commitments.title')}
            </Title>
            <Text my={theme.spacing?.sm} c="dimmed" ta="center" size="lg" mx="auto">
              {t('commitments.subtitle')}
            </Text>
            <Grid
              mih={{ base: 1000, sm: 700, md: 300 }}
              ref={commitmentRef}
              py={theme.spacing?.md}
              justify="center"
              align="center"
              gutter={theme.spacing?.lg}
            >
              {commitments.map((commitment, index) => (
                <GridCol span={{ base: 12, xs: 6, md: 3 }} key={index}>
                  <Transition
                    key={index}
                    mounted={commitmentTransition}
                    keepMounted
                    transition={
                      index % 2 === 0
                        ? !isSmallScreen
                          ? 'slide-right'
                          : 'slide-up'
                        : !isSmallScreen
                          ? 'slide-left'
                          : 'slide-down'
                    }
                    duration={2500}
                    timingFunction="ease"
                  >
                    {(styles) => (
                      <Card style={styles} shadow="xl" padding="lg" radius="md">
                        <Box
                          mb={theme.spacing?.sm}
                          w="100%"
                          h={100}
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <AspectRatio>
                            <Image
                              component={NextImage}
                              w={50}
                              h={50}
                              src={commitment.icon}
                              alt="cleaning image"
                            />
                          </AspectRatio>
                        </Box>
                        <Transition
                          mounted={commitmentTransition}
                          keepMounted
                          transition="rotate-left"
                          duration={6000}
                          timingFunction="ease"
                        >
                          {(boxStyles) => (
                            <Box style={boxStyles}>
                              <Title c={theme.colors?.blue?.[0]} order={3} ta="center">
                                {commitment.title}
                              </Title>
                              <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto">
                                {commitment.text}
                              </Text>
                            </Box>
                          )}
                        </Transition>
                      </Card>
                    )}
                  </Transition>
                </GridCol>
              ))}
            </Grid>
          </Container>
        </Box>
        <Box py={theme.spacing?.xl}>
          <Container size={!isSmallScreen ? '95%' : '70%'}>
            <Title c={theme.colors?.yellow?.[1]} order={2} ta="center">
              {t('FAQ.title')}
            </Title>
            <Text my={theme.spacing?.sm} c="dimmed" ta="center" size="lg" mx="auto">
              {t('FAQ.subtitle')}
            </Text>
            <Box ref={FAQRef}>
              <Transition
                mounted={FAQTransition}
                keepMounted
                transition="fade-up"
                duration={2000}
                timingFunction="ease"
              >
                {(styles) => (
                  <Box style={styles}>
                    {FAQ.map((faq, index) => {
                      const [show, setShow] = useState(false);
                      return (
                        <>
                          <Box py={theme.spacing?.md} key={index}>
                            {/* <Divider color="dimmed"/> */}
                            <Group
                              style={{ cursor: 'pointer' }}
                              align="center"
                              justify="space-between"
                              onClick={() => setShow(!show)}
                            >
                              <Text maw="80%">{faq.question}</Text>
                              {show ? <IconMinus /> : <IconPlus />}
                            </Group>
                            {show && (
                              <Box
                                mih={50}
                                style={{ borderRadius: 10 }}
                                bg={theme.colors?.white?.[5]}
                                my={theme.spacing?.sm}
                                p={theme.spacing?.sm}
                              >
                                <Text c={theme.colors?.black?.[3]}>{faq.answer}</Text>
                              </Box>
                            )}
                          </Box>
                          <Divider color="dimmed" />
                        </>
                      );
                    })}
                  </Box>
                )}
              </Transition>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
export async function getStaticProps({ locale = 'en' }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'remodeling'])),
    },
  };
}
