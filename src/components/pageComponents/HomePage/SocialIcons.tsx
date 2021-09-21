import Link from 'next/link';

import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

import { IconsContainer } from './styles';

export default function SocialIcons() {
  return (
    <IconsContainer>
      <Link href='https://facebook.com/abid.sh.akash' passHref>
        <a target='_blank' rel='noopener noreferrer nofollow'>
          <FaFacebookSquare />
        </a>
      </Link>
      <Link href='https://instagram.com/find.abid' passHref>
        <a target='_blank' rel='noopener noreferrer nofollow'>
          <FaInstagramSquare />
        </a>
      </Link>
      <Link href='https://linkedin.com/in/abidshahriar/' passHref>
        <a target='_blank' rel='noopener noreferrer nofollow'>
          <FaLinkedin />
        </a>
      </Link>
      <Link href='https://github.com/abid-shahriar' passHref>
        <a target='_blank' rel='noopener noreferrer nofollow'>
          <FaGithubSquare />
        </a>
      </Link>
    </IconsContainer>
  );
}
