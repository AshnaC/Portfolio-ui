import { fromJS } from "immutable";

export class ReducerRegistry {
  constructor() {
    this._emitChange = null;
    this._reducers = { route: routeReducer };
  }

  getReducers() {
    return { ...this._reducers };
  }

  register(name, reducer) {
    this._reducers = { ...this._reducers, [name]: reducer };
    if (this._emitChange) {
      this._emitChange(this.getReducers());
    }
  }

  setChangeListener(listener) {
    this._emitChange = listener;
  }
}

const reducerRegistry = new ReducerRegistry();
export default reducerRegistry;

function routeReducer(state = fromJS({})) {
  return state;
}
