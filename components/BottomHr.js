import { StyleSheet, View } from "react-native";

const BottomHr = ({ marginVertical, borderBottomColor, zIndex = 1 }) => {
  console.log(zIndex);
  return (
    <View
      style={{
        borderBottomColor: borderBottomColor,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: marginVertical,
        zIndex: zIndex,
      }}
    />
  );
};

export default BottomHr;
