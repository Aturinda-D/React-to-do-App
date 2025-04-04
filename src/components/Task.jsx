import React from "react";
import { FaEdit, FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import TaskAction from "./TaskAction";
import { RiDeleteBin6Line } from "react-icons/ri";

const Task = ({ onClickCheck, onClickEdit, ...props }) => {
  return (
    <div className="task">
      <div className="task-info">
        <h4>{props.title}</h4>
        <p>{props.body}</p>
        <h5>
          Start date: <span>{props.date}</span>
        </h5>
      </div>
      <div className="actions">
        <TaskAction
          icon={
            props.status === "pending" ? (
              <FaRegCheckCircle />
            ) : (
              <FaCheckCircle />
            )
          }
          onClick={onClickCheck}
        />
        <TaskAction icon={<FaEdit />} onClick={onClickEdit} />
        <TaskAction icon={<RiDeleteBin6Line />} />
      </div>
    </div>
  );
};

export default Task;
