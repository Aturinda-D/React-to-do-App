import React from "react";

const TaskAction = ({ icon, ...props }) => {
  return (
    <button className="task-action" {...props}>
      {icon}
    </button>
  );
};

export default TaskAction;
