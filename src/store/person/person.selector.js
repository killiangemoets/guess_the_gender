// import { createSelector } from "reselect";

// const selectPersonReducer = (state) => state.person;

// export const selectPersonInfos = createSelector(
//   [selectPersonReducer],
//   (person) => person
// );

export const selectPersonInfos = (state) => state.person;
