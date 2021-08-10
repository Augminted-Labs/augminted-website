import { useLayoutEffect, useState } from "react";

export function useMediaQuery(...queries: string[]): boolean[] {
  const isSupported = "matchMedia" in window;

  const [matches, setMatches] = useState(
    queries.map((query) =>
      isSupported ? !!window.matchMedia(query).matches : false
    )
  );

  useLayoutEffect(() => {
    if (!isSupported) return undefined;

    const mediaQueryList = queries.map((query) => window.matchMedia(query));

    const listenerList = mediaQueryList.map((mediaQuery, index) => {
      const listener = () =>
        setMatches((prev) =>
          prev.map((prevValue, idx) =>
            index === idx ? !!mediaQuery.matches : prevValue
          )
        );

      mediaQuery.addListener(listener);

      return listener;
    });

    return () => {
      mediaQueryList.forEach((mediaQuery, index) => {
        mediaQuery.removeListener(listenerList[index]);
      });
    };
  }, [isSupported, queries]);

  return matches;
}
