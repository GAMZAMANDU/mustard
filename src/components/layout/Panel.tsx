import type { layoutProps } from "./layout.d";

interface PanelProps extends layoutProps {
  borderDirection?: "top" | "right" | "bottom" | "left";
}

const Panel = ({
  children,
  className = "",
  borderDirection = "bottom",
}: PanelProps) => {
  const borderClass = {
    top: "border-t",
    right: "border-r",
    bottom: "border-b",
    left: "border-l",
  }[borderDirection];

  return (
    <div
      className={`border-[#1F1F1F] bg-[#131313] ${borderClass} ${className}`}
      style={{
        borderWidth: "1px",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
};

export default Panel;
