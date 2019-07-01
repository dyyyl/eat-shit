import React, { useEffect, useState } from 'react';

import getTime from 'shared/helpers/getTime';

const Time = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setTime(getTime());
  }, []);

  return (
    <span style={{ fontFamily: 'Courier New', marginRight: '5rem' }}>
      <b style={{ fontSize: '1.05rem' }}>
        <time dateTime={new Date()}>{time}</time> Berlin
      </b>
    </span>
  );
};

export default Time;
