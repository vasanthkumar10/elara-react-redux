import React from "react";
import { connect } from "react-redux";
import { buyCar } from "../redux/car/carActions";

function CarContainer(props) {
  return (
    <div>
      <h2>No of cars - {props.numOfCars}</h2>
      <button onClick={props.buyCar}>Buy car</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCars: state.car.numOfCars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCar: () => dispatch(buyCar(5)),
  };
};

export default connect(mapDispatchToProps, mapStateToProps)(CarContainer);
