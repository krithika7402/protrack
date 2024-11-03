/* eslint-disable react/prop-types */
import chart from "../../assets/bar.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./WeeklyOverview.css";
import arrow from "../../assets/arrow.svg";
import book from "../../assets/book.svg";
import { useState } from "react";

const CustomTooltip = ({ active, payload, chartType, coordinate }) => {
  // Return null if not active, no payload, or no chartType (means not hovering on a dot)
  if (!active || !payload || !payload.length || !chartType) return null;

  const value = payload.find((p) => p.dataKey === chartType)?.value;
  const backgroundColor = chartType === "line1" ? "#FF69B4" : "#87CEEB";
  const isTopLine = chartType === "line1";

  return (
    <div
      className="custom-tooltip"
      style={{
        background: backgroundColor,
        padding: "4px 16px",
        borderRadius: "8px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        position: "absolute",
        left: coordinate?.x || 0,
        top: (isTopLine ? coordinate?.y - 40 : coordinate?.y + 20) || 0,
        transform: "translateX(-50%)",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          color: "white",
          fontWeight: 700,
          fontSize: "12px",
          textAlign: "center",
        }}
      >
        {value}
      </div>
      {isTopLine && (
        <div
          style={{
            position: "absolute",
            bottom: "-6px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: `6px solid ${backgroundColor}`,
          }}
        />
      )}
      {!isTopLine && (
        <div
          style={{
            position: "absolute",
            top: "-6px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderBottom: `6px solid ${backgroundColor}`,
          }}
        />
      )}
    </div>
  );
};

const WeeklyOverview = () => {
  const [activeLineType, setActiveLineType] = useState(null);
  const [activeCoordinate, setActiveCoordinate] = useState(null);

  const data = [
    { name: "Mon", line1: 30, line2: 20 },
    { name: "Tues", line1: 25, line2: 15 },
    { name: "Wed", line1: 35, line2: 25 },
    { name: "Thurs", line1: 20, line2: 15 },
    { name: "Fri", line1: 30, line2: 20 },
    { name: "Sat", line1: 35, line2: 25 },
  ];

  return (
    <>
      <div className="weekly-overview-container">
        <div className="header-section">
          <h3>Weekly Overview</h3>
          <button className="chart-button">
            <img src={chart} alt="chart" />
          </button>
        </div>
        <div className="content-wrapper">
          <div className="stats-section">
            <div className="number-stats">
              <h2>20</h2>
              <span className="percentage-increase">
                <img src={arrow} alt="triangle" />
                +2.45%
              </span>
            </div>
            <span className="stats-label">Tasks Completed</span>

            <div className="status">
              <div className="status-icon">✓</div>
              <span className="status-text">On track</span>
            </div>

            <button className="open-tasks-button">
              <img src={book} alt="book" />
              <span>OPEN TASKS</span>
            </button>
          </div>

          <div className="chart-section">
            <ResponsiveContainer width="100%" height={180}>
              <LineChart
                data={data}
                margin={{
                  left: 5,
                  right: 5,
                  top: 5,
                  bottom: 15,
                }}
                onMouseMove={(e) => {
                  if (!e?.activePayload) {
                    setActiveLineType(null);
                    setActiveCoordinate(null);
                  }
                }}
                onMouseLeave={() => {
                  setActiveLineType(null);
                  setActiveCoordinate(null);
                }}
              >
                <CartesianGrid
                  vertical={false}
                  horizontal={true}
                  stroke="#F5F5F5"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  stroke="#787486"
                  fontSize={10}
                  padding={{ left: 10, right: 10 }}
                  dy={10}
                />
                <YAxis hide={true} />
                <Tooltip
                  content={
                    <CustomTooltip
                      chartType={activeLineType}
                      coordinate={activeCoordinate}
                    />
                  }
                  cursor={false}
                />

                <Line
                  type="monotone"
                  dataKey="line1"
                  stroke="#FF69B4"
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive={false}
                  activeDot={{
                    r: 5, 
                    fill: "white",
                    stroke: "#FF69B4",
                    strokeWidth: 2,
                    onMouseOver: (props) => {
                      setActiveLineType("line1");
                      setActiveCoordinate({ x: props.cx, y: props.cy });
                    },
                    onMouseLeave: () => {
                      setActiveLineType(null);
                      setActiveCoordinate(null);
                    },
                  }}
                  style={{
                    filter:
                      activeLineType === "line1"
                        ? "drop-shadow(0 6px 6px rgba(255, 105, 180, 0.4))"
                        : "none",
                    transition: "filter 0.3s ease",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="line2"
                  stroke="#87CEEB"
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive={false}
                  activeDot={{
                    r: 5,
                    fill: "white",
                    stroke: "#87CEEB", 
                    strokeWidth: 2,
                    onMouseOver: (props) => {
                      setActiveLineType("line2");
                      setActiveCoordinate({ x: props.cx, y: props.cy });
                    },
                    onMouseLeave: () => {
                      setActiveLineType(null);
                      setActiveCoordinate(null);
                    },
                  }}
                  style={{
                    filter:
                      activeLineType === "line2"
                        ? "drop-shadow(0 4px 6px rgba(135, 206, 235, 0.6))"
                        : "none",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default WeeklyOverview;
