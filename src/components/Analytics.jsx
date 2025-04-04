import React from "react";

const Analytics = ({ created, completed, pending, ...props }) => {
  return (
    <div className="analytics">
      <div className="completed">
        <h3>completed tasks</h3>
        <h1>{completed}</h1>
      </div>
      <div className="pending">
        <h3>pending tasks</h3>
        <h1>{pending}</h1>
      </div>
      <div className="created-active">
        <div className="created">
          <h3>Tasks created</h3>
          <h1>{created}</h1>
        </div>
        <div className="active">
          <h3>
            <span>25k+</span> active users
          </h3>
          <div>
            <img src="/assets/active_1.jpeg" alt="ap_1" />
            <img src="/assets/active_2.jpeg" alt="ap_2" />
            <img src="/assets/active_3.jpeg" alt="ap_3" />
            <img src="/assets/active_4.jpeg" alt="ap_4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
