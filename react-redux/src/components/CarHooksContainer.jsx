import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCar } from "../redux/car/carActions";

export function CarHooksContainer() {
  const numOfCars = useSelector((state) => state.car.numOfCars);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No of cars - {numOfCars}</h2>
      <button onClick={() => dispatch(buyCar(2))}>Buy car</button>
    </div>
  );
}
