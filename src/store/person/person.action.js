import { PERSON_ACTION_TYPES } from "./person.types";

const createAction = (type, payload) => ({ type, payload });

export const updatePersonInfos = (newInfos) =>
  createAction(PERSON_ACTION_TYPES.UPDATE_PERSON_INFOS, newInfos);

export const clearPersonInfos = () =>
  createAction(PERSON_ACTION_TYPES.CLEAR_PERSON_INFOS);
