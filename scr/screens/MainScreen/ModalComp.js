import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Modal,
} from "react-native";
import { vs, s } from "react-native-size-matters";
import { active, addNote } from "../../store/actions/action";
export const ModalAddComp = ({
  modalVisible,
  setModalVisible,
  headingText,
  setHeadingText,
  taskText,
  setTaskText,
  dispatch,
}) => {
  const close = () => {
    setModalVisible(false);
    setHeadingText("");
    setTaskText("");
  };
  const save = () => {
    const obj = {
      name: headingText,
      info: taskText,
    };
    dispatch(addNote(obj));
    close();
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={stylesAdd.centeredView}>
        <View style={stylesAdd.modalView}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: vs(16), fontWeight: "600" }}>
              Добавить предмет
            </Text>
            <Text style={stylesAdd.textHeader}>
              Укажите заголовок и задание
            </Text>
          </View>
          <View>
            <TextInput
              style={stylesAdd.inputText}
              placeholder="Заголовок"
              value={headingText}
              onChangeText={setHeadingText}
            />
            <TextInput
              style={stylesAdd.inputText}
              placeholder="Задание"
              value={taskText}
              onChangeText={setTaskText}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: vs(35),
            }}
          >
            <TouchableOpacity onPress={close}>
              <View>
                <Text
                  style={{ color: "gray", fontWeight: "600", fontSize: vs(16) }}
                >
                  Отмена
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={save}>
              <View>
                <Text
                  style={{
                    color: "#42aaff",
                    fontWeight: "600",
                    fontSize: vs(16),
                  }}
                >
                  Сохранить
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const stylesAdd = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modalView: {
    margin: 0,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    paddingVertical: vs(12),
    paddingHorizontal: s(10),
  },
  textHeader: {
    fontSize: vs(13),
    color: "rgba(0, 0, 0, 0.4)",
  },
  inputText: {
    borderColor: "#000",
    borderWidth: 0.1,
    width: s(230),
    borderRadius: 8,
    marginTop: vs(15),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    paddingLeft: 15,
  },
});

export const ModalOptComp = ({ modalVisible, setModalVisible, optionList, dispatch }) => {
  const active_ = () => {
    if (optionList[0].active === true) {
        return 0
    } else if (optionList[1].active === true) {
        return 1
    } else if (optionList[2].active === true) {
        return 2
    }
  };

  const press0 = () => {
    dispatch(active(0))
    setModalVisible(false)
  }
  
  const press1 = () => {
    dispatch(active(1))
    setModalVisible(false)
  }
  
  const press2 = () => {
    dispatch(active(2))
    setModalVisible(false)
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={stylesOpt.centeredView}>
        <View style={stylesOpt.modalView}>
          <TouchableOpacity onPress={press0}>
            <View style={stylesOpt.block}>
              <Text
                style={[
                  stylesOpt.text,
                  { color: active_() === 0 ? "#42aaff" : "#000" },
                ]}
              >
                Показывать все задачи
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={press1}>
            <View style={stylesOpt.block}>
              <Text
                style={[
                  stylesOpt.text,
                  { color: active_() === 1 ? "#42aaff" : "#000" },
                ]}
              >
                Выполненные
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={press2}>
            <View style={stylesOpt.block}>
              <Text
                style={[
                  stylesOpt.text,
                  { color: active_() === 2 ? "#42aaff" : "#000" },
                ]}
              >
                Не выполненные
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const stylesOpt = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modalView: {
    margin: 0,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    paddingVertical: vs(12),
    paddingHorizontal: s(10),
  },
  block: {
    height: vs(40),
    alignItems: "center",
    justifyContent: "center",
    width: s(270),
    borderBottomColor: "#FFF",
    borderBottomWidth: 0.5,
    padding: 5,
  },
  text: {
    fontSize: vs(14),
    fontWeight: "600",
  },
});
