import { ADD_NOTE, DELETE_NOTE, NOTE_TRUE, NOTE_FALSE, ACTIVE } from "../type";

export const addNote = infoNewNote => dispatch => {
    dispatch ({
        type: ADD_NOTE,
        payload: infoNewNote,
    })
}
export const dellNote = (id) => {
    return {
        type: DELETE_NOTE,
        payload: id,
    }
}

export const trueNote = (id) => {
    return {
        type: NOTE_TRUE,
        payload: id
    }
}

export const falseNote = (id) => {
    return {
        type: NOTE_FALSE,
        payload: id
    }
}

export const active = (id) => {
    return {
        type: ACTIVE,
        payload: id
    }
}