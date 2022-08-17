import { combineReducers } from "redux";

import { personReducer } from "./person/person.reducer";

export const rootReducer = combineReducers({
  person: personReducer,
});
