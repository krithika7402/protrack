// Calendar.jsx
import "./Calendar.css";
import { ChevronRight, Plus, Bold } from "lucide-react";
import tag from "../../assets/tag.svg";
import pencil from "../../assets/task-actions/pencil.svg";
import triple from "../../assets/task-actions/triple.svg";
import del from "../../assets/task-actions/delete.svg";

const Calendar = () => {
  const dates = [
    { day: 19, weekday: "Sun" },
    { day: 20, weekday: "Mon" },
    { day: 21, weekday: "Tue", isActive: true },
    { day: 22, weekday: "Wed" },
    { day: 23, weekday: "Thu" },
    { day: 24, weekday: "Sat" },
    { day: 25, weekday: "Sun" },
  ];

  const statusCards = [
    { title: "To-Do", count: "20", color: "#B2E6F84D", textColor: "#49CCF9" },
    {
      title: "In-Progress",
      count: "15",
      color: "#7B68EE1A",
      textColor: "#7B68EE",
    },
    {
      title: "Complete",
      count: "03",
      color: "#00B8841A",
      textColor: "#00B884",
    },
  ];

  const tasks = [
    {
      id: 1,
      title: "Donate Rs. 500 to the charity",
      completed: true,
      subtasks: [
        { text: "Donate Rs. 500 to the charity", completed: true },
        { text: "Donate Rs. 500 to the charity", completed: true },
      ],
      tags: [
        { text: "Donations", backgroundColor: "#FFC8001A", color: "#FFC800" },
        { text: "Social", backgroundColor: "#00B88433", color: "#00B884" },
      ],
      progress: "2/2 Completed",
    },
    {
      id: 2,
      title: "Do 500 pushups",
      completed: false,
      subtasks: [
        { text: "Start with 100", completed: true },
        { text: "Complete 250", completed: false },
        { text: "Reach 400", completed: false },
      ],
      tags: [
        { text: "Sport", backgroundColor: "#E9E7FF", color: "#7B68EE" },
        { text: "Selfcare", backgroundColor: "#FFE4EC", color: "#FD71AF" },
      ],
      progress: "1/3 Completed",
    },
    {
      id: 3,
      title: "Buy new headset",
      completed: true,
      tags: [
        { text: "Shopping", backgroundColor: "#E9E7FF", color: "#7B68EE" },
        { text: "Set-up", backgroundColor: "#DFF9E3", color: "#00B884" },
      ],
    },
    {
      id: 4,
      title: "clean the room",
      completed: false,
      tags: [
        { text: "Selfcare", backgroundColor: "#E9E7FF", color: "#7B68EE" },
      ],
    },
  ];

  return (
    <div className="calendar-container">
      {/* Calendar Header */}
      <div className="calendar-header">
        <h2>Calendar</h2>
        <button className="more-button">
          <ChevronRight size={24} color="#7978CB" strokeWidth={3} />
        </button>
      </div>

      {/* Date Slider */}
      <div className="dates-slider">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`date-card ${date.isActive ? "active" : ""}`}
          >
            <div className="date-indicator"></div>
            <span className="day">{date.day}</span>
            <span className="weekday">{date.weekday}</span>
          </div>
        ))}
      </div>

      {/* Status Cards */}
      <div className="status-cards">
        {statusCards.map((card, index) => (
          <div
            key={index}
            className="status-card"
            style={{
              backgroundColor: card.color,
              color: card.textColor,
            }}
          >
            <span className="status-title">{card.title}</span>
            <span className="status-count">{card.count}</span>
          </div>
        ))}
      </div>

      {/* Tasks Section */}
      <div className="tasks-section">
        <div className="tasks-header">
          <h3>Tasks for the day</h3>
          <div className="header-buttons">
            <button className="add-button">
              <Plus size={24} color="#49CDF9" fontWeight={Bold} />
            </button>
            <button className="more-button">
              <ChevronRight size={24} color="#7978CB" strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className="tasks-list">
          {tasks.map((task) => (
            <div key={task.id} className="task-card">
              <div className="task-content">
                <div className="task-main">
                  <div className="task-checkbox">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => {}}
                    />
                    <span className={task.completed ? "completed" : ""}>
                      {task.title}
                    </span>
                  </div>

                  <div className="task-right">
                    {task.progress && (
                      <span className="task-progress">{task.progress}</span>
                    )}
                    <div className={task.progress ? "raise-bottom task-actions" : "task-actions"}>
                      <button>
                        <img src={pencil} alt="pencil" />
                      </button>
                      <button>
                        <img src={del} alt="delete" />
                      </button>
                      <button>
                        <img src={triple} alt="triple" />
                      </button>
                    </div>
                  </div>
                </div>
                {task.subtasks && (
                  <div className="subtasks">
                    {task.subtasks.map((subtask, index) => (
                      <div key={index} className="subtask">
                        <input
                          type="checkbox"
                          checked={subtask.completed}
                          onChange={() => {}}
                        />
                        <span className={subtask.completed ? "completed" : ""}>
                          {subtask.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="task-footer">
                  <div className="task-tags">
                    <img src={tag} alt="tag" className="tag-logo" />
                    {task.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="tag"
                        style={{
                          backgroundColor: tag.backgroundColor,
                          color: tag.color,
                        }}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
