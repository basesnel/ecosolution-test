import { Input, TextArea, Button } from 'components';
import { useLocalStorage } from 'hooks';

import css from './Form.module.css';

const Form = () => {
  const { form, fitSubmit } = css;

  const [name, setName] = useLocalStorage('name', '');
  const [email, setEmail] = useLocalStorage('email', '');
  const [phone, setPhone] = useLocalStorage('phone', '');
  const [message, setMessage] = useLocalStorage('message', '');

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

      case 'message':
        setMessage(value);
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
        value={message}
        label="Message:"
        placeholder="Your Message"
        onChange={handleChange}
        message={message}
      />
      <div className={fitSubmit}>
        <Button type="submit" caption="Send" />
      </div>
    </form>
  );
};

export default Form;
