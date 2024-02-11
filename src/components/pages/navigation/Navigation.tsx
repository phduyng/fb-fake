import NavigationCenter from "./NavigationCenter";
import NavigationLeft from "./NavigationLeft";
import NavigationRight from "./NavigationRight";

const Navigation = () => {
  return (
    <div className="shadow-main-nav fixed z-50 grid h-14 w-full grid-cols-3 items-center bg-bg-secondary">
      <NavigationLeft />
      <NavigationCenter />
      <NavigationRight />
    </div>
  );
};

export default Navigation;
