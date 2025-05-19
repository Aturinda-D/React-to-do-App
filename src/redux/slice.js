/**
 * This is where we'll define our reducers
 *
 * In this case, this is our todo where we'll be able to add, edit, delete, and read
 */
const date = new Date();
const initialState = [
  {
    id: Math.round(Math.random() * 1000),
    title: "Get started",
    body: "Add your first task!",
    status: "pending",
    date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
  },
];

const taskReducer = (state = { tasks: initialState }, action) => {
  // This is where we'll define our actions
  switch (action.type) {
    case "task/get":
      return state;

    case "task/add":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "task/edit":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, ...action.payload.updates }
            : task
        ),
      };

    case "task/delete":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "task/toggleStatus":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                status: task.status === "pending" ? "completed" : "pending",
              }
            : task
        ),
      };

    default:
      return state;
  }
};

export default taskReducer;
