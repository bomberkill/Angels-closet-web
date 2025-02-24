import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Box, Button, Container, Group, Text, Title } from '@mantine/core';
import { theme } from '@/theme';

export default function CallToAction() {
  const { t } = useTranslation('common');
  return (
    <Container size="90%">
      <Box>
        <Title c={theme.colors?.yellow?.[1]} order={2} ta="center" mt="xl">
          {t('cta.title')}
        </Title>
        <Text my={theme.spacing?.sm} c="dimmed" ta="center" size="lg" mx="auto">
          {t('cta.subTitle')}
        </Text>
        <Group justify="center">
          <Button
            component={Link}
            href="/contact-us"
            size="md"
            variant="gradient"
            gradient={{ from: 'pink', to: 'yellow' }}
          >
            <Text size="sm" fw={700} c="white.0">
              {t('cta.buttonText')}
            </Text>
          </Button>
          <Button
            component="a"
            href="tel:+1 240 309 1643"
            size="md"
            variant="gradient"
            gradient={{ from: 'pink', to: 'yellow' }}
          >
            <Text size="sm" fw={700} c="white.0">
              {t('cta.callButton')}
            </Text>
          </Button>
        </Group>
      </Box>
    </Container>
  );
}
