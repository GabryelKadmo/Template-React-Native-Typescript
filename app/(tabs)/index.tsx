import { Link } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const STACK = [
  {
    icon: 'iphone' as const,
    title: 'Expo SDK 56',
    description: 'React Native 0.85, React 19 e New Architecture ativa por padrão.',
  },
  {
    icon: 'square.stack.3d.up.fill' as const,
    title: 'Expo Router',
    description: 'Navegação file-based com tabs, stack e modals prontos.',
  },
  {
    icon: 'chevron.left.forwardslash.chevron.right' as const,
    title: 'TypeScript 6',
    description: 'Tipagem estática em todo o projeto, do roteamento aos hooks.',
  },
  {
    icon: 'moon.fill' as const,
    title: 'Tema adaptativo',
    description: 'Suporte a light e dark mode com componentes temáticos.',
  },
];

const STEPS = [
  'Renomeie o app em app.json e package.json',
  'Ajuste as cores em constants/theme.ts',
  'Crie suas telas dentro de app/',
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme === 'dark' ? 'dark' : 'light'];

  return (
    <ThemedView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={[styles.logo, { backgroundColor: `${palette.tint}18` }]}>
            <IconSymbol name="chevron.left.forwardslash.chevron.right" size={32} color={palette.tint} />
          </View>

          <ThemedText type="title" style={styles.heroTitle}>
            Template React Native
          </ThemedText>
          <ThemedText style={[styles.heroSubtitle, { color: palette.icon }]}>
            Base pronta para apps Expo com TypeScript
          </ThemedText>

          <View style={[styles.metaRow, { borderColor: `${palette.icon}30` }]}>
            <ThemedText style={[styles.metaLabel, { color: palette.icon }]}>SDK 56</ThemedText>
            <View style={[styles.metaDivider, { backgroundColor: palette.icon }]} />
            <ThemedText style={[styles.metaLabel, { color: palette.icon }]}>RN 0.85</ThemedText>
            <View style={[styles.metaDivider, { backgroundColor: palette.icon }]} />
            <ThemedText style={[styles.metaLabel, { color: palette.icon }]}>Router 56</ThemedText>
          </View>
        </View>

        <ThemedView
          lightColor="#F8FAFC"
          darkColor="#1A1D1F"
          style={[styles.section, { borderColor: `${palette.icon}22` }]}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
            Stack incluída
          </ThemedText>

          <View style={styles.stackList}>
            {STACK.map((item) => (
              <View key={item.title} style={styles.stackItem}>
                <View style={[styles.stackIcon, { backgroundColor: `${palette.tint}14` }]}>
                  <IconSymbol name={item.icon} size={20} color={palette.tint} />
                </View>
                <View style={styles.stackContent}>
                  <ThemedText type="defaultSemiBold" style={styles.stackTitle}>
                    {item.title}
                  </ThemedText>
                  <ThemedText style={[styles.stackDescription, { color: palette.icon }]}>
                    {item.description}
                  </ThemedText>
                </View>
              </View>
            ))}
          </View>
        </ThemedView>

        <ThemedView
          lightColor="#F8FAFC"
          darkColor="#1A1D1F"
          style={[styles.section, { borderColor: `${palette.icon}22` }]}>
          <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
            Primeiros passos
          </ThemedText>

          <View style={styles.stepsList}>
            {STEPS.map((step, index) => {
              const isLast = index === STEPS.length - 1;

              return (
                <View key={step} style={styles.stepItem}>
                  <View style={styles.stepTrack}>
                    <View
                      style={[
                        styles.stepMarker,
                        { borderColor: `${palette.tint}55` },
                      ]}>
                      <ThemedText style={[styles.stepMarkerText, { color: palette.tint }]}>
                        {index + 1}
                      </ThemedText>
                    </View>
                    {!isLast && (
                      <View
                        style={[styles.stepConnector, { backgroundColor: `${palette.icon}28` }]}
                      />
                    )}
                  </View>
                  <ThemedText style={styles.stepText}>{step}</ThemedText>
                </View>
              );
            })}
          </View>

          <View style={[styles.guideDivider, { backgroundColor: `${palette.icon}18` }]} />

          <Link href="/explore" style={styles.guideLink}>
            <ThemedText type="link">Ver guia completo na aba Explorar</ThemedText>
            <IconSymbol name="arrow.up.right.square" size={15} color={palette.tint} />
          </Link>
        </ThemedView>

        <View style={styles.footer}>
          <ThemedText style={[styles.footerHint, { color: palette.icon }]}>
            Edite esta tela em
          </ThemedText>
          <ThemedView
            lightColor="#11181C"
            darkColor="#ECEDEE"
            style={styles.footerPath}>
            <ThemedText
              lightColor="#ECEDEE"
              darkColor="#11181C"
              style={styles.footerPathText}>
              app/(tabs)/index.tsx
            </ThemedText>
          </ThemedView>
        </View>
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
    gap: 20,
  },
  hero: {
    alignItems: 'center',
    paddingTop: 8,
    gap: 10,
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  heroTitle: {
    fontSize: 28,
    lineHeight: 34,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
  heroSubtitle: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 300,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    gap: 10,
  },
  metaLabel: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  metaDivider: {
    width: 1,
    height: 10,
    opacity: 0.35,
  },
  section: {
    borderRadius: 16,
    borderWidth: 1,
    padding: 18,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 17,
    letterSpacing: -0.2,
  },
  stackList: {
    gap: 14,
  },
  stackItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  stackIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stackContent: {
    flex: 1,
    gap: 3,
    paddingTop: 2,
  },
  stackTitle: {
    fontSize: 15,
    letterSpacing: -0.1,
  },
  stackDescription: {
    fontSize: 13,
    lineHeight: 19,
  },
  stepsList: {
    gap: 0,
    marginBottom: -14,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
    paddingBottom: 14,
  },
  stepTrack: {
    alignItems: 'center',
    width: 24,
    paddingTop: 1,
  },
  stepMarker: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepMarkerText: {
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 13,
  },
  stepConnector: {
    width: 1,
    height: 18,
    marginTop: 4,
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
    paddingTop: 2,
  },
  guideDivider: {
    height: 1,
    marginTop: 4,
  },
  guideLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  footer: {
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  footerHint: {
    fontSize: 13,
  },
  footerPath: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  footerPathText: {
    fontSize: 12,
    fontFamily: 'monospace',
    fontWeight: '600',
  },
});
