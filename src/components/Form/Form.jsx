import { useState } from 'react';

// import PropTypes from 'prop-types';

import Input from 'components/Input';
import css from './Form.module.css';
import TextArea from 'components/TextArea';
import Button from 'components/Button';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    new FormData(event.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );
  };

  return (
    <form className={css.form} onSubmit={handleSubmitForm} autoComplete="off">
      <Input
        disabled={false}
        type="text"
        name="name"
        value={name}
        label="Full name:"
        placeholder="John Rosie"
        onChange={handleChange}
      />
      <Input
        disabled={false}
        type="email"
        name="email"
        value={email}
        label="E-mail:"
        placeholder="johnrosie@gmail.com"
        onChange={handleChange}
      />
      <Input
        disabled={false}
        type="tel"
        name="phone"
        value={phone}
        label="Phone:"
        placeholder="380961234567"
        onChange={handleChange}
      />
      <TextArea
        disabled={false}
        name="message"
        label="Message:"
        placeholder="Your Message"
      />
      <div className={css['fit-submit']}>
        <Button type="submit" caption="Send" />
      </div>
    </form>
  );
}

// Form.propTypes = {
//   children: PropTypes.node.isRequired,
// };
