import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"  options={{ title: 'Home Page' }} />
      <Stack.Screen name="character/characterDetails"  options={{ title: 'Character Details' }} />
    </Stack>
  );
}
