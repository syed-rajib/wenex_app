// ...existing code...
import React, { useState } from 'react';
import { NewAppScreen } from '@react-native/new-app-screen';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Pressable,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const [count, setCount] = useState(0);
  const [bg, setBg] = useState('#ffffff');

  return (
    <View style={[styles.container, { backgroundColor: bg, paddingTop: safeAreaInsets.top }]}>
      <Text style={styles.title}>Wenex App — edit App.tsx and save to see changes</Text>

      <Text style={styles.subtitle}>Counter: {count}</Text>
      <Pressable onPress={() => setCount(c => c + 1)} style={styles.button}>
        <Text style={styles.buttonText}>Increase</Text>
      </Pressable>

      <Pressable onPress={() => setBg(b => (b === '#ffffff' ? '#e6f7ff' : '#ffffff'))} style={styles.button}>
        <Text style={styles.buttonText}>Toggle Background</Text>
      </Pressable>

      <View style={{ flex: 1, marginTop: 16 }}>
        <NewAppScreen templateFileName="App.tsx" safeAreaInsets={safeAreaInsets} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 18, fontWeight: '700', margin: 12 },
  subtitle: { fontSize: 16, marginHorizontal: 12, marginBottom: 8 },
  button: { backgroundColor: '#00cc33', padding: 10, marginHorizontal: 12, marginBottom: 8, borderRadius: 6, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
});

export default App;