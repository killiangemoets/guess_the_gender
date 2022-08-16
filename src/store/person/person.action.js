import { PERSON_ACTION_TYPES } from "./person.types";

export const updatePersonInfos = (newInfos) => {
  return { type: PERSON_ACTION_TYPES.UPDATE_PERSON_INFOS, payload: newInfos };
};

export const clearPersonInfos = () => {
  return { type: PERSON_ACTION_TYPES.CLEAR_PERSON_INFOS };
};
