import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { Container } from '../../../layouts';
import ProjectCards from './ProjectCards';

export default function ProjectsPage() {
  const router = useRouter();

  const containerRef = useRef<any>(null);

  useEffect(() => {
    containerRef.current.addEventListener('swiped-right', () => {
      router.push('/');
    });
    containerRef.current.addEventListener('swiped-left', () => {
      router.push('/skills');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container ref={containerRef}>
      <ProjectCards />
    </Container>
  );
}
