import { BUY_CAR } from "./carTypes";

export const buyCar = (number = 1) => {
  return {
    type: BUY_CAR,
    payload: number,
  };
};
