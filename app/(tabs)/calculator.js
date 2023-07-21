import { View, StyleSheet, Text, TextInput, Button, Pressable } from "react-native";
import ToggleSwitch from "../../components/ToggleSwitch";
import { useState } from "react";
import RadioButton from "../../components/RadioButton";
import Bmi from "../../components/Bmi";

const Calculator = () => {
  const [active, setActive] = useState("bmi");

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [selectedOption, setSelectedOption] = useState("male");

  const handleSelect = (option) => setSelectedOption(option);

  console.log({ weight, height, age, selectedOption });

  return (
    <View style={styles.container}>
      <ToggleSwitch active={active} setActive={setActive} />

      {active === "bmi" ? (
        <Bmi
          selectedOption={selectedOption}
          handleSelect={handleSelect}
          weight={weight}
          setWeight={setWeight}
          height={height}
          setHeight={setHeight}
          age={age}
          setAge={setAge}
        />
      ) : (
        <View>
          <Text>Calculate Calories</Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
});
