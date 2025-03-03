import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  primaryColor: 'blue',
  colors: {
    yellow: [
      '#f7941d',
      '#de851a',
      '#c67617',
      '#ad6814',
      '#945911',
      '#f89f34',
      '#f9a94a',
      '#f9b461',
      '#fabf77',
      '#fbca8e',
    ],
    blue: [
      '#2670c5',
      '#2a7edd',
      '#2f8cf6',
      '#2162ac',
      '#1c5494',
      '#4498f7',
      '#59a3f8',
      '#6daff9',
      '#82bafa',
      '#97c6fb',
    ],
    black: [
      '#000000',
      '#0a0a0a',
      '#141414',
      '#1e1e1e',
      '#282828',
      '#1a1a1a',
      '#2e2e2e',
      '#424242',
      '#565656',
      '#6a6a6a',
    ],
    white: [
      '#ffffff',
      '#f9f9f9',
      '#f3f3f3',
      '#ededed',
      '#e7e7e7',
      '#f7f7f7',
      '#f1f1f1',
      '#ebebeb',
      '#e5e5e5',
      '#dfdfdf',
    ],
    indigo: [
      '#680739',
      '#5e0633',
      '#53062e',
      '#490528',
      '#3e0422',
      '#77204d',
      '#863961',
      '#955174',
      '#a46a88',
      '#b4839c',
    ],
    // gray:["#f5f5f5", "#ebebeb", "#e1e1e1", "#d7d7d7", "#cdcdcd", "#f0f0f0", "#f8f8f8", "#ffffff", "#ffffff", "#ffffff"],
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16), // default font size
    lg: rem(18),
    xl: rem(20),
  },

  spacing: {
    xs: rem(4),
    sm: rem(8),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
  },
  lineHeights: {
    xs: rem(16),
    sm: rem(20),
    md: rem(24),
    lg: rem(28),
    xl: rem(32),
  },
  radius: {
    xs: rem(4),
    sm: rem(8), // default border-radius
    md: rem(12),
    lg: rem(16),
    xl: rem(20),
  },
  // shadows: {
  //   xs: '0 1px 2px rgba(0, 0, 0, 0.05)', // Subtle shadow for small elements
  //   sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)', // Slightly stronger for inputs/cards
  //   md: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)', // Mid-level shadow, used for modals
  //   lg: '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)', // Prominent shadow for larger elements
  //   xl: '0 20px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.05)', // Deep shadow for emphasis
  // },
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.04)',
    sm: '0 2px 4px rgba(0, 0, 0, 0.04)',
    md: '0 4px 8px rgba(0, 0, 0, 0.04)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.04)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.04)',
  },
  fontFamily: 'Cabin Condensed, sans-serif',
  headings: {
    fontFamily: 'Cabin Condensed, sans-serif',
    fontWeight: '400',
    sizes: {
      h1: {
        fontSize: rem(48),
        lineHeight: rem(56),
        fontWeight: '400',
      },
      h2: {
        fontSize: rem(36),
        lineHeight: rem(44),
        fontWeight: '400',
      },
      h3: {
        fontSize: rem(24),
        lineHeight: rem(32),
        fontWeight: '400',
      },
      h4: {
        fontSize: rem(20),
        lineHeight: rem(28),
        fontWeight: '400',
      },
      h5: {
        fontSize: rem(20),
        lineHeight: rem(28),
        fontWeight: '400',
      },
      h6: {
        fontSize: rem(20),
        lineHeight: rem(28),
        fontWeight: '400',
      },
    },
  },
});
