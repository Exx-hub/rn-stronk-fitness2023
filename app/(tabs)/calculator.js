import { useState } from "react";
import { View, StyleSheet } from "react-native";

import ToggleSwitch from "../../components/ToggleSwitch";
import Form from "../../components/Form";
import TableModal from "../../components/TableModal";
import BmiResult from "../../components/BmiResult";
import CalorieResult from "../../components/CalorieResult";

const Calculator = () => {
  const [active, setActive] = useState("bmi");
  const [showModal, setShowModal] = useState(false);

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [selectedOption, setSelectedOption] = useState("male");

  const [weightLoss, setWeightLoss] = useState("weight loss");

  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("--");
  const [categoryColor, setCategoryColor] = useState("gray");

  const handleSelect = (option) => setSelectedOption(option);
  const handleWeightLoss = (option) => setWeightLoss(option);

  // console.log({ weight, height, age, selectedOption, weightLoss });

  const calculateBMI = () => {
    const myWeight = weight;
    const myHeight = Math.pow(height / 100, 2);

    const result = myWeight / myHeight;

    const finalResult = result.toFixed(2);

    setBmi(finalResult);

    if (finalResult <= 18.49) {
      setCategory("underweight");
      setCategoryColor("#BC2020");
    } else if (finalResult >= 18.5 && finalResult <= 24.99) {
      setCategory("ideal");
      setCategoryColor("#008137");
    } else if (finalResult >= 25 && finalResult <= 29.99) {
      setCategory("overweight");
      setCategoryColor("#FFE400");
    } else if (finalResult >= 30 && finalResult <= 34.99) {
      setCategory("obese");
      setCategoryColor("#BC2020");
    } else if (finalResult >= 35) {
      setCategory("extremely obese");
      setCategoryColor("#8A0101");
    }
  };

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
        calculateBMI={calculateBMI}
        bmi={bmi}
        category={category}
        categoryColor={categoryColor}
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
