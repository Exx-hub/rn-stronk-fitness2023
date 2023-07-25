import { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import ToggleSwitch from "../../components/ToggleSwitch";
import Form from "../../components/Form";
import TableModal from "../../components/TableModal";

const Calculator = () => {
  const [active, setActive] = useState("bmi");
  const [showModal, setShowModal] = useState(false);

  // bmi calculation
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [selectedOption, setSelectedOption] = useState("male");

  // tdee calories calculation
  const [weightLoss, setWeightLoss] = useState("weight loss");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerValue, setPickerValue] = useState("sedentary");
  const [pickerItems, setPickerItems] = useState([
    { label: "Sedentary: little or no exercise", value: "sedentary" },
    { label: "Light: exercise 1-3 times/week", value: "light" },
    { label: "Moderate: exercise 4-5 times/week", value: "moderate" },
    { label: "Active: daily or 3-4x intense exercise/week", value: "active" },
    { label: "Extra Active: athlete or extremely physical job", value: "athlete" },
  ]);

  const [bmr, setBmr] = useState(null);
  const [tdee, setTdee] = useState(null);

  // bmi results
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("--");
  const [categoryColor, setCategoryColor] = useState("gray");

  const handleSelect = (option) => setSelectedOption(option);
  const handleWeightLoss = (option) => setWeightLoss(option);

  const calculateBMI = () => {
    if (!age || !weight || !height) {
      Alert.alert("All fields required!");
      return;
    }

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

  const calculateCalories = () => {
    if (!age || !weight || !height) {
      Alert.alert("All fields required!");
      return;
    }

    let tempBmr;

    const myWeight = weight * 10;
    const myHeight = height * 6.25;
    const myAge = age * 5;

    if (selectedOption === "male") {
      tempBmr = myWeight + myHeight - myAge + 5;
    } else {
      tempBmr = myWeight + myHeight - myAge - 161;
    }

    setBmr(tempBmr);

    switch (pickerValue) {
      case "sedentary":
        setTdee(tempBmr * 1.2);
        break;
      case "light":
        setTdee(tempBmr * 1.375);
        break;
      case "moderate":
        setTdee(tempBmr * 1.55);
        break;
      case "active":
        setTdee(tempBmr * 1.725);
        break;
      case "athlete":
        setTdee(tempBmr * 1.9);
        break;
      default:
        return;
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
        pickerOpen={pickerOpen}
        setPickerOpen={setPickerOpen}
        pickerValue={pickerValue}
        setPickerValue={setPickerValue}
        pickerItems={pickerItems}
        setPickerItems={setPickerItems}
        calculateCalories={calculateCalories}
        bmr={bmr}
        tdee={tdee}
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
