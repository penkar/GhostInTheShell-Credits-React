import type { CSSProperties, MouseEventHandler } from 'react';

interface RecycleProps {
  recycleFunction: MouseEventHandler<HTMLSpanElement>;
  style?: CSSProperties;
}

export default function Recycle({ recycleFunction, style }: RecycleProps) {
  return (
    <span key="rec" style={style} onClick={recycleFunction}>
      &#x02717;
    </span>
  );
}
