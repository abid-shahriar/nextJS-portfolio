import { Container } from '../../../layouts';
import Typography from '../../Typography';
import ContactFrom from './ContactFrom';

export default function index() {
  return (
    <Container>
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
