import { contacts } from 'constants';
import { Icon, Link } from 'components';

import styles from './styles.module.css';

const Contacts = () => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, label, links }) => (
        <li className={styles.item} key={id}>
          <span className={styles.label}>{`${label}:`}</span>

          <div className={styles.links}>
            {links.map(({ id, src, txt, ariaLabel, icon }) => (
              <Link
                key={id}
                src={src}
                txt={txt}
                ariaLabel={ariaLabel}
                className={styles.link}
              >
                <Icon
                  icon={icon}
                  width={24}
                  height={24}
                  className={styles.icon}
                />
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
