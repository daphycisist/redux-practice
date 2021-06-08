// import { bugAdded, bugResolved } from "./actions";
// import store from "./store";

// store.dispatch(bugAdded("Bug1"));
// store.dispatch(bugResolved(1));

// console.log(store.getState());

import store from "./customStore.js";
import * as actions from "./actions.js";

store.subscribe(() => console.log("Store Updated"));

store.dispatch(actions.bugAdded("Bug 1"));
console.log(store.getState());

store.dispatch(actions.resolvedBug(1));
console.log(store.getState());

store.dispatch(actions.bugRemoved(1));
console.log(store.getState());
