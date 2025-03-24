import { useEffect } from "react";

export const useLockBodyScrool = (useLock = true) => {
  useEffect(() => {
    if (useLock) {
      const { overflow: initialOverflow, paddingRight: initialPaddingRight } =
        window.getComputedStyle(document.body);

      const navbar = document.querySelector("nav");

      const scrollbarWidth = window.innerWidth - document.body.clientWidth;

      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        const paddingRight = scrollbarWidth + "px";
        document.body.style.paddingRight = paddingRight;
        if (navbar) {
          navbar.style.paddingRight = paddingRight;
        }
      }

      return () => {
        document.body.style.overflow = initialOverflow;
        if (scrollbarWidth > 0) {
          document.body.style.paddingRight = initialPaddingRight;
          if (navbar) {
            navbar.style.paddingRight = 0;
          }
        }
      };
    }
  }, [useLock]);
};
