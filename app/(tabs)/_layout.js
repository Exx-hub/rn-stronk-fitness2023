import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import LogoTitle from "../../components/LogoTitle";

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "",
          headerLeft: LogoTitle,
          tabBarIcon: () => <FontAwesome name="home" size={22} color="#333" />,
        }}
      />

      <Tabs.Screen
        name="prs"
        options={{
          tabBarIcon: () => <FontAwesome5 name="medal" size={20} color="#333" />,
        }}
      />
      <Tabs.Screen
        name="wodlist"
        options={{
          tabBarIcon: () => <FontAwesome name="list-ul" size={20} color="#333" />,
        }}
      />
      <Tabs.Screen
        name="calculator"
        options={{
          tabBarIcon: () => <FontAwesome name="calculator" size={20} color="#333" />,
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
