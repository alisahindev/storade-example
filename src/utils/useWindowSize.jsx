import React, { useCallback, useEffect, useState } from "react";

const useWindowSize = (
  withResizeListener = true,
  callback = null,
  dependencies = []
) => {
  const isClient = typeof window === "object";

  const getSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  };

  const [windowSize, setWindowSize] = useState(getSize);

  const handleResize = useCallback(() => {
    setWindowSize(getSize());
    if (callback) {
      callback(windowSize);
    }
  }, []);

  if (withResizeListener) {
    useEffect(() => {
      if (!isClient) {
        return;
      }

      window.addEventListener("resize", handleResize);
      window.addEventListener("orientationchange", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("orientationchange", handleResize);
      };
    }, dependencies); // Empty array ensures that effect is only run on mount and unmount
  }

  return windowSize;
};

export default useWindowSize;
