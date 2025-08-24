import Column from './Col.js';
import Recycle from './Rec.js';

interface RowInterface {
  key: number;
  cols: number;
  int: number;
  string: string;
  params: {
    app: { [key: string]: string };
    col: { [key: string]: string };
    row: { [key: string]: string };
    screen: { [key: string]: string };
    len: number;
    recover: boolean;
    recycle: boolean;
    reps: number;
  };
  credit: string;
  rec: null | (() => void);
}

export default function Row({
  key,
  cols,
  int,
  string,
  params,
  credit = '',
  rec,
}: RowInterface) {
  const array = [];
  const rand = Math.random();
  const num = parseInt(`${rand * 60}`, 10);
  const offset = parseInt(`${(cols - credit.length) / 2}`, 10);

  for (let i = 0; i < cols; i++) {
    let tstr = credit[i - offset];
    if (!i && rec) {
      array[i] = <Recycle recycleFunction={rec} style={params.col} />;
    } else {
      array[i] = (
        <Column
          key={i}
          int={int}
          str={string[num + (i % 10)]}
          tstr={tstr}
          style={params.col}
          rand={(rand * i) % 1}
        />
      );
    }
  }
  return (
    <div key={key} style={params.row}>
      {array}
    </div>
  );
}
