import { useRouter } from 'next/router';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import { Container } from './styles';

export function LeftButton() {
  const router = useRouter();
  const { pathname } = router;

  function handleLeftIconClick() {
    if (pathname === '/') return;

    switch (pathname) {
      case '/projects':
        router.push('/');
        break;
      case '/skills':
        router.push('/projects');
        break;
      case '/contact':
        router.push('/skills');
        break;

      default:
        break;
    }
  }

  return (
    <Container $left $firstPage={pathname === '/'} onClick={handleLeftIconClick}>
      <FaChevronLeft size='4rem' />
    </Container>
  );
}
export function RightButton() {
  const router = useRouter();
  const { pathname } = router;

  function handleRightIconClick() {
    if (pathname === '/contact') return;

    switch (pathname) {
      case '/':
        router.push('/projects');
        break;
      case '/projects':
        router.push('/skills');
        break;
      case '/skills':
        router.push('/contact');
        break;

      default:
        break;
    }
  }
  return (
    <Container $right $lastPage={pathname === '/contact'} onClick={handleRightIconClick}>
      <FaChevronRight size='4rem' />
    </Container>
  );
}
