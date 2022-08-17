import { PERSON_ACTION_TYPES } from "./person.types";

type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

type Action<T> = {
  type: T;
};

export type NewInfos = {
  firstname?: String;
  lastname?: String;
  gender?: String;
  probability?: String;
  age?: Number | null;
};

export type UpdatePersonInfos = ActionWithPayload<
  PERSON_ACTION_TYPES.UPDATE_PERSON_INFOS,
  NewInfos
>;

export type ClearPersonInfos = Action<PERSON_ACTION_TYPES.CLEAR_PERSON_INFOS>;

export const updatePersonInfos = (newInfos: NewInfos): UpdatePersonInfos => {
  return { type: PERSON_ACTION_TYPES.UPDATE_PERSON_INFOS, payload: newInfos };
};

export const clearPersonInfos = (): ClearPersonInfos => {
  return { type: PERSON_ACTION_TYPES.CLEAR_PERSON_INFOS };
};
