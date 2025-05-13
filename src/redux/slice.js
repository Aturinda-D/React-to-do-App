/**
 * This is where we'll define our reducers
 *
 * In this case, this is our todo where we'll be able to add, edit, delete, and read
 */
const initialState = {
  title: "Task 1",
  body: "This is your first task",
  id: Math.floor(Math.random() * 10000),
  state: "pending",
};

const taskReducer = (state = initialState, action) => {
  // Check if state exists
  if (action.type === "task/get") {
    return state;
  } else if (action.type === "task/add") {
    // Create a copy
    return [
      ...state,
      {
        title: "some task",
        body: "This is yet another task",
        id: Math.floor(Math.random() * 10000),
        state: "pending",
      },
    ];
  }
  return state;
};

export default taskReducer;
