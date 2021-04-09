import { createStore, compose, CombinedState } from "redux";
import reducers from "./reducers";

const saveToLocalStorage = (
  state: CombinedState<{ user: { data: any; auth: boolean } }>
) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    if (localStorage.getItem("state") === null) {
      return undefined;
    }
    return JSON.parse(localStorage.getItem("state") as string);
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, loadFromLocalStorage(), composeEnhancers());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
