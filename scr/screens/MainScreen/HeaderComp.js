import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";

export const HeaderComp = ({ headerText, setModalOpt }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {setModalOpt(true)}}>
        <View style={styles.box}>
          <Text style={styles.text}>{headerText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: vs(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    borderColor: '#42aaff',
    borderWidth: 1.5,
    borderRadius: 7,
    paddingVertical: vs(5),
    paddingHorizontal: s(65),
  },
  text: {
    color: '#42aaff',
    fontSize: vs(14),
    fontWeight: '600',
  },
});
