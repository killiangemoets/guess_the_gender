import { createStore } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage: storageSession, // we want to store in the session storage
  // No need of a whiteList or blackList here bc we want to store everything
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
