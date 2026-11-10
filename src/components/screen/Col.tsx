import { useEffect, useState, type CSSProperties } from 'react';

interface ColInterface {
  style?: CSSProperties;
  rand: number;
  str: string;
  tstr: string;
  int: number;
}

export default function Col({ style, rand, str, tstr, int }: ColInterface) {
  const [shouldShow, setShouldShow] = useState(true);
  useEffect(() => {
    if (shouldShow && rand < int / 50) {
      setShouldShow(false);
    }
  }, [rand, shouldShow, setShouldShow, int]);

  return <span style={style}>{(shouldShow && str) || tstr || ' '}</span>;
}
