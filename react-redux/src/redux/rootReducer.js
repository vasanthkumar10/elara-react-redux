import { combineReducers } from "redux";
import { carReducer } from "./car/carReducer";
import { bikeReducer } from "./bike/bikeReducer";

export const rootReducer = combineReducers({
  car: carReducer,
  bike: bikeReducer,
});
