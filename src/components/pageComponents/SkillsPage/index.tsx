import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { Container } from '../../../layouts';
import Typography from '../../Typography';
import SkillCards from './SkillCards';

export default function SkillsPage() {
  const router = useRouter();

  const containerRef = useRef<any>(null);

  useEffect(() => {
    containerRef.current.addEventListener('swiped-right', () => {
      router.push('/projects');
    });
    containerRef.current.addEventListener('swiped-left', () => {
      router.push('/contact');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container ref={containerRef}>
      <Typography>
        I have worked with a bunch of technologies in the web development world, from HTML to NextJS and I have Intermediate level of experience in
        backend(NoSQL) technologies also. I always try to learn new technologies and do experiment with them.
      </Typography>

      <SkillCards />
    </Container>
  );
}
