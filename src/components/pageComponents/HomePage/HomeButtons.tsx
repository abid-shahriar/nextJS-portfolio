import Link from 'next/link';

import Typography from '../../Typography';

import { BtnsContainer } from './styles';

export default function HomeButtons() {
  function handlePdfDownload(e: any) {
    e.preventDefault();

    const a = document.createElement('a');
    a.setAttribute('download', 'abid_shahriar_resume.pdf');
    a.setAttribute('href', '/abid_shahriar_resume.pdf');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <BtnsContainer>
      <Link href='/'>
        <a onClick={handlePdfDownload}>
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
