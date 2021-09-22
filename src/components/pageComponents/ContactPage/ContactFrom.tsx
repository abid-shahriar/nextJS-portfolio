import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

import Typography from '../../Typography';
import { ContactFromWrapper, Form, Input, Textarea, SubmitButton } from './ContactFrom.styles';

export default function ContactFrom() {
  const [sendingData, setSendingData] = useState(false);

  const [formData, setFromData] = useState({
    name: '',
    email: '',
    message: ''
  });

  function handleSubmit(e: any) {
    e.preventDefault();

    setSendingData(true);

    axios
      .post('https://formspree.io/f/xpzkbbwq', formData)
      .then((res) => {
        if (res.status === 200) {
          toast.success('got your message, thank you!');
          setFromData({
            name: '',
            email: '',
            message: ''
          });
          setSendingData(false);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('something went wrong, please try again later!');
      });
  }

  return (
    <ContactFromWrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='name'
          placeholder='Your name'
          value={formData.name}
          onChange={(e: any) => setFromData({ ...formData, [e.target.name]: e.target.value })}
          required
        />
        <Input
          type='email'
          name='email'
          placeholder='Your email'
          value={formData.email}
          onChange={(e: any) => setFromData({ ...formData, [e.target.name]: e.target.value })}
          required
        />
        <Textarea
          placeholder='Your message...'
          name='message'
          value={formData.message}
          onChange={(e: any) => setFromData({ ...formData, [e.target.name]: e.target.value })}
          required
        />

        <SubmitButton type='submit' disabled={sendingData}>
          <Typography textAlign='center' fontSize='2rem' textTransform='capitalize'>
            {sendingData ? 'sending your message...' : 'send message'}
          </Typography>
        </SubmitButton>
      </Form>
    </ContactFromWrapper>
  );
}
