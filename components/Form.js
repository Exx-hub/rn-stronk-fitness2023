import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import RadioButton from "./RadioButton";
import DropDownPicker from "react-native-dropdown-picker";
import BmiResult from "./BmiResult";
import CalorieResult from "./CalorieResult";

const Form = ({
  active,
  weight,
  setWeight,
  height,
  setHeight,
  age,
  setAge,
  selectedOption,
  handleSelect,
  weightLoss,
  handleWeightLoss,
  calculateBMI,
  bmi,
  category,
  categoryColor,
  pickerOpen,
  pickerValue,
  pickerItems,
  setPickerOpen,
  setPickerValue,
  setPickerItems,
  calculateCalories,
  bmr,
  tdee,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculate {active === "bmi" ? "BMI" : "Calories"}</Text>
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

        {active !== "bmi" ? (
          <View style={{ zIndex: 100, marginBottom: 5 }}>
            <RadioButton
              options={["weight loss", "weight gain"]}
              selectedOption={weightLoss}
              onSelect={handleWeightLoss}
            />
            <DropDownPicker
              open={pickerOpen}
              value={pickerValue}
              items={pickerItems}
              setOpen={setPickerOpen}
              setValue={setPickerValue}
              setItems={setPickerItems}
              theme="DARK"
              textStyle={{ fontSize: 12, color: "lightgray" }}
            />
          </View>
        ) : null}

        <View
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
        >
          <RadioButton
            options={["male", "female"]}
            selectedOption={selectedOption}
            onSelect={handleSelect}
          />

          <Pressable
            style={styles.calculateBtn}
            onPress={active === "bmi" ? calculateBMI : calculateCalories}
          >
            <Text style={styles.btnText}>Calculate</Text>
          </Pressable>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginVertical: 15,
          zIndex: -1,
        }}
      />

      {active === "bmi" ? (
        <BmiResult bmi={bmi} category={category} categoryColor={categoryColor} />
      ) : (
        <CalorieResult weightLoss={weightLoss} bmr={bmr} tdee={tdee} />
      )}
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginTop: 15,
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
});
