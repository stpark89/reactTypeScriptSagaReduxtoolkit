import { reducer as thunkReducer, IThunkStates } from "./thunk/reducer";
import { combineReducers } from "redux";
import { reducer as sampleReducer, ISampleState } from "./sample/reducer";
import { reducer as userReducer, IUserState } from "./user/reducer";

export type RootState = {
  sample: ISampleState;
  thunk: IThunkStates;
  user: IUserState;
};

const rootReducer = combineReducers<RootState>({
  sample: sampleReducer,
  thunk: thunkReducer,
  user: userReducer,
});

export default rootReducer;
