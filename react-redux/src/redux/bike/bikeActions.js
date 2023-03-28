import { BUY_BIKE } from "./bikeTypes";

export const buyBike = (number = 1) => {
  return {
    type: BUY_BIKE,
    payload: number,
  };
};
