// import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

import css from './Counter.module.css';

export default function Counter() {
  const [count, setCount] = useState(999990);

  useEffect(() => {
    const intervalId = setInterval(() => setCount(c => c + 1), 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function countWithSeparator(num) {
    if (num < 1000) return num;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return (
    <>
      <span className={css.counter}>{countWithSeparator(count)}</span>
      {'kWh'}
    </>
  );
}

// Counter.propTypes = {
//   count: PropTypes.number.isRequired,
// };
