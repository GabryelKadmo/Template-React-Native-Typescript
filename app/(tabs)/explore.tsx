import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const COMMANDS = [
  { label: 'Desenvolvimento', value: 'npm run start' },
  { label: 'Android', value: 'npm run android' },
  { label: 'iOS', value: 'npm run ios' },
  { label: 'Web', value: 'npm run web' },
  { label: 'Lint', value: 'npm run lint' },
  { label: 'Validar deps', value: 'npx expo install --check' },
];

export default function ExploreScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = Colors[colorScheme];

  return (
    <ThemedView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={[styles.headerIcon, { backgroundColor: `${palette.tint}14` }]}>
            <IconSymbol name="book.fill" size={24} color={palette.tint} />
          </View>
          <ThemedText type="title" style={styles.title}>
            Guia do template
          </ThemedText>
          <ThemedText style={[styles.subtitle, { color: palette.icon }]}>
            Referência rápida para personalizar e evoluir o projeto.
          </ThemedText>
        </View>

        <ThemedView
          lightColor="#F8FAFC"
          darkColor="#1A1D1F"
          style={[styles.panel, { borderColor: `${palette.icon}22` }]}>
          <Collapsible title="Estrutura de pastas">
            <ThemedText style={[styles.body, { color: palette.icon }]}>
              app/ — telas e rotas (Expo Router){'\n'}
              components/ — UI reutilizável{'\n'}
              constants/ — tema e tokens{'\n'}
              hooks/ — lógica compartilhada{'\n'}
              services/ — APIs e integrações{'\n'}
              types/ — tipos TypeScript{'\n'}
              utils/ — funções auxiliares
            </ThemedText>
          </Collapsible>

          <View style={[styles.divider, { backgroundColor: `${palette.icon}18` }]} />

          <Collapsible title="Personalização">
            <ThemedText style={[styles.body, { color: palette.icon }]}>
              Renomeie o app em app.json (name, slug, scheme) e em package.json.{'\n\n'}
              Troque ícones e splash em assets/images/.{'\n\n'}
              Ajuste cores em constants/theme.ts — os componentes ThemedText e ThemedView
              reagem automaticamente ao esquema claro/escuro.
            </ThemedText>
          </Collapsible>

          <View style={[styles.divider, { backgroundColor: `${palette.icon}18` }]} />

          <Collapsible title="Navegação (SDK 56)">
            <ThemedText style={[styles.body, { color: palette.icon }]}>
              Use layouts do expo-router (Tabs, Stack, Drawer) em app/.{'\n\n'}
              Imports de React Navigation devem vir de expo-router, não de
              @react-navigation/* — por exemplo, expo-router/react-navigation e
              expo-router/js-tabs.
            </ThemedText>
          </Collapsible>

          <View style={[styles.divider, { backgroundColor: `${palette.icon}18` }]} />

          <Collapsible title="Comandos úteis">
            <View style={styles.commandList}>
              {COMMANDS.map((command) => (
                <View key={command.label} style={styles.commandRow}>
                  <ThemedText type="defaultSemiBold" style={styles.commandLabel}>
                    {command.label}
                  </ThemedText>
                  <ThemedView
                    lightColor="#11181C"
                    darkColor="#ECEDEE"
                    style={styles.commandValue}>
                    <ThemedText
                      lightColor="#ECEDEE"
                      darkColor="#11181C"
                      style={styles.commandValueText}>
                      {command.value}
                    </ThemedText>
                  </ThemedView>
                </View>
              ))}
            </View>
          </Collapsible>

          <View style={[styles.divider, { backgroundColor: `${palette.icon}18` }]} />

          <Collapsible title="Deploy com EAS">
            <ThemedText style={[styles.body, { color: palette.icon }]}>
              Instale o EAS CLI e configure o projeto:{'\n\n'}
              npm i -g eas-cli{'\n'}
              eas build:configure{'\n'}
              eas build --platform all{'\n\n'}
              Para updates OTA, use eas update. Os comandos expo publish e expo build
              foram descontinuados.
            </ThemedText>
          </Collapsible>
        </ThemedView>

        <ThemedView
          lightColor="#F8FAFC"
          darkColor="#1A1D1F"
          style={[styles.panel, styles.tipPanel, { borderColor: `${palette.tint}40` }]}>
          <View style={styles.tipHeader}>
            <IconSymbol name="checkmark.shield.fill" size={18} color={palette.tint} />
            <ThemedText type="defaultSemiBold">Antes de publicar</ThemedText>
          </View>
          <ThemedText style={[styles.body, { color: palette.icon }]}>
            Execute npx expo-doctor para validar app.json e dependências. Remova
            newArchEnabled do app.json — no SDK 56 a New Architecture já é obrigatória.
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 32,
    gap: 16,
  },
  header: {
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
    textAlign: 'center',
    letterSpacing: -0.4,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 21,
    maxWidth: 320,
  },
  panel: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 16,
    gap: 4,
  },
  divider: {
    height: 1,
    marginVertical: 10,
  },
  body: {
    fontSize: 14,
    lineHeight: 21,
  },
  commandList: {
    gap: 10,
  },
  commandRow: {
    gap: 6,
  },
  commandLabel: {
    fontSize: 13,
  },
  commandValue: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  commandValueText: {
    fontSize: 12,
    fontFamily: 'monospace',
    fontWeight: '600',
  },
  tipPanel: {
    gap: 10,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
