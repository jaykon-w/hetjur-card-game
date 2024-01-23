import React, { ReactNode } from "react";
import "./styles.css";
import { LevelValue } from "../LevelValue";

interface StatisticProps {
  direction?: "column" | "row";
  align?: "start" | "end";
  text?: string;
  icon?: ReactNode;
  progression: [number, number, number, number];
}

export const Statistic: React.FC<StatisticProps> = ({
  icon,
  align = "start",
  direction = "column",
  text = "",
  progression,
}) => {
  return (
    <div className={`statistic direction-${direction} align-${align}`}>
      {text ? <div className="statistic-title">{text}</div> : <></>}
      {icon ?? <></>}
      <div className="progression">
        {progression.map((e, i) => (
          <LevelValue level={i + 1} key={`level-${i + 1}`}>
            {e}
          </LevelValue>
        ))}
      </div>
    </div>
  );
};
