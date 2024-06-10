import { useState } from 'react';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';

import css from './Form.module.css';

const Form = () => {
  const { form, fitSubmit } = css;

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
    <form className={form} onSubmit={handleSubmitForm}>
      <Input
        disabled={false}
        type="text"
        name="name"
        value={name}
        label="Full name:"
        placeholder="John Rosie"
        onChange={handleChange}
        autocomplete="off"
      />
      <Input
        disabled={false}
        type="email"
        name="email"
        value={email}
        label="E-mail:"
        placeholder="johnrosie@gmail.com"
        onChange={handleChange}
        autocomplete="off"
      />
      <Input
        disabled={false}
        type="tel"
        name="phone"
        value={phone}
        label="Phone:"
        placeholder="380961234567"
        onChange={handleChange}
        autocomplete="off"
      />
      <TextArea
        disabled={false}
        name="message"
        label="Message:"
        placeholder="Your Message"
      />
      <div className={fitSubmit}>
        <Button type="submit" caption="Send" />
      </div>
    </form>
  );
};

export default Form;
