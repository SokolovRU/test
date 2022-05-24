import { ADD_NOTE, DELETE_NOTE, NOTE_TRUE, NOTE_FALSE, ACTIVE } from "../type";

const initalState = {
  note: [
    { id: 0, name: "Математика", info: "Стр. 4, упр. 36, б.", status: false },
    {
      id: 1,
      name: "Русский язык",
      info: "Учебник, стр. 4, упр. 36 а, б.",
      status: true,
    },
    {
      id: 2,
      name: "ИЗЛ",
      info: "Подготовить клей, ножницы, вл. салфетки, цветную бумагу, ножницы, шерстняые нитки",
      status: false,
    },
    {
      id: 3,
      name: "Литература",
      info: "Учебник, стр. 4, упр. 36 а, б.",
      status: true,
    },
  ],
  active: 0,
};

export const noteReduser = (state = initalState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const obj = {
        id: state.note.length + 1,
        name: action.payload.name,
        info: action.payload.info,
        status: false,
      };
      return {
        ...state,
        note: [obj, ...state.note],
      };
    case DELETE_NOTE:
      return {
        ...state,
        note: state.note.filter((n) => n.id !== action.payload),
      };
    case NOTE_TRUE:
        console.log('yes')
      const fav_add_note = state.note.map((n) => {
        if (n.id === action.payload) {
          n.id = n.id;
          n.name = n.name;
          n.info = n.info;
          n.status = true;
        }
        return n;
      });
      return {
        ...state,
        note: fav_add_note,
      };
    case NOTE_FALSE:
      const fav_dell_note = state.note.map((n) => {
        if (n.id === action.payload) {
            n.id = n.id;
            n.name = n.name;
            n.info = n.info;
            n.status = false;
        }
        return n;
      });
      return {
        ...state,
        note: fav_dell_note,
      };
      case ACTIVE:
          return {
              ...state,
              active:action.payload
          }
    default:
      return state;
  }
};
