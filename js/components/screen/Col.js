import React, { useEffect, useState } from 'react';
import { shape, string, number } from 'prop-types';

export default function Col ({ style, rand, str, tstr, int}) {
  const [ shouldShow, setShouldShow ] = useState(true);
  useEffect(()=> {
    if( shouldShow && (rand < ( int/ 50)) ) {
      setShouldShow(false);
    }
  }, [rand, shouldShow, setShouldShow, int]);
  
  return <span style={style}>{shouldShow && str || tstr || ' '}</span>;
}

Col.propTypes = {
  style: shape({
    [string]: string
  }),
  rand: number,
  str: string,
  tstr: string,
  int: number,
}