import NavigationCenter from "./NavigationCenter";
import NavigationLeft from "./NavigationLeft";
import NavigationRight from "./NavigationRight";

const Navigation = () => {
  return (
    <div className="bg-bg-2 fixed z-50 grid h-14 w-full grid-cols-3 items-center shadow-main-nav">
      <NavigationLeft />
      <NavigationCenter />
      <NavigationRight />
    </div>
  );
};

export default Navigation;
