import { contacts } from 'constants';
import { Icon } from 'components';

import css from './Contacts.module.css';

const Contacts = () => {
  const { contactList, contactItem, contactLabel, contactLinks, contactLink } =
    css;

  const isLinkExternal = par => {
    const parNormalize = par.toLowerCase();
    return !(parNormalize.includes('tel') || parNormalize.includes('mailto'));
  };

  return (
    <ul className={contactList}>
      {contacts.map(({ id, label, links }) => (
        <li className={contactItem} key={id}>
          <span className={contactLabel}>{`${label}:`}</span>

          <div className={contactLinks}>
            {links.map(({ id, src, txt, icon }) => (
              <a
                href={src}
                {...(isLinkExternal(src) && {
                  target: '_blank',
                  rel: 'noopener noreferrer nofollow',
                })}
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
