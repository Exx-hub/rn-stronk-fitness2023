import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";

const TableModal = ({ showModal, setShowModal }) => {
  return (
    <View style={{ marginTop: "auto", marginBottom: 15, alignItems: "center" }}>
      <Modal animationType="fade" transparent={true} visible={showModal}>
        <View style={[styles.modalContainer, styles.shadowEffect]}>
          <View style={styles.modalContent}>
            <Pressable onPress={() => setShowModal(!showModal)} style={styles.closeModal}>
              <FontAwesome name="close" size={24} color="black" />
            </Pressable>

            <View style={styles.tableWrapper}>
              <View style={{ width: "100%" }}>
                <View style={{ flexDirection: "row", padding: 5, backgroundColor: "#CFE2FF" }}>
                  <Text style={styles.tableData}>Category</Text>
                  <Text style={styles.tableData}>BMI range</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableData}>Underweight</Text>
                  <Text style={styles.tableValue}>{"< 18.49"}</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableData}>Ideal Weight</Text>
                  <Text style={styles.tableValue}>18.5 - 24.99</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableData}>Overweight</Text>
                  <Text style={styles.tableValue}>25 - 29.99</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableData}>Obese</Text>
                  <Text style={styles.tableValue}>30 - 34.99</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.tableData}>Extremely Obese</Text>
                  <Text style={styles.tableValue}>{"> 35"}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable style={{ alignItems: "center" }} onPress={() => setShowModal(!showModal)}>
        <Entypo name="popup" size={24} color="black" />
        <Text style={{ fontSize: 10, marginTop: 3 }}>See BMI table</Text>
      </Pressable>
    </View>
  );
};

export default TableModal;

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  modalContent: {
    height: 275,
    width: 305,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
  },
  shadowEffect: {
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation: 3,
  },
  closeModal: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 100,
  },
  tableWrapper: {
    flex: 1,
    width: "95%",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#E2E3E5",
    padding: 5,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  tableData: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
  tableValue: {
    flex: 1,
    textAlign: "center",
  },
});
