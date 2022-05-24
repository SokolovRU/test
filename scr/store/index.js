import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { noteReduser } from './reducers/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['note']
};

const rootReducer = combineReducers({
    noteReduser: persistReducer(persistConfig, noteReduser)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);