import { Image, StyleSheet, Text, View } from "react-native";

export default LogoTitle = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logos/stronkblack.png")} style={styles.image} />
      <Text style={styles.title}>STRONK FITNESS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  image: {
    width: 40,
    height: 40,
  },
  title: {
    color: "black",
    fontSize: 17,
    marginLeft: 5,
  },
});
