import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import LogoTitle from "../../components/LogoTitle";

import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#0d0d0d", borderTopWidth: 0 },
        tabBarActiveTintColor: "#F0EFE7",
        tabBarInactiveTintColor: "#333",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "",
          headerLeft: LogoTitle,
          tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={22} color={color} />,
        }}
      />

      <Tabs.Screen
        name="calculator"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="weight" size={18} color={color} />,
        }}
      />

      <Tabs.Screen
        name="wodlist"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="weight-lifter" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="prs"
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="staro" size={22} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: "500",
    fontSize: 18,
  },
});
