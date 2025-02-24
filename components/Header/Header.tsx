import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { AspectRatio, Box, Burger, Button, Container, Divider, Drawer, Group, HoverCard, rem, Stack, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import NextImage from "next/image";
import { theme } from "@/theme";
import logo from "../../public/images/angel logo.png";
import classes from './Header.module.css';

export default function Header ({ color, hide }: {color?: boolean; hide?: boolean} ) {
    const { t, i18n } = useTranslation("common");
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const smallScreen = useMediaQuery('(max-width: 793px)');
    const extraSmallScreen = useMediaQuery('(max-width: 575px)');
    const [opened, { open, close }] = useDisclosure();
    const changeLanguage = (lang: "en" | "fr") => {
        i18n.changeLanguage(lang == "en" ? "fr" : "en");
        router.push(router.pathname, router.asPath, {locale: lang});
    };
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false)
            };
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])
    const sections = () => {
        const data = [
          {
            text: t('header.sections.home'),
            link: '/',
          },
          {
            text: t('header.sections.section.title'),
            link: '',
          },
          {
            text: t('header.sections.about'),
            link: '/about',
          },
          {
            text: t('header.sections.contact'),
            link: '/contact',
          },
        ];
        const subLinks = [
          {
            text: t('header.sections.section.subLinks.moving'),
            link: { pathname: '/posts', query: { section: 'articles' } },
          },
          {
            text: t('header.sections.section.subLinks.remodeling'),
            link: { pathname: '/posts', query: { section: 'news' } },
          },
          {
            text: t('header.sections.section.subLinks.cleaning'),
            link: { pathname: '/posts', query: { section: 'breves' } },
          },
        ];
        const links = subLinks.map((sublink, linkIndex) => (
          <Box key={linkIndex} w="100%">
            <Link style={{ textDecoration: 'none' }} href={sublink.link} key={linkIndex}>
              <Text className={classes.link} size="md" fw={500}>
                {sublink.text}
              </Text>
            </Link>
            {linkIndex !== subLinks.length - 1 && <Divider my="xs" variant="dotted" />}
          </Box>
        ));
        return (
          <>
            {!smallScreen ? (
              <Group align="center" justify="space-between" gap={theme.spacing?.xl}>
                {data.map((item, index) => (
                  <React.Fragment key={index}>
                    {index === 1 ? (
                      <HoverCard key={index} shadow="sm">
                        <HoverCard.Target>
                          <Text
                            style={{ cursor: 'pointer' }}
                            size="md"
                            c={scrolled ? theme.colors?.black?.[3] : theme.colors?.white?.[0]}
                            fw={700}
                          >
                            {item.text}
                          </Text>
                        </HoverCard.Target>
                        <HoverCard.Dropdown>{links}</HoverCard.Dropdown>
                      </HoverCard>
                    ) : (
                      <Link style={{ textDecoration: 'none' }} href={item.link} key={index}>
                        <Text
                          c={router.pathname === item.link ? theme.colors?.blue?.[0] : scrolled ? theme.colors?.black?.[3] : theme.colors?.white?.[0]}
                          className={classes.link}
                          size="md"
                          fw={700}
                        >
                          {item.text}
                        </Text>
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </Group>
            ) : (
              <Stack align="center" gap={theme.spacing?.xs}>
                {data.map((item, index) => (
                  <React.Fragment key={index}>
                    {index === 1 ? (
                      <HoverCard key={index} shadow="sm">
                        <HoverCard.Target>
                          <Text
                            style={{ cursor: 'pointer' }}
                            size="md"
                            c={theme.colors?.dark?.[0]}
                            fw={700}
                          >
                            {item.text}
                          </Text>
                        </HoverCard.Target>
                        <HoverCard.Dropdown>{links}</HoverCard.Dropdown>
                      </HoverCard>
                    ) : (
                      <Link style={{ textDecoration: 'none' }} href={item.link} key={index}>
                        <Text
                          c={router.pathname === item.link ? theme.colors?.blue?.[0] : undefined }
                          className={classes.link}
                          size="md"
                          fw={700}
                        >
                          {item.text}
                        </Text>
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </Stack>
            )}
          </>
        );
      };
    return (
        <Box display={hide ? 'none' : 'block'} style={{ zIndex: 10 }} w="100%" pos="fixed">
            <header
                style={
                scrolled
                    ? {
                        background: color ? 'transparent' : 'white',
                        boxShadow: '2px 2px 2px 0 rgba(0, 0, 0, 0.3)',
                        transition: 'all 0.3s ease',
                      }
                    : { background: 'transparent' }
                }
            >
                <Container
                    py={!extraSmallScreen ? rem(5) : rem(0)}
                    size={!extraSmallScreen ? '95%' : '100%'}
                >
                    {!smallScreen ? (
                        <Group align="center" justify="space-between">
                        <AspectRatio maw={150} ratio={16 / 9}>
                            <Link href="/">
                            <NextImage
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                alt="logo"
                                src={logo}
                            />
                            </Link>
                        </AspectRatio>
                        {sections()}
                        <Group>
                            <Group gap={5} align="center" justify="space-between">
                            <Text
                                size="sm"
                                style={{ cursor: 'pointer' }}
                                fw={600}
                                c={i18n.language === 'fr' ? theme.colors?.blue?.[0] : scrolled ? theme.colors?.black?.[3] : theme.colors?.white?.[0]}
                                onClick={() => i18n.language == "en" && changeLanguage('fr')}
                            >
                                FR
                            </Text>
                            <Text size="sm" c={scrolled ? theme.colors?.black?.[3] : theme.colors?.white?.[0] }>|</Text>
                            <Text
                                size="sm"
                                style={{ cursor: 'pointer' }}
                                fw={600}
                                c={i18n.language === 'en' ? theme.colors?.blue?.[0] : scrolled ? theme.colors?.black?.[3] : theme.colors?.white?.[0]}
                                onClick={() => i18n.language == "fr" && changeLanguage('en')}
                            >
                                EN
                            </Text>
                            </Group>
                            <Button component={Link} href="/contact-us" size="md" variant="gradient" gradient={{ from: 'pink', to: 'yellow' }}>
                              <Text size="sm" fw={700} c="white.0">
                                  {t('header.button')}
                              </Text>
                            </Button>
                          </Group>
                        </Group>
                    ) : (
                        <Group align="center" justify="space-between">
                        <AspectRatio maw={150} ratio={16 / 9}>
                            <Link href="/">
                            <NextImage
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                alt="logo"
                                src={logo}
                            />
                            </Link>
                        </AspectRatio>
                        <Box
                            p={5}
                            style={{
                            border: 'solid',
                            borderColor: '#808080',
                            borderWidth: 0.25,
                            justifyContent: 'center',
                            display: 'flex',
                            borderRadius: 5,
                            }}
                        >
                            <Burger color={theme.colors?.orange?.[0]} opened={opened} onClick={open} />
                        </Box>
                        </Group>
                    )}
                    <Drawer
                        style={{ zIndex: 1000 }}
                        position="right"
                        onClose={close}
                        size={rem(250)}
                        opened={opened}
                        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
                    >
                        <Stack gap={theme.spacing?.xs} align="center">
                        {sections()}
                        <Group gap={5} align="center" justify="space-between">
                            <Text
                            size="sm"
                            style={{ cursor: 'pointer' }}
                            fw={600}
                            c={i18n.language === 'fr' ? theme.colors?.blue?.[0] : 'dark'}
                            onClick={() => changeLanguage('fr')}
                            >
                            FR
                            </Text>
                            <Text size="sm">|</Text>
                            <Text
                            size="sm"
                            style={{ cursor: 'pointer' }}
                            fw={600}
                            c={i18n.language === 'en' ? theme.colors?.blue?.[0] : 'dark'}
                            onClick={() => changeLanguage('en')}
                            >
                            EN
                            </Text>
                        </Group>
                        <Button href="/contact-us" component={Link} size="md" variant="gradient" gradient={{ from: 'pink', to: 'yellow' }}>
                          <Text size="sm" fw={700} c="white.0">
                          {t('header.button')}
                          </Text>
                        </Button>
                        </Stack>
                    </Drawer>
                    </Container>
                
            </header>
        </Box>
    );
}