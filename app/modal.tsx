import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function ModalScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = Colors[colorScheme];

  return (
    <ThemedView style={styles.container}>
      <View style={[styles.iconWrap, { backgroundColor: `${palette.tint}14` }]}>
        <IconSymbol name="square.stack.3d.up.fill" size={28} color={palette.tint} />
      </View>

      <ThemedText type="title" style={styles.title}>
        Modal de exemplo
      </ThemedText>
      <ThemedText style={[styles.description, { color: palette.icon }]}>
        Rotas modais ficam no mesmo Stack do layout raiz. Use presentation: 'modal' nas
        opções da tela em app/_layout.tsx.
      </ThemedText>

      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Voltar para o início</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 12,
  },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    maxWidth: 320,
    marginBottom: 8,
  },
  link: {
    marginTop: 8,
    paddingVertical: 12,
  },
});
