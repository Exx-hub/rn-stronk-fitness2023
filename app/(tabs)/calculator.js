import { useState } from "react";
import { View, StyleSheet } from "react-native";
import ToggleSwitch from "../../components/ToggleSwitch";

import Form from "../../components/Form";

const Calculator = () => {
  const [active, setActive] = useState("bmi");

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [selectedOption, setSelectedOption] = useState("male");

  const handleSelect = (option) => setSelectedOption(option);

  // console.log({ weight, height, age, selectedOption });

  return (
    <View style={styles.container}>
      <ToggleSwitch active={active} setActive={setActive} />

      <Form
        active={active}
        selectedOption={selectedOption}
        handleSelect={handleSelect}
        weight={weight}
        setWeight={setWeight}
        height={height}
        setHeight={setHeight}
        age={age}
        setAge={setAge}
      />
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
