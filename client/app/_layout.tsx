import { Stack } from 'expo-router';
import React from 'react';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    ></Stack>
  );
};

export default StackLayout;