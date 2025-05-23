import { Stack } from "expo-router";

export default function AboutUsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="about-us"
        options={{ headerShown: true, title: "About Us" }}
      />
    </Stack>
  );
}
