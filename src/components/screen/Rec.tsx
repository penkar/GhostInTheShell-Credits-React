interface RecInterface {
  recycleFunction: () => void;
  style: { [key: string]: string };
}

export default function Recycle({ recycleFunction, style }: RecInterface) {
  return (
    <span key="rec" style={style} onClick={recycleFunction}>
      &#x02717;
    </span>
  );
}
