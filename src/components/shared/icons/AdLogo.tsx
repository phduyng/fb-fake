import { FC } from "react";

interface AdLogoProps {
  className?: string;
}

const AdLogo: FC<AdLogoProps> = ({ className }) => {
  return (
    <i
      className={className}
      data-visualcompletion="css-img"
      style={{
        backgroundImage:
          'url("https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1sOcyY3oTr-.png?_nc_eui2=AeH_ZVryi3FVWoEJTSXQY1QYj4AWILctdCaPgBYgty10Jk_Dymz-BYSmvgU4ft6IQx8wU3LWdD4SJO2FVXQ2uYI0")',
        backgroundPosition: "0px -872px",
        backgroundSize: "26px 1012px",
        width: "12px",
        height: "12px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        filter:
          "brightness(0) saturate(100%) invert(74%) sepia(7%) saturate(167%) hue-rotate(178deg) brightness(98%) contrast(88%)",
      }}
    ></i>
  );
};

export default AdLogo;
