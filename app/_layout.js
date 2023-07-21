import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Platform } from "react-native";

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    Marker: require("../assets/fonts/PermanentMarker-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

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
