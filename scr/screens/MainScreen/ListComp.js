import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";
import { CheckBox } from "./CheckBox";
import { AntDesign } from "@expo/vector-icons";
import { s, vs } from "react-native-size-matters";
import { dellNote } from "../../store/actions/action";

export const ListComp = ({ data, dispatch }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles(item).item}>
        <View>
          <CheckBox active={item.status} id={item.id} dispatch={dispatch} />
        </View>
        <View style={{ flex: 1, marginLeft: s(20), marginRight: s(20) }}>
          <Text style={{ fontSize: vs(15), fontWeight: "700" }}>
            {item.name}
          </Text>
          <Text style={styles(item).text}>{item.info}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => dispatch(dellNote(item.id))}>
            <View
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <AntDesign
                name="delete"
                size={vs(20)}
                color="rgba(0, 0, 0, 0.5)"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={data[0].data}
      renderItem={(item) => renderItem(item)}
      keyExtractor={(item) => item.id}
      style={{ marginTop: vs(20) }}
    />
  );
};

const styles = (item) =>
  StyleSheet.create({
    item: {
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      marginHorizontal: s(15),
      marginVertical: vs(5),
      paddingTop: vs(10),
      borderTopColor: "rgba(0, 0, 0, 0.1)",
      borderTopWidth: 0.5,
    },
    text: {
      fontWeight: !item.status ? "400" : "200",
      textDecorationLine: !item.status ? "none" : "line-through",
      color: !item.status ? "#000" : "rgba(0, 0, 0, 0.4)",
    },
  });
