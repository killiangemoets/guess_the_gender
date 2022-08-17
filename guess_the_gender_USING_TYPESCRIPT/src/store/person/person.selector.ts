import { PersonState } from "./person.reducer";
import { RootState } from "../store";

export const selectPersonInfos = (state: RootState): PersonState =>
  state.person;
