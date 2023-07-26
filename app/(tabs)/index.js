import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Platform } from "react-native";

const Home = () => {
  const router = useRouter();
  const windowWidth = Dimensions.get("window").width;
  const screenwWidth = Dimensions.get("screen").width;
  const { height, width } = useWindowDimensions();

  // console.log({ platForm: Platform.OS, windowWidth, screenwWidth, height, width });

  return (
    <View style={styles.homeContainer}>
      <ImageBackground
        style={styles.imageBg}
        source={require("../../assets/bg/deadlift2.jpg")}
        resizeMode="cover"
      >
        <LinearGradient colors={["rgba(0,0,0,0.8)", "transparent"]} style={styles.gradientBg} />

        <View style={styles.logoContainer}>
          <Image style={styles.whiteLogo} source={require("../../assets/logos/whitelogo.png")} />
          <LinearGradient colors={["#171717", "#2c2c2c", "#363636"]} style={styles.button}>
            <Pressable onPress={() => router.push("calculator")}>
              <Text style={styles.getStarted}>Get Started</Text>
            </Pressable>
          </LinearGradient>
        </View>

        <Pressable style={styles.todayContainer} onPress={() => router.push("whiteBoard")}>
          <Text style={styles.todayText}>TODAY'S WOD</Text>
          <FontAwesome name="arrow-circle-down" size={16} color="white" />
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  gradientBg: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  },
  imageBg: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    left: 50,
    alignItems: "center",
  },
  whiteLogo: {
    width: 100,
    height: 100,
  },
  button: {
    marginTop: 7,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#2c2c2c",
  },
  getStarted: {
    color: "lightgray",
    fontSize: 10,
    fontWeight: "600",
  },
  todayContainer: {
    marginTop: "auto",
    marginBottom: 30,
    alignItems: "center",
  },
  todayText: {
    color: "white",
    fontWeight: "500",
    fontSize: 13,
    marginBottom: 3,
    fontFamily: "Marker",
  },
});
