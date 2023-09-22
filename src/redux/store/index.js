import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from '../../redux/reducers/rootReducer';

const rootStore = createStore(rootReducer, applyMiddleware(thunk));

export const store = rootStore;

