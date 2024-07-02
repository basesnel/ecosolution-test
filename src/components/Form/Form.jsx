// import * as yup from 'yup';
import { useFormik } from 'formik';
import { useLocalStorage } from 'hooks';
import { Input, TextArea, Button } from 'components';
// import { nameRegexp, phoneRegexp, emailRegexp } from 'constants';

import css from './Form.module.css';

// const validationSchema = yup.object().shape({
//   name: yup
//     .string()
//     .min(2, 'Name showld be of minimum 3 characters length')
//     .max(50, 'Too long')
//     .required('Name is required'),
//   email: yup.string().email().required('Email is required'),
//   phone: yup.string().min(10, 'Too short').required('Phone is required'),
// });

// const validationSchema = yup.object().shape({
//   name: yup
//     .string()
//     .matches(nameRegexp, 'Name showld be of minimum 3 characters length')
//     .required('Name is required'),
//   email: yup
//     .string()
//     .matches(emailRegexp, 'Enter a valid email')
//     .required('Email is required'),
//   phone: yup
//     .string()
//     .matches(phoneRegexp, 'Enter a valid phone')
//     .required('Phone is required'),
// });

const Form = () => {
  const { form, fitSubmit } = css;

  const name = useLocalStorage('name', '')[0];
  const email = useLocalStorage('email', '')[0];
  const phone = useLocalStorage('phone', '')[0];
  const [message, setMessage] = useLocalStorage('message', '');

  const formik = useFormik({
    initialValues: {
      name: name,
      email: email,
      phone: phone,
    },
    // validationSchema: { validationSchema },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      // case 'name':
      //   setName(value);
      //   break;

      // case 'email':
      //   setEmail(value);
      //   break;

      // case 'phone':
      //   setPhone(value);
      //   break;

      case 'message':
        setMessage(value);
        break;

      default:
        return;
    }
  };

  // const handleSubmitForm = event => {
  //   event.preventDefault();

  //   new FormData(event.currentTarget).forEach((value, name) =>
  //     console.log(`${name}: ${value}`)
  //   );
  // };

  return (
    <form className={form} onSubmit={formik.handleSubmit}>
      <Input
        disabled={false}
        type="text"
        name="name"
        value={formik.values.name}
        label="Full name:"
        placeholder="John Rosie"
        onChange={formik.handleChange}
        autocomplete="off"
      />
      <Input
        disabled={false}
        type="email"
        name="email"
        value={formik.values.email}
        label="E-mail:"
        placeholder="johnrosie@gmail.com"
        onChange={formik.handleChange}
        autocomplete="off"
      />
      <Input
        disabled={false}
        type="tel"
        name="phone"
        value={formik.values.phone}
        label="Phone:"
        placeholder="380961234567"
        onChange={formik.handleChange}
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
