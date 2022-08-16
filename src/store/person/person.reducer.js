import { PERSON_ACTION_TYPES } from "./person.types";

export const INITIAL_STATE = {
  firstname: "",
  lastname: "",
  gender: "",
  probability: "",
  age: "",
};

export const personReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case PERSON_ACTION_TYPES.UPDATE_PERSON_INFOS:
      return { ...state, ...payload };
    case PERSON_ACTION_TYPES.CLEAR_PERSON_INFOS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
