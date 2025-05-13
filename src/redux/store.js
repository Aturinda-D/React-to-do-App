/**
 * Redux is a library used to manage state globally in a react application
 *      - The store is a celtralized internal "database" that manages state.
 *
 * Why use redux?
 *      - Centralized state management
 *      - Predicatability of state: reducers(state managers) are pure functions
 *              -> A pure function is one which does not modify any varibales outside its scope, thus always returns the same output given the same input
 *      - Easy debugging
 *      - Scalability
 *
 * Key Terms:
 *      - Actions: a js object that has the type attribute
 *          >>> eg  {
 *                  type: string,
 *                  payload: any[optional]
 *                  }
 *      - Reducers: functions that take in the state and actions, update the sate and return the new state
 *      - Dispatch: methods that update state: (call the reducer)
 *      - store: an object that contains the current state.
 *      - selectors: methods that retrieve state data from the store
 */

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slice";

const store = configureStore({
  reducer: {
    // define our reducers
    tasks: taskReducer,
  },
});

export default store;
