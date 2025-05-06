import type { flexibleComponentProps } from "./layout/layout";

interface TextProps extends flexibleComponentProps {
  text: string;
  color?: "primary" | "white" | "gray";
  size?: "sm" | "md" | "lg";
  weight?: "normal" | "bold";
}

/**
 * Text component
 * @param {string} text - The text to display
 * @param {string} color - The color of the text
 * @param {string} size - The size of the text
 * @param {string} weight - The weight of the text
 */
const Text = ({
  text,
  color = "primary",
  size = "md",
  weight = "normal",
  className,
}: TextProps) => {
  const styles = {
    color: {
      primary: "#3ECF8E",
      white: "#E6E8EB",
      gray: "#ADADAD",
    }[color],
    fontSize: {
      sm: "0.75rem",
      md: "0.875rem",
      lg: "1rem",
    }[size],
    fontWeight: {
      normal: "400",
      bold: "700",
    }[weight],
  };

  return (
    <p className={`m-[0px] p-[0px] ${className || ""}`} style={styles}>
      {text}
    </p>
  );
};

export default Text;
