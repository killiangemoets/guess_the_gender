import { createStore } from "redux";

import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage: storageSession, // we want to store in the session storage
  // No need for a whiteList or blackList here bc we want to store everything
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
