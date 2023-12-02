import { cn } from "@/lib/utils";

interface PlusProps {
  className?: string;
  height?: string;
  width?: string;
}

const Plus: React.FC<PlusProps> = ({
  className,
  height = "20",
  width = "20",
}) => {
  return (
    <svg
      className={cn(className)}
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="currentColor"
    >
      <path d="M11 19a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 1 0-2 0v6H5a1 1 0 1 0 0 2h6v6z"></path>
    </svg>
  );
};

export default Plus;
