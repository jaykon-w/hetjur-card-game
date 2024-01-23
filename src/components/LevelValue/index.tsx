import React, { ReactNode } from "react";
import "./styles.css";

interface LevelValueProps {
  level: number;
  children: ReactNode;
}

export const LevelValue: React.FC<LevelValueProps> = ({ level, children }) => {
  return <div className={`level level-${level}`}>{children}</div>;
};
