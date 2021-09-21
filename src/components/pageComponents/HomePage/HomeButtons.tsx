import Link from 'next/link';

import Typography from '../../Typography';

import { BtnsContainer } from './styles';

export default function HomeButtons() {
  return (
    <BtnsContainer>
      <Link href='/abid_shahriar_resume.pdf'>
        <a>
          <Typography>Download Resume</Typography>
        </a>
      </Link>
      <Link href='/contact'>
        <a>
          <Typography>Message Me</Typography>
        </a>
      </Link>
    </BtnsContainer>
  );
}
