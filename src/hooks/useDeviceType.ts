import { useEffect, useState } from "react";
import { getDeviceType } from "../helper/getDiviceType";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isLaptop: false,
    isPC: false,
    width: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDeviceType(getDeviceType(width));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};
export default useDeviceType;
