import { Tabs, Stack } from "expo-router";
import { Image, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LogoTitle from "../../components/LogoTitle";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: () => <Text>Stronk</Text>,
          headerLeft: LogoTitle,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
