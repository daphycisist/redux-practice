import * as actions from "./actionTypes.js";
export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description,
  },
});

export const resolvedBug = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});

export const bugRemoved = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id,
  },
});
