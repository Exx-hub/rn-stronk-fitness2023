import { Image, View } from "react-native";

export default LogoTitle = () => {
  return (
    <View>
      <Image
        source={require("../assets/logos/stronkblack.png")}
        style={{ width: 40, height: 40 }}
      />
    </View>
  );
};
