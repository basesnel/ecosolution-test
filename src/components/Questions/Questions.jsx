import { useState } from 'react';

import icons from '../../assets/images/icons.svg';

import Text from 'components/Text';

import { questions } from 'constants';

import css from './Questions.module.css';

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
            {id === index ? (
              <svg className={css['icon-minus']}>
                <use href={`${icons}#q-minus`}></use>
              </svg>
            ) : (
              <svg className={css['icon-plus']}>
                <use href={`${icons}#q-plus`}></use>
              </svg>
            )}
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
