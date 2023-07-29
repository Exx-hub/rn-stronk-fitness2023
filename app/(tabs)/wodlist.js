import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import WodItem from "../../components/WodItem";
import CreateWod from "../../components/CreateWod";
import BottomHr from "../../components/BottomHr";
import { ScrollView } from "react-native";

const WodList = () => {
  const wods = [
    {
      id: 0,
      title: "The Big 3",
      exercises: ["Squats", "DeadLifts", "Bench"],
    },
    {
      id: 1,
      title: "Chest Ripper",
      exercises: ["Bench Press", "Incline DB", "Chest Dips", "Incline Smith", "Cable Cross"],
    },
    {
      id: 2,
      title: "The Military Man",
      exercises: [
        "Military Press",
        "DB Shoulder Press",
        "Lateral Raises",
        "Arnold Press",
        "Rear Delt Flye",
      ],
    },
    {
      id: 3,
      title: "Not A Leg Day",
      exercises: ["Back Squats", "Leg Extensions", "Romanian DeadLifts", "Calf Presses"],
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg/running.jpg")}
        resizeMode="center"
        style={styles.imageBg}
      >
        <LinearGradient colors={["rgba(0,0,0,.8)", "transparent"]} style={styles.gradientBg} />

        <View style={styles.listItems}>
          <CreateWod />

          <BottomHr borderBottomColor="white" marginVertical={8} />

          <ScrollView showsVerticalScrollIndicator={false}>
            {wods.map((wod) => (
              <WodItem {...wod} key={wod.id} />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WodList;

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
  listItems: {
    flex: 1,
    width: "80%",
    marginTop: 40,
  },
  createItem: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  itemLabel: {
    color: "black",
    fontWeight: "bold",
  },
  wodItem: {
    borderRadius: 8,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
