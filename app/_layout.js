import { Stack } from "expo-router";
import { Platform } from "react-native";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="whiteBoard"
        options={{
          headerTitle: "TODAY'S WOD",
          headerShown: Platform.OS === "ios" ? false : true,
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default RootLayout;
