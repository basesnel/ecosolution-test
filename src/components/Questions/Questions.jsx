import { useState } from 'react';

import Text from 'components/Text';

import { questions } from 'constants';

import css from './Questions.module.css';
import Icon from 'components/Icon';

export default function Questions() {
  const [index, setIndex] = useState(0);

  return (
    <ul className={css['q-list']}>
      {questions.map(({ id, question, answer }) => (
        <li className={css['q-item']} key={id}>
          <div
            className={
              id === index ? `${css.question} ${css.open}` : css.question
            }
            onClick={() => setIndex(id)}
          >
            {id === index ? <Icon icon="q-minus" /> : <Icon icon="q-plus" />}
            <Text>{question}</Text>
          </div>
          <div className={css.answer}>
            <Text>{answer}</Text>
          </div>
        </li>
      ))}
    </ul>
  );
}
