import { useState } from "react";
import { View, StyleSheet } from "react-native";

import ToggleSwitch from "../../components/ToggleSwitch";
import Form from "../../components/Form";
import TableModal from "../../components/TableModal";

const Calculator = () => {
  const [active, setActive] = useState("bmi");
  const [showModal, setShowModal] = useState(false);

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [selectedOption, setSelectedOption] = useState("male");

  const [weightLoss, setWeightLoss] = useState("weight loss");

  const handleSelect = (option) => setSelectedOption(option);
  const handleWeightLoss = (option) => setWeightLoss(option);

  console.log({ weight, height, age, selectedOption, weightLoss });

  return (
    <View style={styles.container}>
      <ToggleSwitch active={active} setActive={setActive} />

      <Form
        active={active}
        selectedOption={selectedOption}
        handleSelect={handleSelect}
        weightLoss={weightLoss}
        handleWeightLoss={handleWeightLoss}
        weight={weight}
        setWeight={setWeight}
        height={height}
        setHeight={setHeight}
        age={age}
        setAge={setAge}
      />

      {active === "bmi" ? <TableModal showModal={showModal} setShowModal={setShowModal} /> : null}
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
