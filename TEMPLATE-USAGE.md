# Como usar este template

Template React Native com **Expo SDK 56**, **React Native 0.85**, **Expo Router 56** e **TypeScript 6**.

## 1. Configuração inicial

1. **Clone ou copie este template**

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Valide o alinhamento com o SDK:**
   ```bash
   npx expo install --check
   npx expo-doctor
   ```
   Se houver divergências, corrija com:
   ```bash
   npx expo install --fix
   ```

4. **Configure variáveis de ambiente (opcional):**
   ```bash
   cp .env.example .env.local
   ```
   Edite `.env.local` com suas configurações de API e serviços externos.

## 2. Stack incluída

| Tecnologia | Versão |
|---|---|
| Expo SDK | 56 |
| React Native | 0.85 |
| React | 19.2 |
| Expo Router | 56 |
| TypeScript | 6 |

Recursos do template:

- **Expo Router** — navegação file-based (tabs, stack, modal)
- **New Architecture** — ativa por padrão a partir do SDK 55 (sem config extra)
- **Tema claro/escuro** — via `ThemedText`, `ThemedView` e `constants/theme.ts`
- **React Compiler** — habilitado em `app.json` (`experiments.reactCompiler`)
- **ESLint** — `eslint-config-expo` alinhado ao SDK 56

## 3. Personalizando o projeto

### Alterar nome do app

- `package.json` → campo `name`
- `app.json` → campos `expo.name`, `expo.slug` e `expo.scheme`

### Ícone e splash screen

- Substitua os arquivos em `assets/images/`
- Gere um novo build nativo após alterar (`eas build` ou `npx expo prebuild`)

### Cores e tema

- Edite `constants/theme.ts`
- Use `ThemedText` e `ThemedView` nos componentes para respeitar light/dark mode

### Navegação (SDK 56)

No SDK 56, **não importe** de `@react-navigation/*` no código da aplicação. Use os entry points do Expo Router:

```tsx
// Temas e utilitários de navegação
import { ThemeProvider, DarkTheme } from 'expo-router/react-navigation';

// Tipos e componentes de tabs
import { BottomTabBarButtonProps } from 'expo-router/js-tabs';
import { PlatformPressable } from 'expo-router/react-navigation';
```

Layouts disponíveis via `expo-router`: `Stack`, `Tabs`, `Drawer`.

### Estrutura de pastas sugerida

```
app/                    # Telas e rotas (Expo Router)
components/             # Componentes reutilizáveis
constants/              # Tema, tokens e constantes
hooks/                  # Custom hooks
services/               # APIs e serviços externos
types/                  # Definições TypeScript
utils/                  # Funções utilitárias
```

## 4. Desenvolvimento

### Comandos

```bash
npm run start          # Servidor de desenvolvimento (Expo)
npm run android        # Android (emulador ou dispositivo)
npm run ios            # iOS (simulador ou dispositivo)
npm run web            # Navegador
npm run lint           # ESLint
```

### Telas de referência

| Arquivo | Conteúdo |
|---|---|
| `app/(tabs)/index.tsx` | Visão geral da stack e primeiros passos |
| `app/(tabs)/explore.tsx` | Guia interativo do template |
| `app/modal.tsx` | Exemplo de modal |
| `app/_layout.tsx` | Layout raiz (Stack + tema) |

### Próximos passos

1. Renomeie o app e ajuste `constants/theme.ts`
2. Crie novas rotas em `app/`
3. Extraia UI reutilizável para `components/`
4. Centralize chamadas de API em `services/`

## 5. Deploy

Os comandos `expo publish` e `expo build` foram descontinuados. Use **EAS**:

```bash
npm i -g eas-cli
eas login
eas build:configure
eas build --platform all
```

Para updates over-the-air:

```bash
eas update --branch production --message "Descrição da update"
```

Documentação: [https://docs.expo.dev/eas/](https://docs.expo.dev/eas/)

## 6. Migração e manutenção

- Guia SDK 55 → 56: [https://docs.expo.dev/router/migrate/sdk-55-to-56/](https://docs.expo.dev/router/migrate/sdk-55-to-56/)
- Remova `newArchEnabled` e `android.edgeToEdgeEnabled` do `app.json` se existirem — no SDK 56 são padrão e não fazem parte do schema
- Codemod automático para imports de navegação:
  ```bash
  npx expo-codemod sdk-56-expo-router-react-navigation-replace app components
  ```

---

Template pronto para evoluir a partir de uma base atualizada com Expo SDK 56.
