import React, { useState, useEffect, useContext } from "react";

import { breakpoints } from "@/app.config";

const MediaQueryContext = React.createContext(null);

const MediaQueryProvider = ({ children }) => {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const sizes = Object.keys(breakpoints);
    const mediaQueryLists = {};
    const matches = {};

    sizes.forEach((size) => {
      mediaQueryLists[size] = window.matchMedia(breakpoints[size]);
      matches[size] = mediaQueryLists[size].matches;
    });

    setMatches(matches);

    const handleMatchesUpdate = () => {
      const updatedMatches = {};
      sizes.forEach(
        (size) => (updatedMatches[size] = mediaQueryLists[size].matches)
      );
      setMatches(updatedMatches);
    };

    sizes.forEach((size) => {
      mediaQueryLists[size].addListener(handleMatchesUpdate);
    });

    return () =>
      sizes.forEach((size) =>
        mediaQueryLists[size].removeListener(handleMatchesUpdate)
      );
  }, []);

  return (
    <MediaQueryContext.Provider value={matches}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export default MediaQueryProvider;

export const useMediaQuery = () => useContext(MediaQueryContext);
