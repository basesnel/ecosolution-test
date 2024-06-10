import { contacts } from 'constants';
import Icon from 'components/Icon';

import css from './Contacts.module.css';

const Contacts = () => {
  const { contactList, contactItem, contactLabel, contactLinks, contactLink } =
    css;

  return (
    <ul className={contactList}>
      {contacts.map(({ id, label, links }) => (
        <li className={contactItem} key={id}>
          <span className={contactLabel}>{`${label}:`}</span>

          <div className={contactLinks}>
            {label.localeCompare('address')
              ? links.map(({ id, src, txt, icon }) => (
                  <a href={src} className={contactLink} key={id}>
                    <Icon icon={icon} />
                    {txt}
                  </a>
                ))
              : links.map(({ id, src, txt, icon }) => (
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={contactLink}
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
};

export default Contacts;
