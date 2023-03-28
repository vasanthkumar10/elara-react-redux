import CarContainer from "./components/CarContainer";
import { CarHooksContainer } from "./components/CarHooksContainer";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CarContainer /> */}
        <CarHooksContainer />
      </div>
    </Provider>
  );
}

export default App;
