import type { CSSProperties, MouseEventHandler } from 'react';

interface RecycleProps {
  recycleFunction: MouseEventHandler<HTMLSpanElement>;
  style?: CSSProperties;
}

const Recycle = ({ recycleFunction, style }: RecycleProps) => {
  return (
    <span key="rec" style={style} onClick={recycleFunction}>
      &#x02717;
    </span>
  );
};

export default Recycle;
