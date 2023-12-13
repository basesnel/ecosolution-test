import Icon from 'components/Icon';
import { contacts } from 'constants';

import css from './Contacts.module.css';

export default function Contacts() {
  return (
    <ul className={css['contact-list']}>
      {contacts.map(({ id, label, links }) => (
        <li className={css['contact-item']} key={id}>
          <span className={css['contact-label']}>{`${label}:`}</span>

          <div className={css['contact-links']}>
            {label.localeCompare('address')
              ? links.map(({ id, src, txt, icon }) => (
                  <a href={src} className={css['contact-link']} key={id}>
                    <Icon icon={icon} />
                    {txt}
                  </a>
                ))
              : links.map(({ id, src, txt, icon }) => (
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={css['contact-link']}
                    key={id}
                  >
                    <Icon icon={icon} />
                    {txt}
                  </a>
                ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
