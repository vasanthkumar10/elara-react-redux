import CarContainer from "./components/CarContainer";
import { CarHooksContainer } from "./components/CarHooksContainer";
import UserContainer from "./components/UserContainer";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CarContainer /> */}
        {/* <CarHooksContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
