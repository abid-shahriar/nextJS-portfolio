import Link from 'next/link';

import Typography from '../../Typography';

import { BtnsContainer } from './styles';

export default function HomeButtons() {
  return (
    <BtnsContainer>
      <Link href='/'>
        <a>
          <Typography>Download Resume</Typography>
        </a>
      </Link>
      <Link href='/'>
        <a>
          <Typography>Message Me</Typography>
        </a>
      </Link>
    </BtnsContainer>
  );
}
