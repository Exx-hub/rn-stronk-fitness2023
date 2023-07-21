import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

const WhiteBoard = () => {
  const exercises = [
    "Bench Press",
    "Incline DB Press",
    "Chest Dips",
    "Close Grip Press",
    "Pec Dec",
    "Tricep Dips",
  ];

  return (
    <View style={styles.modalContainer}>
      <ImageBackground
        style={styles.imageBg}
        source={require("../assets/bg/motivation.jpg")}
        resizeMode="cover"
      >
        <View style={styles.whiteboardContainer}>
          <ImageBackground
            style={styles.whiteboard}
            source={require("../assets/bg/whiteboard.jpg")}
          >
            <Text style={styles.title}>CHEST BUSTER</Text>
            <Text style={styles.author}>by: Alvin Acosta</Text>
            {exercises.map((e, i) => (
              <Text key={`${e}${i}`} style={styles.exercise}>
                - {e}
              </Text>
            ))}
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WhiteBoard;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
  },
  imageBg: {
    flex: 1,
    width: "100%",
  },

  whiteboardContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 100,
  },
  whiteboard: {
    height: 223,
    width: 350,
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Marker",
  },
  author: {
    fontSize: 12,
    color: "gray",
    marginBottom: 3,
    fontFamily: "Marker",
  },
  exercise: {
    fontSize: 14,
    fontFamily: "Marker",
  },
});
