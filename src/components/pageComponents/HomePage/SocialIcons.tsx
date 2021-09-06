import Link from 'next/link';

import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { IconsContainer } from './styles';

export default function SocialIcons() {
  return (
    <IconsContainer>
      <Link href='https://facebook.com/abid.sh.akash'>
        <a>
          <FaFacebookSquare />
        </a>
      </Link>
      <Link href='https://instagram.com/find.abid'>
        <a>
          <FaInstagramSquare />
        </a>
      </Link>
      <Link href='https://linkedin.com/in/abidshahriar/'>
        <a>
          <FaLinkedin />
        </a>
      </Link>
      <Link href='https://github.com/abid-shahriar'>
        <a>
          <FaGithubSquare />
        </a>
      </Link>
    </IconsContainer>
  );
}
