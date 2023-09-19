import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import { QueryClientProvider } from 'src/lib/react-query/QueryClientProvider';

SplashScreen.preventAutoHideAsync();

const StackLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Black': require('src/assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      ></Stack>
    </QueryClientProvider>
  );
};

export default StackLayout;
