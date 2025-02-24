import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AspectRatio, Box, Button, Card, Center, Container, Grid, GridCol, Group, Image, Paper, Stack, Text, Title, Transition } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
// import Header from '@/components/Header/Header';
import { useTranslation } from 'next-i18next';
import NextImage from 'next/image';
import Link from 'next/link';
import CallToAction from '@/components/CTA/CallToAction';
import { useMediaQuery, useIntersection } from '@mantine/hooks';
import Head from 'next/head';
import { theme } from '@/theme';
import play from "@/public/images/play-button.png";
import cleaningImage from "@/public/images/cleaning.png"
import solution from "@/public/images/solution.png"
import quality from "@/public/images/quality.png"
import stress from "@/public/images/quality.png"
import user1 from "@/public/images/user1.png"
import user2 from "@/public/images/user2.png"
import user3 from "@/public/images/user3.png"
import blob from "@/public/images/blob.png"
import blob2 from "@/public/images/blob2.png"

export default function HomePage() {
  const [innerheight, setInnerHeight] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [heroTransition, setHeroTransition] = useState<boolean>(false);
  const [serviceTransition, setServiceTransition] = useState<boolean>(false);
  const [aboutTransition, setAboutTransition] = useState<boolean>(false);
  const [testimonialTransition, setTestimonialTransition] = useState<boolean>(false);
  const [CTATransition, setCTATransition] = useState<boolean>(false);
  const { t } = useTranslation('home');
  // const isSmallScreen = useMediaQuery("(min-width: 576px)");
  const isSmallScreen = useMediaQuery("(min-width: 767px)");
  const isMediumScreen = useMediaQuery("(min-width: 992px)");
  // const [scrolled, setScrolled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const {ref: heroRef, entry: heroViewport} = useIntersection({
    root: null,
    threshold: 1,
  });
  const {ref: serviceRef, entry: serviceViewport} = useIntersection({
    root: null,
    threshold: 1,
  });
  const {ref: aboutRef, entry: aboutViewport} = useIntersection({
    root: null,
    threshold: 1,
  });
  const {ref: testimonialRef, entry: testimonialViewport} = useIntersection({
    root: null,
    threshold: 0.5,
  });
  const {ref: CTARef, entry: CTAViewport} = useIntersection({
    root: null,
    threshold: 1,
  });

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      {threshold: 0.5}
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [videoRef.current]);
  useEffect(() => {
    if(heroViewport?.isIntersecting) {
      setHeroTransition(true);
      // setServiceTransition(false);
    }
    if(serviceViewport?.isIntersecting) {
      setServiceTransition(true);
      // setAboutTransition(false);
    }
    if(aboutViewport?.isIntersecting) {
      setAboutTransition(true);
      // setTestimonialTransition(false);
    }
    if(testimonialViewport?.isIntersecting) {
      setTestimonialTransition(true);
      // setCTATransition(false);
    }
    if(CTAViewport?.isIntersecting) {
      setCTATransition(true);
    }
    // return setHeroTransition(false);
  }, [heroViewport, serviceViewport, aboutViewport, testimonialViewport, CTAViewport])
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((err) => console.error("Autoplay failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };
  const services = [
    {
      title: t('service.moving.title'),
      description: t('service.moving.description'),
      image: cleaningImage, // Replace with actual image path
      link: "/services/moving",
      buttonText: t('service.moving.buttonText'),
    },
    {
      title: t('service.remodeling.title'),
      description: t('service.remodeling.description'),
      image: cleaningImage, // Replace with actual image path
      link: "/services/remodeling",
      buttonText: t('service.remodeling.buttonText'),
    },
    {
      title: t('service.cleaning.title'),
      description: t('service.cleaning.description'),
      image: cleaningImage, // Replace with actual image path
      link: "/services/cleaning",
      buttonText: t('service.cleaning.buttonText'),
    },
  ];
  const testimonials = [
    {
      desc: t('testimonials.reviews.user1.description'),
      role: t('testimonials.reviews.user1.role'),
      title: "James Mitchell",
      image: user1,
    },
    {
      desc: t('testimonials.reviews.user3.description'),
      role: t('testimonials.reviews.user3.role'),
      title: "Emily Carter",
      image: user2,
    },
    {
      desc: t('testimonials.reviews.user2.description'),
      role: t('testimonials.reviews.user2.role'),
      title: "David Richardson",
      image: user3,
    },
  ]
  const abouts = [
    {
      title: t('about.solution.title'),
      description: t('about.solution.description'),
      image: solution,
    },
    {
      title: t('about.quality.title'),
      description: t('about.quality.description'),
      image: quality,
    },
    {
      title: t('about.stress.title'),
      description: t('about.stress.description'),
      image: stress,
    }
  ];
  return (
    <>
      <Head>
        {/* Standard Meta Tags */}
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta name="keywords" content={t("meta.keywords")} />
        <meta name="robots" content={t("meta.robots")} />
        <link rel="canonical" href={t("meta.canonical")} />

        {/* Open Graph Meta Tags (For Facebook, LinkedIn) */}
        <meta property="og:title" content={t("openGraph.title")} />
        <meta property="og:description" content={t("openGraph.description")} />
        <meta property="og:url" content={t("openGraph.url")} />
        <meta property="og:image" content={t("openGraph.image")} />
        <meta property="og:type" content={t("openGraph.type")} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={t("twitter.card")} />
        <meta name="twitter:title" content={t("twitter.title")} />
        <meta name="twitter:description" content={t("twitter.description")} />
        <meta name="twitter:image" content={t("twitter.image")} />
        <meta name="twitter:site" content={t("twitter.site")} />
      </Head>
      <Box pos="relative" style={{overflow: "hidden"}}>
        <Image
          component={NextImage}
          src={blob}
          alt="blob"
          // layout="co"
          // objectFit="cover"
          // objectPosition="center"
          w="100%"
          h={{base: 700, sm: "40%"}}
          pos="absolute"
          bottom={1150}
          left={{base: -200, sm: -400}}
          style={{zIndex: 0, objectFit: "contain"}}
        />
        <Image
          component={NextImage}
          src={blob2}
          alt="blob2"
          // layout="co"
          // objectFit="cover"
          // objectPosition="center"
          w="100%"
          h={{base: 700, sm: "40%"}}
          pos="absolute"
          bottom={-100}
          left={{base: 200, sm: 400}}
          style={{zIndex: -1, objectFit: "contain"}}
        />
        {/* <Header/> */}
        <Box ref={heroRef} onClick={togglePlay} style={{display:"flex", alignItems: "center", cursor: "pointer"}} h={innerheight} w="100%" pos="relative">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onClick={togglePlay}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <source src="/videos/homePage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Play Button (Only shows when paused) */}
          {!isPlaying && (
            <Image
              component={NextImage}
              style={{
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
                zIndex: 6,
              }}
              src={play}
              alt="Play"
              onClick={togglePlay}
              pos="absolute"
              top="50%"
              left="50%"
              w={50}
              h={50}
            />
          )}
          <Center>
            <Box pos="relative" style={{ zIndex: 7 }} w="80%">
              <Box w="70%">
                <Transition
                  mounted={heroTransition}
                  keepMounted
                  transition="slide-down"
                  duration={1500}
                  timingFunction="ease"
                >
                  {(styles) => (
                    <Title style={styles} c={theme.colors?.white?.[7]} fw={700} order={1} ta="start">
                      {t('title')}{" "}
                      <Text inherit c={theme.colors?.yellow?.[1]} component="span">
                        {t('environment')}
                      </Text>
                    </Title>
                  )}
                </Transition>
                <Transition
                  mounted={heroTransition}
                  keepMounted
                  transition="slide-up"
                  duration={2500}
                  timingFunction="ease"
                >
                  {(styles) => (
                    <Text style={styles} c={theme.colors?.white?.[7]} my={theme.spacing?.md} size="xl" fw={600} ta="start">
                      {t('description')}
                    </Text>
                  )}
                </Transition>
                <Transition
                  mounted={heroTransition}
                  keepMounted
                  transition="slide-right"
                  duration={3500}
                  timingFunction="ease"
                >
                  {(styles) => (
                    <Button style={styles} size="md" variant="gradient" gradient={{ from: 'pink', to: 'yellow' }}>
                      <Text size="sm" fw={700} c="white.0">
                        {t('header.button')}
                      </Text>
                    </Button>
                  )}
                </Transition>
              </Box>
            </Box>
          </Center>
        </Box>
        <Container style={{ zIndex: 3 }} py={theme.spacing?.lg} size="80%">
          <Title c={theme.colors?.yellow?.[1]} order={2} ta="center" mt="xl">
            {t('service.title')}
          </Title>
          <Text my={theme.spacing?.sm} c="dimmed" ta="center" size="lg" maw={580} mx="auto">
            {t("service.subTitle")}
          </Text>
          <Box mih={{base: 1000, sm: 700, md: 300}} pos="relative" mt={theme.spacing?.sm}>
            <Grid align="center" justify="center" gutter={theme.spacing?.md} >
              {services.map((service, index) => (
                <GridCol ref={serviceRef} span={{base: 12, sm: 6, md: 4}} key={index}>
                  <Transition
                    mounted={serviceTransition}
                    keepMounted
                    transition={index % 2 == 0 ? !isSmallScreen ? "slide-right" : "slide-up" : !isSmallScreen ? "slide-left" : "slide-down" }
                    duration={2500}
                    timingFunction="ease"
                  >
                    {(styles) => (
                      <Card style={styles} shadow="xl" padding="lg" radius="md">
                        <Box w="100%" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                          <AspectRatio>
                            <Image
                              component={NextImage}
                              w="100%"
                              h="100%"
                              src={service.image}
                              alt="cleaning image"
                            />
                          </AspectRatio>
                        </Box>
                        <Transition
                          mounted={serviceTransition}
                          keepMounted
                          transition="rotate-left"
                          duration={6000}
                          timingFunction="ease"
                        >
                          {(boxStyles) => (
                            <Box style={boxStyles}>
                              <Title c={theme.colors?.yellow?.[1]} order={3} ta="center">
                                {service.title}
                              </Title>
                              <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto">
                                {service.description}
                              </Text>
                            </Box>
                          )}
                        </Transition>
                        <Transition
                          mounted={serviceTransition}
                          keepMounted
                          transition="rotate-right"
                          duration={6000}
                          timingFunction="ease"
                        >
                          {(groupStyles) => (
                            <Group style={groupStyles} mt={theme.spacing?.sm} justify="center">
                              <Link href={service.link} style={{textDecoration: "none"}}>
                                <Button size="md" variant="gradient" gradient={{ from: 'pink', to: 'yellow' }}>
                                  <Text size="sm" fw={700} c="white.0">
                                    {service.buttonText}
                                  </Text>
                                </Button>
                              </Link>
                            </Group>
                          )}
                        </Transition>
                      </Card>
                    )}
                  </Transition>
                </GridCol>
              ))}
            </Grid>
          </Box>
        </Container>
        <Container style={{ zIndex: 3 }} py={theme.spacing?.lg} size="80%">
          <Title c={theme.colors?.yellow?.[1]} order={2} ta="center" mt="xl">
            {t('about.title')}
          </Title>
          <Text my={theme.spacing?.sm} c="dimmed" ta="center" size="lg" mx="auto">
            {t("about.subTitle")}
          </Text>
          <Box mih={{base: 1000, sm: 700, md: 300}} pos="relative" mt={theme.spacing?.sm}>
            {abouts.map((about, index) => (
              <Grid ref={aboutRef} my={theme.spacing?.sm} py={theme.spacing?.sm} key={index} align="center" justify="center" gutter={theme.spacing?.lg} >
                <GridCol span={{base: 12, sm: index % 2 == 0 ? 8 : 4}}>
                  {!isSmallScreen ? (
                    <Stack justify="center" align="center">
                      <Transition
                        mounted={aboutTransition}
                        keepMounted
                        transition="slide-right"
                        duration={3000}
                        timingFunction="ease"
                      >
                        {(styles) => (
                          <Box style={[{display: "flex", flexDirection: "row", justifyContent: "center", ...styles}]} w="100%" h="100%">
                            <Image
                              component={NextImage}
                              w={220}
                              h={220}
                              src={about.image}
                              alt="cleaning image"
                            />
                          </Box>
                        )}
                      </Transition>
                      <Transition
                        mounted={aboutTransition}
                        keepMounted
                        transition="slide-left"
                        duration={3000}
                        timingFunction="ease"
                      >
                        {(styles) => (
                          <Box style={styles}>
                            <Title c={theme.colors?.yellow?.[1]} order={3} ta="center">
                              {about.title}
                            </Title>
                            <Text c="dimmed" ta="center" size="lg">
                              {about.description}
                            </Text>
                          </Box>
                        )}
                      </Transition>
                    </Stack>
                  ) : index % 2 == 0 ? (
                    <Transition
                      mounted={aboutTransition}
                      keepMounted
                      transition="slide-right"
                      duration={3000}
                      timingFunction="ease"
                    >
                      {(styles) => (
                        <Box style={styles}>
                          <Title c={theme.colors?.yellow?.[1]} order={3} ta="end">
                            {about.title}
                          </Title>
                          <Text c="dimmed" ta="end" size="lg">
                            {about.description}
                          </Text>
                        </Box>
                      )}
                    </Transition>
                  ) : (
                    <Transition
                      mounted={aboutTransition}
                      keepMounted
                      transition="slide-right"
                      duration={3000}
                      timingFunction="ease"
                    >
                      {(styles) => (
                        <Box style={{display: "flex", flexDirection: "row", justifyContent: "end", ...styles}} w="100%" h="100%">
                        <Image
                          component={NextImage}
                          w={220}
                          h={220}
                          src={about.image}
                          alt="cleaning image"
                        />
                      </Box>
                      )}
                    </Transition>
                  )}
                </GridCol>
                {isSmallScreen && (
                  <GridCol span={{base: 12, sm: index % 2 !== 0 ? 8 : 4}}>
                    {index % 2 !== 0 ? (
                      <Transition
                      mounted={aboutTransition}
                      keepMounted
                      transition="slide-left"
                      duration={3000}
                      timingFunction="ease"
                    >
                      {(styles) => (
                      <Box style={styles}>
                        <Title c={theme.colors?.yellow?.[1]} order={3} ta="start">
                          {about.title}
                        </Title>
                        <Text c="dimmed" ta="start" size="lg">
                          {about.description}
                        </Text>
                      </Box>
                      )}
                    </Transition>
                    ) : (
                      <Transition
                      mounted={aboutTransition}
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
                            w={220}
                            h={220}
                            src={about.image}
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
          </Box>
        </Container>
        <Container style={{ zIndex: 3 }} py={theme.spacing?.lg} size="80%">
          <Title c={theme.colors?.yellow?.[1]} order={2} ta="center" mt="xl">
            {t('testimonials.title')}
          </Title>
          <Text my={theme.spacing?.sm} c="dimmed" ta="center" size="lg" mx="auto">
            {t("testimonials.subTitle")}
          </Text>
          <Grid mih={{base: 1000, sm: 700, md: 300}} my={theme.spacing?.xl} align="center" justify="center" gutter={theme.spacing?.md} >
            {testimonials.map((testimonial, index) => (
              <GridCol ref={testimonialRef} mt={theme.spacing?.xl} pos="relative" key={index} span={{base: 12, sm: 6, md: 4}}>
                <Transition
                  mounted={testimonialTransition}
                  keepMounted
                  transition="fade-up"
                  duration={3000}
                  timingFunction="ease"
                >
                  {(styles) => (
                    <Box style={styles}>
                      <Box mt={theme.spacing?.md} style={{ display: 'flex', justifyContent: 'center'}}>
                        <AspectRatio
                          style={{
                            border: 'black',
                            backgroundColor: 'Highlight',
                            borderRadius: 50,
                          }}
                          mt={-50}
                          pos="absolute"
                          w={100}
                          h={100}
                        >
                          <NextImage
                            style={{ width: '100%', height: '100%', borderRadius: 50 }}
                            src={testimonial.image}
                            alt=""
                          />
                        </AspectRatio>
                      </Box>
                      <Center>
                        <Paper
                          // className={classes.paper}
                          // withBorder
                          pt={theme.spacing?.xl}
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          shadow="xl"
                          p={theme.spacing?.md}
                          // h={200}
                          // w={261}
                        >
                          <Box w="100%">
                            <Box
                              mih={142}
                              style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              <Text fs="italic" fz="sm" ta="center">
                                {testimonial.desc}
                              </Text>
                            </Box>
                            <Text fz="md" fw="bold" pt={theme.spacing?.md} ta="center">
                              {testimonial.title}
                            </Text>
                            <Text fz="xs" fw="bold" pt={0} ta="center">
                              {testimonial.role}
                            </Text>
                          </Box>
                        </Paper>
                      </Center>
                    </Box>
                  )}
                </Transition>
              </GridCol>
            ))}
          </Grid>
        </Container>
         <Box style={{ zIndex: 3 }} mih={150} ref={CTARef}>
          <Transition
            mounted={CTATransition}
            keepMounted
            transition="fade-up"
            duration={3000}
            timingFunction="ease"
          >
            {(styles) => (
              <Box style={styles}>
                <CallToAction/>
              </Box>
            )}
          </Transition>
         </Box>
      </Box>
    </>
  );
}


export async function getStaticProps({ locale = "en" }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'home',
      ])),
      // Will be passed to the page component as props
    },
  }
}
