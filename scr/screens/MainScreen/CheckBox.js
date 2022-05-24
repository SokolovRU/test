import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { s, vs } from "react-native-size-matters";
import { trueNote, falseNote } from "../../store/actions/action";
export const CheckBox = ({active, id, dispatch}) => {

  const press = () => {
    dispatch(trueNote(id));
  };

  return (
    <TouchableOpacity
      onPress={() =>
        active ? dispatch(falseNote(id)) : dispatch(trueNote(id))
      }
    >
      <View style={styles(active).container}>
        <AntDesign
          name="check"
          size={vs(18)}
          color={active ? "#FFF" : "#DCDCDC"}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = (active) =>
  StyleSheet.create({
    container: {
      borderWidth: active ? 0 : 1,
      backgroundColor: active ? "#32CD32" : "#FFF",
      borderRadius: 6,
      padding: 2,
      justifyContent: "center",
      alignItems: "center",
    },
  });
