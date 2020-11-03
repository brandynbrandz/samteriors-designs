import { useState, useEffect } from "react";

const useCurrentWidth = () => {
  let [width, setWidth] = useState(window.outerWidth);

  useEffect(() => {
    const resizeListener = () => setWidth(window.outerWidth);
    window.addEventListener("resize", resizeListener);

    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  return width;
};

export default useCurrentWidth;
