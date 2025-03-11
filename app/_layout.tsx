import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

const RootLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="+not-found"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <StatusBar barStyle={'dark-content'} />
    </>
  );
};

export default RootLayout;
