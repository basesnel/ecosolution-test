import { contacts } from 'constants';
import { Icon, Link } from 'components';

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
            {links.map(({ id, src, txt, ariaLabel, icon }) => (
              <Link
                key={id}
                src={src}
                txt={txt}
                ariaLabel={ariaLabel}
                className={contactLink}
              >
                <Icon icon={icon} />
                {txt}
              </Link>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
