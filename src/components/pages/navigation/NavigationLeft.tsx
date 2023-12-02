import Logo from "@/components/shared/svgs/Logo";
import Search from "@/components/shared/svgs/Search";
import { cn } from "@/lib/utils";

interface NavigationLeftProps {
  className?: string;
}

const NavigationLeft: React.FC<NavigationLeftProps> = ({ className }) => {
  return (
    <div className={cn("flex-start ml-4 h-full space-x-2", className)}>
      <Logo height={40} width={40} />
      <div className="1260:search-lg search-sm">
        <Search height="20" width="20" />
        <div className="hidden 1260:block">Search Facebook</div>
      </div>
    </div>
  );
};

export default NavigationLeft;
