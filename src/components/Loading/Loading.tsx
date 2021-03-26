import { Circular, Linear } from "./types";

interface Props {
  type?: "circular" | "linear" | string;
  primary?: string;
  secondary?: string;
  speed?: number;
}

const Loading = ({
  type,
  primary = "#037bee",
  secondary = "#272727",
  speed,
}: Props) => {
  return type === "circular" ? (
    <Circular primary={primary} secondary={secondary} speed={speed} />
  ) : (
    <Linear primary={primary} secondary={secondary} speed={speed} />
  );
};

export default Loading;
