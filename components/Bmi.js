import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import RadioButton from "./RadioButton";

const Bmi = ({
  weight,
  setWeight,
  height,
  setHeight,
  age,
  setAge,
  selectedOption,
  handleSelect,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculate BMI</Text>
      <View>
        <TextInput
          style={styles.textInput}
          value={weight}
          onChangeText={(text) => setWeight(text)}
          placeholder="Input Weight (kg)"
          keyboardType="numeric"
          returnKeyType="done"
        />
        <TextInput
          style={styles.textInput}
          value={height}
          onChangeText={(text) => setHeight(text)}
          placeholder="Input Height (cm)"
          keyboardType="numeric"
          returnKeyType="done"
        />
        <TextInput
          style={styles.textInput}
          value={age}
          onChangeText={(text) => setAge(text)}
          placeholder="Input Age (2-99)"
          keyboardType="number-pad"
          returnKeyType="done"
        />

        <View
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
        >
          <RadioButton
            options={["male", "female"]}
            selectedOption={selectedOption}
            onSelect={handleSelect}
          />

          <Pressable style={styles.calculateBtn}>
            <Text style={styles.btnText}>Calculate</Text>
          </Pressable>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginVertical: 15,
        }}
      />

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>BMI:</Text>
        <Text style={styles.result}>26.22</Text>
        <Text style={styles.category}>Overweight</Text>
      </View>
    </View>
  );
};

export default Bmi;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginTop: 30,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 5,
    fontSize: 18,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginVertical: 10,
    fontSize: 12,
  },
  calculateBtn: {
    backgroundColor: "#000",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
    width: "40%",
  },
  btnText: {
    color: "white",
  },
  resultContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  resultLabel: {
    backgroundColor: "black",
    color: "white",
    flex: 1,
    padding: 5,
    textAlign: "center",
    fontWeight: "700",
  },
  result: {
    backgroundColor: "gray",
    color: "white",
    flex: 1,
    padding: 5,
    textAlign: "center",
    fontWeight: "700",
  },
  category: {
    backgroundColor: "white",
    color: "#FFC126",
    flex: 1,
    padding: 5,
    textAlign: "center",
    fontWeight: "700",
  },
});
