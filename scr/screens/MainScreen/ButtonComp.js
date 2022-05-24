import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";

export const ButtonComp = ({ setModalAdd }) => {
  return (
    <TouchableOpacity onPress={() => setModalAdd(true)}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Добавить</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: vs(10),
    backgroundColor: "#42aaff",
    paddingHorizontal: s(120),
    marginTop: vs(15),
    borderRadius: 7,
  },
  text: {
    color: "#FFF",
    fontSize: vs(16),
    fontWeight: "600",
  },
});
