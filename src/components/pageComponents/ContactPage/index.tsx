import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { Container } from '../../../layouts';
import Typography from '../../Typography';
import ContactFrom from './ContactFrom';

export default function ContactPage() {
  const router = useRouter();

  const containerRef = useRef<any>(null);

  useEffect(() => {
    containerRef.current.addEventListener('swiped-right', () => {
      router.push('/skills');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container ref={containerRef}>
      <Typography fontSize='2rem'>
        Feel free to send me a message by filling up the form below or just email me at{' '}
        <Typography variant='span' color='white'>
          <a href='mailto: abidshahriar7@gmail.com' style={{ textDecoration: 'underline' }}>
            abidshahriar7@gmail.com
          </a>
        </Typography>
        , I will reply as soon as possible.
      </Typography>

      <ContactFrom />
    </Container>
  );
}
