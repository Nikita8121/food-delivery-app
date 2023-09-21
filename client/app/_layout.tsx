import { useFonts } from 'expo-font';
import { Stack, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'react-native-feather';
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
      <SafeAreaView className="min-h-full py-5">
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="dish/[id]"
            options={{
              headerShown: false,
              headerTransparent: true,
              headerTitle: '',
              headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                  <ArrowLeft width={25} height={25} stroke="white" />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack>
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default StackLayout;
