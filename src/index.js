import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";

const store = configureStore();

store.subscribe(() => console.log("Store Updated"));

store.dispatch(actions.bugAdded("Bug 1"));
console.log(store.getState());

store.dispatch(actions.bugAdded("Bug 2"));
console.log(store.getState());

store.dispatch(actions.resolvedBug(1));
console.log(store.getState());

store.dispatch(actions.bugRemoved(1));
console.log(store.getState());
