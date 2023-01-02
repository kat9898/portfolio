import {useState} from 'react';
import contactImg from '../assets/img/Pngtree—man and woman using computer_7557234.png';
import emailjs from '@emailjs/browser';

import './Contact.scss';

type Props = {}

type ValidationForm = {
  firstName?: boolean,
  lastName?: boolean,
  email?: boolean,
  phone?: boolean,
  message?: boolean
}

type Status = {
  message: string[],
  success: boolean,
  validation: ValidationForm
}

type FormDetails = {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  message: string
}

const Contact = (props: Props) => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const initialStatus = {
    message: [],
    success: true,
    validation: {
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      message: true
    }
  }
  
  const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState<string>('Send');
  const [status, setStatus] = useState<Status>(initialStatus);

  //const form = useRef(null);

  const onFormUpdate = (category: string, value: string): void => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const validateFormDetails = () => {
    console.log(formDetails);
    setStatus(initialStatus);

    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

    //first name validation
    if (formDetails.firstName.replace(/ /g,'') === '') {
      setStatus((prevStatus) => ({
        success: false,
        message: [...prevStatus.message, 'The first name is empty'], 
        validation: {...prevStatus.validation, firstName: false}
      }))
    }

    //last name validation
    if (formDetails.lastName.replace(/ /g,'') === '') {
      setStatus((prevStatus) => ({
        success: false,
        message: [...prevStatus.message, 'The last name is empty'], validation: {...prevStatus.validation, lastName: false}
      }))
    }

    //email validation
    if (formDetails.email.replace(/ /g,'') === '') {
      setStatus((prevStatus) => ({
        success: false,
        message: [...prevStatus.message, 'The email is empty'], validation: {...prevStatus.validation, email: false}
      }))
    } 
    else if (!regexEmail.test(formDetails.email)) {
      setStatus((prevStatus) => ({
        success: false,
        message: [...prevStatus.message, 'The email is incorrect'], validation: {...prevStatus.validation, email: false}
      }))
    }

    //phone validation
    if (formDetails.phone.replace(/ /g,'') === '') {
      setStatus((prevStatus) => ({
        success: false,
        message: [...prevStatus.message, 'The phone number is empty'], validation: {...prevStatus.validation, phone: false}
      }))
    } 
    else if (!regexPhone.test(formDetails.phone)) {
      setStatus((prevStatus) => ({
        success: false,
        message: [...prevStatus.message, 'The phone number is incorrect'], validation: {...prevStatus.validation, phone: false}
      }))
    }
    
    //text validation
    if (formDetails.message.replace(/ /g,'') === '') {
      setStatus((prevStatus) => ({
        success: false,
        message: [...prevStatus.message, 'The message is empty'], validation: {...prevStatus.validation, message: false}
      }))
    }

    console.log(status);
    return true;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const valid = validateFormDetails();

    if (valid) {
      setButtonText('Sending...');

      await emailjs.send('service_7plmzvu', 'template_aowo84u', formDetails, 'O9ZG_k5mXHcKr0FKu')
      .then((result) => {
          console.log(result.text);
          setStatus({...status, success: true, message: ['Message sent successfully']})
      }, (error) => {
          console.log(error.text);
          setStatus({...status, success: false, message: ['Something went wrong, please try again later.']})
      });

      setButtonText("Send");
    }
  }

  return (
    <section className='contactContainer'>
      <img src={contactImg} alt="Contact Us" />
      <div className='formContainer'>
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <input name='firstName' className={`${status.validation?.firstName ? '' : 'incorrextInput'}`} type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
          <input name='lastName' className={`${status.validation?.lastName ? '' : 'incorrextInput'}`} type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
          <input name='email' className={`${status.validation?.email ? '' : 'incorrextInput'}`} type='text' value={formDetails.email} placeholder='Email' onChange={(e) => onFormUpdate('email', e.target.value)} />
          <input name='phone' className={`${status.validation?.phone ? '' : 'incorrextInput'}`} type='text' value={formDetails.phone} placeholder='Phone Number' onChange={(e) => onFormUpdate('phone', e.target.value)} />
          <textarea name='message' rows={8} value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
        <button type='submit'><span>{buttonText}</span></button>
        {
          status?.message && status?.message.map((message, index) => <p key={index} className={status.success === false ? "fail" : "success"}>{message}</p>)
        }
        </form>
      </div>
    </section>
  )
}

export default Contact