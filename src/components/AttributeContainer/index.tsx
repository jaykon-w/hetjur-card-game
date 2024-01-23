import React, { ReactNode } from "react";
import "./styles.css";

interface AttributeContainerProps {
  color: "green" | "purple";
  children: ReactNode;
}

export const AttributeContainer: React.FC<AttributeContainerProps> = ({
  color,
  children,
}) => {
  return <div className={`attribute-container color-${color}`}>{children}</div>;
};
