import React from "react";

const Calendar = () => {
  const weekPrefixes = [14, 15, 16, 17, 18, 19];
  const days = [];
  const weeks = [];
  let currentWeek = [];
  for (let i = 1; i <= 30; i++) {
    days.push(i);
  }
  days.forEach((day) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }
  weeks.forEach((week, index) => {
    week.unshift(weekPrefixes[index]);
  });
  return (
    <div className="calendar">
      <p>April</p>
      <table>
        <thead>
          <tr>
            {[null, "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(
              (item, index) => (
                <th key={index}>{item}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td key={j}>{day || ""}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
