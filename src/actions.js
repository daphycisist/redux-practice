import * as actions from "./actionTypes";

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
