import { PERSON_ACTION_TYPES } from "./person.types";
import { AnyAction } from "redux";

export type PersonState = {
  readonly firstname: String;
  readonly lastname: String;
  readonly gender: String;
  readonly probability: String;
  readonly age: Number | null;
};

export const INITIAL_STATE: PersonState = {
  firstname: "",
  lastname: "",
  gender: "",
  probability: "",
  age: null,
};

export const personReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): PersonState => {
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
