import { combineReducers } from "redux";
import { carReducer } from "./car/carReducer";
import { bikeReducer } from "./bike/bikeReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  car: carReducer,
  bike: bikeReducer,
  users: userReducer,
});
