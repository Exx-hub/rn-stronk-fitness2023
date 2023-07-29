import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import PrItem from "../../components/prItem";
import CreatePr from "../../components/CreatePr";
import BottomHr from "../../components/BottomHr";

const Prs = () => {
  const prs = [
    {
      id: 0,
      title: "Bench Press",
      weight: "75kg",
      isFavorite: false,
    },
    {
      id: 1,
      title: "Deadlift",
      weight: "120kg",
      isFavorite: true,
    },
    {
      id: 2,
      title: "Squats",
      weight: "110kg",
      isFavorite: false,
    },
    {
      id: 3,
      title: "Military",
      weight: "50kg",
      isFavorite: true,
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg/barbell3.jpg")}
        resizeMode="cover"
        style={styles.imageBg}
      >
        <LinearGradient colors={["rgba(0,0,0,.8)", "transparent"]} style={styles.gradientBg} />

        <View style={styles.prItemsContainer}>
          <View style={styles.heading}>
            <Text style={styles.headingTitle}>Personal Records</Text>
            <AntDesign name="star" size={20} color="white" />
          </View>

          <CreatePr />

          <BottomHr borderBottomColor="white" marginVertical={8} />

          <ScrollView>
            {prs.map((pr) => (
              <PrItem key={pr.id} {...pr} />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Prs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    alignItems: "center",
  },
  gradientBg: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  },
  prItemsContainer: {
    flex: 1,
    marginTop: 20,
    width: "80%",
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  headingTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
  },
});
