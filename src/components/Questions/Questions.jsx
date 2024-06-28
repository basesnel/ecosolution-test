import { useState } from 'react';
import { questions } from 'constants';
import { Text, Icon } from 'components';

import css from './Questions.module.css';

const Questions = () => {
  const { qaList, qaItem, qaQuestion, open, qaAnswer, iconStyle } = css;

  const [index, setIndex] = useState(0);

  return (
    <ul className={qaList}>
      {questions.map(({ id, question, answer }) => (
        <li className={qaItem} key={id}>
          <div
            className={id === index ? `${qaQuestion} ${open}` : qaQuestion}
            onClick={() => setIndex(id)}
          >
            <Icon
              icon={id === index ? 'q-minus' : 'q-plus'}
              width={28}
              height={28}
              className={iconStyle}
            />
            <Text>{question}</Text>
          </div>
          <div className={qaAnswer}>
            <Text>{answer}</Text>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Questions;
