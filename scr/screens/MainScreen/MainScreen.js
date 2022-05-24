import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderComp } from "./HeaderComp";
import { ListComp } from "./ListComp";
import { ButtonComp } from "./ButtonComp";
import { ModalAddComp, ModalOptComp } from "./ModalComp";
import { useDispatch, useSelector } from "react-redux";

export const MainScreen = () => {
  const MyState = useSelector((state) => state.noteReduser);
  const dispatch = useDispatch();
  console.log(MyState.note);
  const Data = MyState.note;
  const active = MyState.active

  /* ДЛЯ МОДАЛЬНОГО ОКНА */
  const [headingText, setHeadingText] = useState(""); // ДЛЯ ЗАГОЛОВКА
  const [taskText, setTaskText] = useState(""); // ДЛЯ ЗАДАНИЯ
  /* НАСТРОЙКА */
  const optionList = [
    {
      id: 0,
      headerText: "Показывать все задания",
      data: Data,
      active: true,
    },
    {
      id: 1,
      headerText: "Выполненные",
      data: Data.filter((item) => item.status && item),
      active: false,
    },
    {
      id: 2,
      headerText: "Не выполненные",
      data: Data.filter((item) => !item.status && item),
      active: false,
    },
  ];
  if (active === 0) {
    optionList[0].active = true;
    optionList[1].active = false;
    optionList[2].active = false;
  } else if (active === 1) {
    optionList[0].active = false;
    optionList[1].active = true;
    optionList[2].active = false;
  } else if (active === 2) {
    optionList[0].active = false;
    optionList[1].active = false;
    optionList[2].active = true;
  }
  /* АКТУАЛЬНЫЙ  */
  const [modalAdd, setModalAdd] = useState(false);
  const [modalOpt, setModalOpt] = useState(false);

  return (
    <SafeAreaView>
      <HeaderComp
        headerText={optionList.map((item) => item.active && item.headerText)}
        setModalOpt={setModalOpt}
      />
      <ListComp
        data={optionList.filter((item) => item.active && item.data)}
        dispatch={dispatch}
      />
      <ButtonComp setModalAdd={setModalAdd} />
      <ModalAddComp
        modalVisible={modalAdd}
        setModalVisible={setModalAdd}
        headingText={headingText}
        setHeadingText={setHeadingText}
        taskText={taskText}
        setTaskText={setTaskText}
        dispatch={dispatch}
      />
      <ModalOptComp
        modalVisible={modalOpt}
        setModalVisible={setModalOpt}
        optionList={optionList}
        dispatch={dispatch}
      />
    </SafeAreaView>
  );
};
