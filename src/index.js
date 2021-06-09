import configureStore from "./store/configureStore";
import * as actions from "./store/bugs";

const store = configureStore();

store.subscribe(() => console.log("Store Updated"));

store.dispatch(actions.bugAdded({ description: "Bug 1" }));
console.log(store.getState());

store.dispatch(actions.bugAdded({ description: "Bug 2" }));
console.log(store.getState());

store.dispatch(actions.bugResolved({ id: 1 }));
console.log(store.getState());

store.dispatch(actions.bugRemoved({ id: 1 }));
console.log(store.getState());
