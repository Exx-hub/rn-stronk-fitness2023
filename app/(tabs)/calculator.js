import { View, StyleSheet, Text, TextInput, Button, Pressable } from "react-native";
import ToggleSwitch from "../../components/ToggleSwitch";
import { useState } from "react";
import RadioButton from "../../components/RadioButton";

const Calculator = () => {
  const [active, setActive] = useState("bmi");

  const [selectedRadioOption, setSelectedRadioOption] = useState("male");

  console.log(selectedRadioOption);

  const handleSelect = (option) => setSelectedRadioOption(option);

  return (
    <View style={styles.container}>
      <ToggleSwitch active={active} setActive={setActive} />

      {active === "bmi" ? (
        <View style={{ borderWidth: 1, borderColor: "red" }}>
          <Text>Calculate BMI</Text>
          <View>
            <TextInput placeholder="Input Weight (kg)" keyboardType="numeric" />
            <TextInput placeholder="Input Height (cm)" keyboardType="numeric" />
            <TextInput placeholder="Input Age (2-99)" keyboardType="number-pad" />

            <RadioButton
              options={["male", "female"]}
              selectedOption={selectedRadioOption}
              onSelect={handleSelect}
            />

            <Pressable>
              <Text>Calculate</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View>
          <Text>Calculate Calories</Text>
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
  },
});
